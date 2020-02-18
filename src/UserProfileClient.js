const Utils = require("./Utils");
const UrlJoin = require("url-join");
const { FrameClient } = require("./FrameClient");

const SpaceContract = require("./contracts/BaseContentSpace");

class UserProfileClient {
  Log(message, error=false) {
    if(!this.debug) { return; }

    if(typeof message === "object") {
      message = JSON.stringify(message);
    }

    error ?
      // eslint-disable-next-line no-console
      console.error(`\n(elv-client-js#UserProfileClient) ${message}\n`) :
      // eslint-disable-next-line no-console
      console.log(`\n(elv-client-js#UserProfileClient) ${message}\n`);
  }

  /**
   * Methods used to access and modify information about the user
   *
   * <h4 id="PromptsAndAccessLevels">A note about access level and prompts: </h4>
   *
   * Note: This section only applies to applications working within Eluvio Core
   *
   * Users can choose whether or not their info is shared to applications. A user
   * may choose to allow open access to their profile, no access to their profile, or
   * they may choose to be prompted to give access when an application requests it. The
   * user's access level can be determined using the <a href="#AccessLevel">AccessLevel</a>
   * method.
   *
   * By default, users will be prompted to give access. For methods that access the user's private information,
   * Eluvio Core will intercept the request and prompt the user for permission before proceeding. In
   * these cases, the normal FrameClient timeout period will be ignored, and the response will come
   * only after the user accepts or rejects the request.
   *
   * Access and modification of user metadata is namespaced to the requesting application when using the
   * FrameClient. Public user metadata can be accessed using the PublicUserMetadata method.
   *
   * If the user refuses to give permission, an error will be thrown. Otherwise, the request will proceed
   * as normal.
   *
   * <h4>Usage</h4>
   *
   * Access the UserProfileClient from ElvClient or FrameClient via client.userProfileClient
   *
   * @example
let client = ElvClient.FromConfiguration({configuration: ClientConfiguration});

let wallet = client.GenerateWallet();
let signer = wallet.AddAccount({
  accountName: "Alice",
  privateKey: "0x0000000000000000000000000000000000000000000000000000000000000000"
});
client.SetSigner({signer});

await client.userProfileClient.UserMetadata()

let frameClient = new FrameClient();
await client.userProfileClient.UserMetadata()
   *
   */
  constructor({client, debug}) {
    this.client = client;
    this.debug = debug;
    this.userWalletAddresses = {};
  }

  /**
   * Get the user wallet address for the specified user, if it exists
   *
   * @namedParams
   * @param {string} address - The address of the user
   *
   * @return {Promise<string>} - The wallet address of the specified user, if it exists
   */
  async UserWalletAddress({address}) {
    if(!this.userWalletAddresses[address]) {
      this.Log(`Retrieving user wallet address for user ${address}`);

      const walletAddress =
        await this.client.CallContractMethod({
          abi: SpaceContract.abi,
          contractAddress: Utils.HashToAddress(this.client.contentSpaceId),
          methodName: "userWallets",
          methodArgs: [address]
        });

      if(!Utils.EqualAddress(walletAddress, Utils.nullAddress)) {
        this.userWalletAddresses[address] = walletAddress;
      }
    }

    return this.userWalletAddresses[address];
  }

  /**
   * Get the contract address of the current user's BaseAccessWallet contract
   *
   * @return {Promise<string>} - The contract address of the current user's wallet contract
   */
  async WalletAddress() {
    if(this.walletAddress) { return this.walletAddress; }

    if(this.walletCreationPromise) {
      await this.walletCreationPromise;
    }

    this.walletAddress = await this.UserWalletAddress({address: this.client.signer.address});

    if(!this.walletAddress) {
      this.Log(`Creating user wallet for user ${this.client.signer.address}`);

      // Make promise available so any other calls will wait
      this.walletCreationPromise = new Promise(async resolve => {
        // No wallet contract for the current user - create one
        if(!this.walletAddress || this.walletAddress === Utils.nullAddress) {
          // Don't attempt to create a user wallet if user has no funds
          const balance = await this.client.GetBalance({address: this.client.signer.address});
          if(balance < 0.1) {
            return undefined;
          }

          const walletCreationEvent = await this.client.CallContractMethodAndWait({
            contractAddress: Utils.HashToAddress(this.client.contentSpaceId),
            abi: SpaceContract.abi,
            methodName: "createAccessWallet",
            methodArgs: []
          });

          this.walletAddress = this.client.ExtractValueFromEvent({
            abi: SpaceContract.abi,
            event: walletCreationEvent,
            eventName: "CreateAccessWallet",
            eventValue: "wallet"
          });

          this.userWalletAddresses[Utils.FormatAddress(this.client.signer.address)] = this.walletAddress;
        }

        // Ensure wallet object is created
        const libraryId = this.client.contentSpaceLibraryId;
        const objectId = Utils.AddressToObjectId(this.walletAddress);

        try {
          await this.client.ContentObject({libraryId, objectId});
        } catch(error) {
          if(error.status === 404) {
            this.Log(`Creating wallet object for user ${this.client.signer.address}`);

            const createResponse = await this.client.CreateContentObject({libraryId, objectId});

            await this.client.ReplaceMetadata({
              libraryId,
              objectId,
              writeToken: createResponse.write_token,
              metadata: {
                "bitcode_flags": "abrmaster",
                "bitcode_format": "builtin"
              }
            });

            await this.client.FinalizeContentObject({
              libraryId,
              objectId,
              writeToken: createResponse.write_token
            });
          }
        }

        resolve();
      });
    }

    await this.walletCreationPromise;
    this.walletCreationPromise = undefined;

    return this.walletAddress;
  }

  /**
   * Access the specified user's public profile metadata
   *
   * @namedParams
   * @param {string=} address - The address of the user
   * @param {string=} metadataSubtree - Subtree of the metadata to retrieve
   * @param {boolean=} resolveLinks=false - If specified, links in the metadata will be resolved
   * @param {boolean=} resolveIncludeSource=false - If specified, resolved links will include the hash of the link at the root of the metadata

     Example:
       {
          "resolved-link": {
            ".": {
              "source": "hq__HPXNia6UtXyuUr6G3Lih8PyUhvYYHuyLTt3i7qSfYgYBB7sF1suR7ky7YRXsUARUrTB1Um1x5a"
            },
            ...
          }
       }
   *
   *
   * @return {Promise<Object|string>}
   */
  async PublicUserMetadata({address, metadataSubtree="/", resolveLinks=false, resolveIncludeSource=false}) {
    const walletAddress = await this.UserWalletAddress({address});

    if(!walletAddress) { return; }

    metadataSubtree = UrlJoin("public", metadataSubtree || "/");

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(walletAddress);

    return await this.client.ContentObjectMetadata({
      libraryId,
      objectId,
      metadataSubtree,
      resolveLinks,
      resolveIncludeSource
    });
  }

  /**
   * Access the current user's metadata
   *
   * Note: Subject to user's access level
   *
   * @see <a href="#PromptsAndAccessLevels">Prompts and access levels</a>
   *
   * @namedParams
   * @param {string=} metadataSubtree - Subtree of the metadata to retrieve
   * @param {boolean=} resolveLinks=false - If specified, links in the metadata will be resolved
   * @param {boolean=} resolveIncludeSource=false - If specified, resolved links will include the hash of the link at the root of the metadata

     Example:
       {
          "resolved-link": {
            ".": {
              "source": "hq__HPXNia6UtXyuUr6G3Lih8PyUhvYYHuyLTt3i7qSfYgYBB7sF1suR7ky7YRXsUARUrTB1Um1x5a"
            },
            ...
          }
       }
   *
   * @return {Promise<Object|string>} - The user's profile metadata - returns undefined if no metadata set or subtree doesn't exist
   */
  async UserMetadata({metadataSubtree="/", resolveLinks=false, resolveIncludeSource=false}={}) {
    this.Log(`Accessing private user metadata at ${metadataSubtree}`);

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(await this.WalletAddress());

    return await this.client.ContentObjectMetadata({
      libraryId,
      objectId,
      metadataSubtree,
      resolveLinks,
      resolveIncludeSource
    });
  }

  /**
   * Merge the current user's profile metadata
   *
   * @namedParams
   * @param {Object} metadata - New metadata
   * @param {string=} metadataSubtree - Subtree to merge into - modifies root metadata if not specified
   */
  async MergeUserMetadata({metadataSubtree="/", metadata={}}) {
    this.Log(`Merging user metadata at ${metadataSubtree}`);

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(await this.WalletAddress());

    const editRequest = await this.client.EditContentObject({libraryId, objectId});

    await this.client.MergeMetadata({libraryId, objectId, writeToken: editRequest.write_token, metadataSubtree, metadata});
    await this.client.FinalizeContentObject({libraryId, objectId, writeToken: editRequest.write_token});
  }

  /**
   * Replace the current user's profile metadata
   *
   * @namedParams
   * @param {Object} metadata - New metadata
   * @param {string=} metadataSubtree - Subtree to replace - modifies root metadata if not specified
   */
  async ReplaceUserMetadata({metadataSubtree="/", metadata={}}) {
    this.Log(`Replacing user metadata at ${metadataSubtree}`);

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(await this.WalletAddress());

    const editRequest = await this.client.EditContentObject({libraryId, objectId});

    await this.client.ReplaceMetadata({libraryId, objectId, writeToken: editRequest.write_token, metadataSubtree, metadata});
    await this.client.FinalizeContentObject({libraryId, objectId, writeToken: editRequest.write_token});
  }

  /**
   * Delete the specified subtree from the users profile metadata
   *
   * @namedParams
   * @param {string=} metadataSubtree - Subtree to delete - deletes all metadata if not specified
   */
  async DeleteUserMetadata({metadataSubtree="/"}) {
    this.Log(`Deleting user metadata at ${metadataSubtree}`);

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(await this.WalletAddress());

    const editRequest = await this.client.EditContentObject({libraryId, objectId});

    await this.client.DeleteMetadata({libraryId, objectId, writeToken: editRequest.write_token, metadataSubtree});
    await this.client.FinalizeContentObject({libraryId, objectId, writeToken: editRequest.write_token});
  }

  /**
   * Return the permissions the current user allows for apps to access their profile.
   *
   * "private" - No access allowed
   * "prompt" - (default) - When access is requested by an app, the user will be prompted to give permission
   * "public - Public - Any access allowed
   *
   * @return {Promise<string>} - Access setting
   */
  async AccessLevel() {
    return (await this.UserMetadata({metadataSubtree: "access_level"})) || "prompt";
  }

  /**
   * Set the current user's access level.
   *
   * Note: This method is not accessible to applications. Eluvio core will drop the request.
   *
   * @namedParams
   * @param level
   */
  async SetAccessLevel({level}) {
    level = level.toLowerCase();

    if(!["private", "prompt", "public"].includes(level)) {
      throw new Error("Invalid access level: " + level);
    }

    await this.ReplaceUserMetadata({metadataSubtree: "access_level", metadata: level});
  }

  /**
   * Get the URL of the current user's profile image
   *
   * Note: Part hash of profile image will be appended to the URL as a query parameter to invalidate
   * browser caching when the image is updated
   *
   * @namedParams
   * @param {string=} address - The address of the user. If not specified, the address of the current user will be used.
   *
   * @return {Promise<string | undefined>} - URL of the user's profile image. Will be undefined if no profile image is set.
   */
  async UserProfileImage({address}={}) {
    let walletAddress;
    if(address) {
      walletAddress = await this.UserWalletAddress({address});
    } else {
      address = this.client.signer.address;
      walletAddress = this.walletAddress;
    }

    if(!walletAddress) { return; }

    const imageHash = await this.PublicUserMetadata({address, metadataSubtree: "image"});

    if(!imageHash) { return; }

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(walletAddress);

    return await this.client.PublicRep({
      libraryId,
      objectId,
      rep: "image",
      queryParams: {hash: imageHash},
      noAuth: true,
      channelAuth: false
    });
  }

  /**
   * Set a new profile image for the current user
   *
   * @namedParams
   * @param {blob} image - The new profile image for the current user
   */
  async SetUserProfileImage({image}) {
    this.Log(`Setting profile image for user ${this.client.signer.address}`);

    const libraryId = this.client.contentSpaceLibraryId;
    const objectId = Utils.AddressToObjectId(await this.WalletAddress());

    const editRequest = await this.client.EditContentObject({libraryId, objectId});

    const uploadResponse = await this.client.UploadPart({
      libraryId,
      objectId,
      writeToken: editRequest.write_token,
      data: image
    });

    await this.client.MergeMetadata({
      libraryId,
      objectId,
      writeToken: editRequest.write_token,
      metadata: {
        image: uploadResponse.part.hash
      }
    });

    await this.client.MergeMetadata({
      libraryId,
      objectId,
      writeToken: editRequest.write_token,
      metadataSubtree: "public",
      metadata: {
        image: uploadResponse.part.hash
      }
    });

    await this.client.FinalizeContentObject({libraryId, objectId, writeToken: editRequest.write_token});
  }

  /**
   * Get the accumulated tags for the current user
   *
   * Note: Subject to user's access level
   *
   * @see <a href="#PromptsAndAccessLevels">Prompts and access levels</a>
   *
   * @return {Promise<Object>} - User tags
   */
  async CollectedTags() {
    return await this.UserMetadata({metadataSubtree: "collected_data"}) || {};
  }

  // Ensure recording tags never causes action to fail
  async RecordTags({libraryId, objectId, versionHash}) {
    try {
      await this.__RecordTags({libraryId, objectId, versionHash});
    } catch(error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async __RecordTags({libraryId, objectId, versionHash}) {
    const accessType = await this.client.AccessType({id: objectId});
    if(accessType !== "object") { return; }

    if(!versionHash && !libraryId) {
      libraryId = await this.client.ContentObjectLibraryId({objectId});
    }

    if(!versionHash) {
      versionHash = (await this.client.ContentObject({libraryId, objectId})).hash;
    }

    // If this object has already been seen, don't re-record tags
    const seen = await this.UserMetadata({metadataSubtree: UrlJoin("accessed_content", versionHash)});
    if(seen) { return; }

    const userLibraryId = this.client.contentSpaceLibraryId;
    const userObjectId = Utils.AddressToObjectId(await this.WalletAddress());

    // Mark content as seen
    const editRequest = await this.client.EditContentObject({libraryId: userLibraryId, objectId: userObjectId});
    await this.client.ReplaceMetadata({
      libraryId: userLibraryId,
      objectId: userObjectId,
      writeToken: editRequest.write_token,
      metadataSubtree: UrlJoin("accessed_content", versionHash),
      metadata: Date.now()
    });

    const contentTags = await this.client.ContentObjectMetadata({
      libraryId,
      objectId,
      versionHash,
      metadataSubtree: "video_tags"
    });

    if(contentTags && contentTags.length > 0) {
      let userTags = await this.CollectedTags();
      const formattedTags = this.__FormatVideoTags(contentTags);

      Object.keys(formattedTags).forEach(tag => {
        if(userTags[tag]) {
          // User has seen this tag before
          userTags[tag].occurrences += 1;
          userTags[tag].aggregate += formattedTags[tag];
        } else {
          // New tag
          userTags[tag] = {
            occurrences: 1,
            aggregate: formattedTags[tag]
          };
        }
      });

      // Update user tags
      await this.client.ReplaceMetadata({
        libraryId: userLibraryId,
        objectId: userObjectId,
        writeToken: editRequest.write_token,
        metadataSubtree: "collected_data",
        metadata: userTags
      });
    }

    await this.client.FinalizeContentObject({
      libraryId: userLibraryId,
      objectId: userObjectId,
      writeToken: editRequest.write_token,
      awaitCommitConfirmation: false
    });
  }

  /*
    Format video tags into an easier format and average scores
    Example content tags:
    [
    {
      "tags": [
        {
          "score": 0.3,
          "tag": "cherry"
        },
        {
          "score": 0.8,
          "tag": "chocolate"
        },
        {
          "score": 0.6,
          "tag": "boat"
        }
      ],
      "time_in": "00:00:00.000",
      "time_out": "00:03:00.000"
    },
    ...
    ]
 */
  __FormatVideoTags(videoTags) {
    let collectedTags = {};

    videoTags.forEach(videoTag => {
      const tags = videoTag["tags"];

      tags.forEach(tag => {
        if(collectedTags[tag.tag]) {
          collectedTags[tag.tag].occurrences += 1;
          collectedTags[tag.tag].aggregate += tag.score;
        } else {
          collectedTags[tag.tag] = {
            occurrences: 1,
            aggregate: tag.score
          };
        }
      });
    });

    let formattedTags = {};
    Object.keys(collectedTags).forEach(tag => {
      formattedTags[tag] = collectedTags[tag].aggregate / collectedTags[tag].occurrences;
    });

    return formattedTags;
  }

  // List of methods that may require a prompt - these should have an unlimited timeout period
  PromptedMethods() {
    return FrameClient.PromptedMethods();
  }

  // List of methods for accessing user metadata - these should be namespaced when used by an app
  MetadataMethods() {
    return FrameClient.MetadataMethods();
  }

  // Whitelist of methods allowed to be called using the frame API
  FrameAllowedMethods() {
    const forbiddenMethods = [
      "constructor",
      "FrameAllowedMethods",
      "Log",
      "MetadataMethods",
      "PromptedMethods",
      "RecordTags",
      "SetAccessLevel",
      "SetUserProfileImage",
      "__IsLibraryCreated",
      "__TouchLibrary",
      "__FormatVideoTags",
      "__RecordTags"
    ];

    return Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(method => !forbiddenMethods.includes(method));
  }
}

module.exports = UserProfileClient;
