"use strict";

var contract = {
  "abi": [{
    "constant": false,
    "inputs": [],
    "name": "parentAddress",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentObjects",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusNonceFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "name": "setContentSpace",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusSendFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContractRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_OBJECT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "",
      "type": "bytes"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "pke_requestor",
      "type": "string"
    }, {
      "name": "pke_AFGH",
      "type": "string"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stakeholders",
      "type": "address[]"
    }],
    "name": "contentAccessRequest",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getAccessGroupsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canContribute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }, {
      "name": "content_contract",
      "type": "address"
    }],
    "name": "addContentType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_GROUP",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canConfirm",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_LIBRARY",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_CONFIRMED",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "contentTypeContracts",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentTimestamp",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "typeHash",
      "type": "bytes32"
    }],
    "name": "findTypeByHash",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContractRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "canNodePublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "canReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "validType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "contentObj",
      "type": "address"
    }],
    "name": "publish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getAccessGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAll",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }],
    "name": "getAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "accessGroups",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "addressKMS",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "countVersionHashes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "",
      "type": "bytes"
    }, {
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }, {
      "name": "ml_out_hash",
      "type": "bytes32"
    }],
    "name": "contentAccessComplete",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "requiresReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentObjectRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "hasManagerAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "confirmCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_TENTATIVE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_guarantor",
      "type": "address"
    }, {
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "execute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_EDIT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "pendingHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTRACT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkLibraryRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_TYPE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contracts",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newCreator",
      "type": "address"
    }],
    "name": "transferCreatorship",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContract",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTransaction",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "contractExists",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionTimestamp",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionHashes",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setLibraryRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_NONE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentTypes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentTypeRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpLibraries",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusBalanceFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "pke_requestor",
      "type": "string"
    }, {
      "name": "pke_AFGH",
      "type": "string"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stakeholders",
      "type": "address[]"
    }],
    "name": "accessRequestMsg",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "hasAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusOk",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_SEE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }, {
      "name": "ml_out_hash",
      "type": "bytes32"
    }],
    "name": "accessCompleteMsg",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_objectHash",
      "type": "string"
    }],
    "name": "commit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "contentTypes",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canPublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "whitelistedType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypes",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkDirectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContractRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentObjects",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentSpace",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "updateRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "libraries",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "setAddressKMS",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getLibrariesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentObject",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_ACCESS",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAccessGroups",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "objectHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_versionHash",
      "type": "string"
    }],
    "name": "deleteVersion",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusSigFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentObjectsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "accessRequest",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setAccessGroupRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTimestamp",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }],
    "name": "getLibraryRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContractsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "removeContentType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "guarantor",
      "type": "address"
    }, {
      "indexed": false,
      "name": "code",
      "type": "int256"
    }],
    "name": "ExecStatus",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "principal",
      "type": "address"
    }, {
      "indexed": false,
      "name": "entity",
      "type": "address"
    }, {
      "indexed": false,
      "name": "aggregate",
      "type": "uint8"
    }],
    "name": "RightsChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "a",
      "type": "address"
    }],
    "name": "dbgAddress",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }, {
      "indexed": false,
      "name": "contentContract",
      "type": "address"
    }],
    "name": "ContentTypeAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }],
    "name": "ContentTypeRemoved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "parentAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "CommitPending",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "UpdateRequest",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "versionHash",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "int256"
    }],
    "name": "VersionDelete",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "7f41636365737369626c6532303139303232323133353930304d4c00000000000060009081557f4f776e61626c6532303139303532383139333830304d4c00000000000000000060019081557f4564697461626c653230313930373135313035363030504f00000000000000006005557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600b55600e919091557f416363657373496e6465786f7232303139303532383139343230304d4c0000006010556011805460ff1916821761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff00000000191664050000000017905560e06040526080908152600a60a052606460c0526200011d906012906003620001f9565b507f427341636365737357616c6c65743230313930363131313230303030504f00006027556040516020806200483383398101604052516002805432600160a060020a031991821681179092556003805482169092179091556011546013805462010000830460ff90811660ff1992831617909255601b80546101008504841690831617905560178054838516908316179055601f805463010000008504841690831617905560238054640100000000909404909216921691909117905560048054909116600160a060020a03909216919091179055620002b7565b600183019183908215620002815791602002820160005b838211156200025057835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000210565b80156200027f5782816101000a81549060ff021916905560010160208160000104928301926001030262000250565b505b506200028f92915062000293565b5090565b620002b491905b808211156200028f57805460ff191681556001016200029a565b90565b61456c80620002c76000396000f3006080604052600436106104725763ffffffff60e060020a600035041662821de3811461047457806302d05d3f146104a5578063048bd529146104ba57806304f55daf146104e1578063055af48f146104f657806307a082371461051757806308d865d71461052c578063091600e6146105635780630add6d2a146105785780630dc10d3f146106d65780630eaec2c5146106eb5780630f58a7861461072057806312915a301461074757806314cfabb31461075c57806315c0bac11461077157806316aed2321461079857806318689733146107ad5780631cdbee5a146107c25780631e2ff94f146107e35780631f2caaec146107f8578063224dcba01461081057806326683e141461083d57806329d002191461085e57806329dedde51461087f5780632cf99422146108a05780632d474cbd146108c15780632fa5c842146108d9578063304f4a7b1461091957806330e669491461093a57806332eaf21b1461096c578063331b86c0146109815780633abaae55146109965780633dd71d99146109fd5780633def514014610a1257806341c0e1b514610a3f57806342e7ba7b14610a54578063446e882614610a75578063479a0c5114610a7d578063508ad27814610a9257806354fd4d5014610ace5780635c1d305914610ae35780635d97b6c2146107ad5780635faecb7614610af8578063628449fd14610b1f5780636373a41114610ba95780636813b6d114610bbe57806368a0469a14610be557806369881c0c14610bfa5780636c0f79b614610c1b5780636d2e4b1b14610c305780636e37542714610c515780636ebc8c8614610c66578063763d5ee614610c7e5780637709bc7814610cb15780637886f74714610cd25780637ca8f61814610cea5780637cbb7bf214610d025780637fb52f1a14610d2f5780638232f3f114610d5d57806385e0a20014610d725780638635adb514610d875780638da5cb5b14610db457806392297d7b14610dc95780639476c47814610dde578063957a3aa414610df357806395a078e814610f0f57806395ba60ba14610f3057806396eba03d14610d5d5780639751067114610f455780639867db7414610f6f578063991a3a7c14610fc85780639b55f901146106eb5780639cb121ba14610fe05780639f46133e14611001578063a00b38c414611016578063a4081d6214611044578063a864dfa514611065578063a980892d1461108c578063aa3f6952146110a1578063af570c04146110b9578063c287e0ed146110ce578063c4b1978d146110e3578063c65bcbe2146110f8578063c9e8e72d1461110d578063cb86806d1461112e578063cf8a750314611143578063d15d62a71461115b578063d1aeb65114610a7d578063d30f8cd014611173578063e02dd9c214611188578063e1a707171461119d578063eb23b7aa146111f6578063ebe9314e1461120b578063f155188714611220578063f17bda9114611235578063f2fde38b14611262578063f50b2efe14611283578063fb52222c1461129b578063fccc134f146112bc578063fd089196146112d1578063fe538c5a146112f2575b005b34801561048057600080fd5b50610489611319565b60408051600160a060020a039092168252519081900360200190f35b3480156104b157600080fd5b50610489611329565b3480156104c657600080fd5b506104cf611338565b60408051918252519081900360200190f35b3480156104ed57600080fd5b506104cf611349565b34801561050257600080fd5b50610472600160a060020a036004351661134e565b34801561052357600080fd5b506104cf61139e565b34801561053857600080fd5b5061054d600160a060020a03600435166113a3565b6040805160ff9092168252519081900360200190f35b34801561056f57600080fd5b5061054d6113c5565b34801561058457600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526104cf958335600160a060020a031695369560449491939091019190819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989b60ff8b35169b909a90999401975091955091820193509150819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506113ce9650505050505050565b3480156106e257600080fd5b506104cf6116f9565b3480156106f757600080fd5b5061070c600160a060020a03600435166116ff565b604080519115158252519081900360200190f35b34801561072c57600080fd5b50610472600160a060020a036004358116906024351661172e565b34801561075357600080fd5b5061054d6118a3565b34801561076857600080fd5b5061070c6118b1565b34801561077d57600080fd5b5061070c600160a060020a036004351660ff602435166118bc565b3480156107a457600080fd5b5061054d6118dc565b3480156107b957600080fd5b5061054d6118eb565b3480156107ce57600080fd5b50610489600160a060020a03600435166118f0565b3480156107ef57600080fd5b506104cf61190b565b34801561080457600080fd5b50610489600435611911565b34801561081c57600080fd5b50610472600160a060020a036004351660ff60243581169060443516611b95565b34801561084957600080fd5b5061070c600160a060020a0360043516611ba7565b34801561086a57600080fd5b5061070c600160a060020a0360043516611c48565b34801561088b57600080fd5b5061070c600160a060020a0360043516611c4e565b3480156108ac57600080fd5b5061070c600160a060020a0360043516611c6c565b3480156108cd57600080fd5b50610489600435611d8c565b3480156108e557600080fd5b506108ee611db9565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561092557600080fd5b5061054d600160a060020a0360043516611e04565b34801561094657600080fd5b5061094f611e22565b6040805160ff909316835260208301919091528051918290030190f35b34801561097857600080fd5b50610489611e31565b34801561098d57600080fd5b506104cf611e40565b60408051602060046024803582810135601f810185900485028601850190965285855261070c958335600160a060020a031695369560449491939091019190819084018382808284375094975050843595505050602083013592604001359150611e469050565b348015610a0957600080fd5b5061070c611ef1565b348015610a1e57600080fd5b50610472600160a060020a036004351660ff60243581169060443516611ef6565b348015610a4b57600080fd5b50610472611f03565b348015610a6057600080fd5b5061070c600160a060020a0360043516611f3f565b61070c611f53565b348015610a8957600080fd5b5061054d611349565b348015610a9e57600080fd5b5061070c600160a060020a0360043581169060ff602435169060443590606435906084351660a43560c435612128565b348015610ada57600080fd5b506104cf6123ff565b348015610aef57600080fd5b506104cf612405565b348015610b0457600080fd5b5061070c600160a060020a036004351660ff6024351661240b565b348015610b2b57600080fd5b50610b3461241f565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610b6e578181015183820152602001610b56565b50505050905090810190601f168015610b9b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610bb557600080fd5b5061054d6124ad565b348015610bca57600080fd5b5061070c600160a060020a036004351660ff602435166124be565b348015610bf157600080fd5b5061054d6124d8565b348015610c0657600080fd5b5061054d600160a060020a03600435166124e8565b348015610c2757600080fd5b5061094f612506565b348015610c3c57600080fd5b50610472600160a060020a0360043516612515565b348015610c5d57600080fd5b5061070c612563565b348015610c7257600080fd5b50610489600435612574565b348015610c8a57600080fd5b5061070c60ff60043516602435604435600160a060020a036064351660843560a435612586565b348015610cbd57600080fd5b5061070c600160a060020a03600435166126ef565b348015610cde57600080fd5b506104cf6004356126f7565b348015610cf657600080fd5b50610b34600435612716565b348015610d0e57600080fd5b50610472600160a060020a036004351660ff6024358116906044351661278a565b348015610d3b57600080fd5b5061070c60ff600435811690600160a060020a03602435169060443516612797565b348015610d6957600080fd5b5061054d61294e565b348015610d7e57600080fd5b506104cf612953565b348015610d9357600080fd5b50610472600160a060020a036004351660ff6024358116906044351661295f565b348015610dc057600080fd5b5061048961296c565b348015610dd557600080fd5b506104cf61297b565b348015610dea57600080fd5b506104cf6118eb565b348015610dff57600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526104cf948235600160a060020a0316946024803560ff169536959460649492019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506129879650505050505050565b348015610f1b57600080fd5b5061070c600160a060020a0360043516612b57565b348015610f3c57600080fd5b506104cf61294e565b348015610f5157600080fd5b506104cf600160a060020a0360043516602435604435606435612b5d565b348015610f7b57600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610472943694929360249392840191908190840183828082843750949750612c109650505050505050565b348015610fd457600080fd5b50610489600435612d20565b348015610fec57600080fd5b5061070c600160a060020a0360043516612d48565b34801561100d57600080fd5b5061094f612d9f565b34801561102257600080fd5b5061070c60ff600435811690600160a060020a03602435169060443516612dae565b34801561105057600080fd5b5061054d600160a060020a0360043516612f0a565b34801561107157600080fd5b5061070c600160a060020a036004351660ff60243516612f27565b34801561109857600080fd5b5061094f612f43565b3480156110ad57600080fd5b50610489600435612f52565b3480156110c557600080fd5b50610489612f64565b3480156110da57600080fd5b50610472612f73565b3480156110ef57600080fd5b5061094f613049565b34801561110457600080fd5b506104cf613058565b34801561111957600080fd5b50610472600160a060020a036004351661305e565b34801561113a57600080fd5b506104cf6130ae565b34801561114f57600080fd5b506104896004356130b4565b34801561116757600080fd5b506104896004356130c6565b34801561117f57600080fd5b506104cf6130d8565b34801561119457600080fd5b50610b346130e4565b3480156111a957600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526104cf94369492936024939284019190819084018382808284375094975061313f9650505050505050565b34801561120257600080fd5b506104cf6136e7565b34801561121757600080fd5b506104cf6136ec565b34801561122c57600080fd5b5061070c6136f2565b34801561124157600080fd5b50610472600160a060020a036004351660ff60243581169060443516613723565b34801561126e57600080fd5b50610472600160a060020a0360043516613730565b34801561128f57600080fd5b5061070c600435613795565b3480156112a757600080fd5b5061054d600160a060020a03600435166137b1565b3480156112c857600080fd5b506104cf6137cf565b3480156112dd57600080fd5b5061070c600160a060020a03600435166137d5565b3480156112fe57600080fd5b5061070c600160a060020a036004351660ff60243516613978565b600454600160a060020a03165b90565b600254600160a060020a031681565b60006113446017613993565b905090565b600181565b600354600160a060020a03163214806113715750600354600160a060020a031633145b151561137c57600080fd5b60048054600160a060020a031916600160a060020a0392909216919091179055565b600481565b600160a060020a03811660009081526024602052604090205460ff165b919050565b60115460ff1681565b6000806000806000808c945084600160a060020a03166338d0f5048c8a8a6040518463ffffffff1660e060020a028152600401808460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561144e578181015183820152602001611436565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561148d578181015183820152602001611475565b5050505090500195505050505050606060405180830381600087803b1580156114b557600080fd5b505af11580156114c9573d6000803e3d6000fd5b505050506040513d60608110156114df57600080fd5b508051602082015160409092015195509350915060ff83161561150157600080fd5b600160a060020a03851663a1ff106e60ff84161515611521576000611523565b855b8d8d8d8d8d6040518763ffffffff1660e060020a028152600401808660ff1660ff16815260200180602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b8381101561158f578181015183820152602001611577565b50505050905090810190601f1680156115bc5780820380516001836020036101000a031916815260200191505b5085810384528851815288516020918201918a019080838360005b838110156115ef5781810151838201526020016115d7565b50505050905090810190601f16801561161c5780820380516001836020036101000a031916815260200191505b508581038352875181528751602091820191808a01910280838360005b83811015611651578181015183820152602001611639565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015611690578181015183820152602001611678565b5050505090500199505050505050505050506020604051808303818588803b1580156116bb57600080fd5b505af11580156116cf573d6000803e3d6000fd5b50505050506040513d60208110156116e657600080fd5b50519d9c50505050505050505050505050565b601e5490565b600354600090600160a060020a03838116911614806117285750600354600160a060020a031633145b92915050565b600354600160a060020a03163214806117515750600354600160a060020a031633145b151561175c57600080fd5b600160a060020a038083166000908152600f60205260409020541615801561178a575061178882612d48565b155b1561183657600d54600e5410156117e05781600d600e548154811015156117ad57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555061182c565b600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5018054600160a060020a031916600160a060020a0384161790555b600e805460010190555b600160a060020a038281166000818152600f60209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b601154610100900460ff1681565b600061134433611ba7565b6011546000906118d590610100900460ff168484612797565b9392505050565b60115462010000900460ff1681565b600281565b600f60205260009081526040902054600160a060020a031681565b60285481565b600080805b600d54821015611b8957600d80548390811061192e57fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b6020831061198f5780518252601f199092019160209182019101611970565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b1580156119fe57600080fd5b505af1158015611a12573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611a3b57600080fd5b810190808051640100000000811115611a5357600080fd5b82016020810184811115611a6657600080fd5b8151640100000000811182820187101715611a8057600080fd5b50509291905050506040516020018082805190602001908083835b60208310611aba5780518252601f199092019160209182019101611a9b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611b1d5780518252601f199092019160209182019101611afe565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415611b7e57600d805483908110611b6257fe5b600091825260209091200154600160a060020a03169250611b8e565b600190910190611916565b600092505b5050919050565b611ba26023848484613bf9565b505050565b60048054604080517f26683e14000000000000000000000000000000000000000000000000000000008152600160a060020a038581169482019490945290516000939092169182916326683e1491602480830192602092919082900301818887803b158015611c1557600080fd5b505af1158015611c29573d6000803e3d6000fd5b505050506040513d6020811015611c3f57600080fd5b50519392505050565b50600090565b6000600e5460001415611c63575060016113c0565b61172882612d48565b60008033600160a060020a03841614611c8457600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015611cd157600080fd5b505af1158015611ce5573d6000803e3d6000fd5b505050506040513d6020811015611cfb57600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b158015611d5857600080fd5b505af1158015611d6c573d6000803e3d6000fd5b505050506040513d6020811015611d8257600080fd5b5051159392505050565b601d80546000919083908110611d9e57fe5b600091825260209091200154600160a060020a031692915050565b6000806000806000611dcb6013613993565b611dd5601b613993565b611ddf6017613993565b611de9601f613993565b611df36023613993565b945094509450945094509091929394565b600160a060020a03166000908152601c602052604090205460ff1690565b601b54601e5460ff9091169082565b600c54600160a060020a031681565b60085490565b604080517f5cc4aa9b00000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905290516000918791600160a060020a03831691635cc4aa9b91606480830192602092919082900301818887803b158015611eba57600080fd5b505af1158015611ece573d6000803e3d6000fd5b505050506040513d6020811015611ee457600080fd5b5051979650505050505050565b600090565b611ba26017848484613bf9565b600354600160a060020a0316321480611f265750600354600160a060020a031633145b1515611f3157600080fd5b600354600160a060020a0316ff5b600354600160a060020a0390811691161490565b6000611f5d6118b1565b1515611f6857600080fd5b6000600680546001816001161561010002031660029004905011156120175760088054600181810180845560009390935260068054611fde937ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30192600261010091831615919091026000190190911604614342565b5050600754600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01555b600a805461203a9160069160026000196101006001841615020190911604614342565b504260075560408051602081019182905260009081905261205d91600a916143c7565b5060045460408051600160a060020a039092168083526020830182815260068054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e949293909291906060830190849080156121135780601f106120e857610100808354040283529160200191612113565b820191906000526020600020905b8154815290600101906020018083116120f657829003601f168201915b5050935050505060405180910390a150600190565b600454600090600160a060020a03168180338314806121d45750604080517fd6be0f490000000000000000000000000000000000000000000000000000000081523360048201529051600091600160a060020a0386169163d6be0f499160248082019260209290919082900301818787803b1580156121a657600080fd5b505af11580156121ba573d6000803e3d6000fd5b505050506040513d60208110156121d057600080fd5b5051115b15156121df57600080fd5b600083600160a060020a031663d6be0f498d6040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561223c57600080fd5b505af1158015612250573d6000803e3d6000fd5b505050506040513d602081101561226657600080fd5b50511161227257600080fd5b60285485116122b65760408051600160a060020a038d168152600160208201528151600080516020614521833981519152929181900390910190a1600093506123f1565b30318611156122fa5760408051600160a060020a038d168152600260208201528151600080516020614521833981519152929181900390910190a1600093506123f1565b6123088a8a8a8a8a8a612586565b915081151561234c5760408051600160a060020a038d168152600360208201528151600080516020614521833981519152929181900390910190a1600093506123f1565b6028859055604051600160a060020a0388169087156108fc029088906000818181858888f1935050505090508015156123ba5760408051600160a060020a038d168152600460208201528151600080516020614521833981519152929181900390910190a1600093506123f1565b60408051600160a060020a038d168152600060208201528151600080516020614521833981519152929181900390910190a1600193505b505050979650505050505050565b60275481565b60225490565b6011546000906118d59060ff168484612797565b600a805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156124a55780601f1061247a576101008083540402835291602001916124a5565b820191906000526020600020905b81548152906001019060200180831161248857829003601f168201915b505050505081565b601154640100000000900460ff1681565b6011546000906118d59062010000900460ff168484612797565b6011546301000000900460ff1681565b600160a060020a031660009081526018602052604090205460ff1690565b60235460265460ff9091169082565b600254600160a060020a0316321461252c57600080fd5b600160a060020a038116151561254157600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600354600160a060020a0316321490565b602580546000919083908110611d9e57fe5b604080516c01000000000000000000000000308102602080840191909152600160a060020a038716909102603483015260488201859052606880830185905283518084039091018152608890920192839052815160009384938493909282918401908083835b6020831061260b5780518252601f1990920191602091820191016125ec565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001828a8a8a604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af11580156126b1573d6000803e3d6000fd5b5050604051601f190151600354909250600160a060020a0380841691161490506126de57600092506126e3565b600192505b50509695505050505050565b6000903b1190565b600980548290811061270557fe5b600091825260209091200154905081565b600880548290811061272457fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152935090918301828280156124a55780601f1061247a576101008083540402835291602001916124a5565b611ba26013848484613bf9565b6000806000806000806127ab898989612dae565b9450600185151514156127c15760019550612942565b600091505b601e548210156128c157601d8054839081106127de57fe5b600091825260209091200154600160a060020a0316925082156128b657604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915194955085949185169163a00b38c4916064808201926020929091908290030181600087803b15801561287757600080fd5b505af115801561288b573d6000803e3d6000fd5b505050506040513d60208110156128a157600080fd5b50511515600114156128b65760019550612942565b6001909101906127c6565b87905080600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561290257600080fd5b505af1158015612916573d6000803e3d6000fd5b505050506040513d602081101561292c57600080fd5b5051600354600160a060020a0390811691161495505b50505050509392505050565b600081565b6000611344601f613993565b611ba2601f848484613bf9565b600354600160a060020a031681565b60006113446013613993565b60008686868686866040516020018087600160a060020a0316600160a060020a03166c010000000000000000000000000281526014018660ff1660ff167f010000000000000000000000000000000000000000000000000000000000000002815260010185805190602001908083835b60208310612a165780518252601f1990920191602091820191016129f7565b51815160209384036101000a600019018019909216911617905287519190930192870191508083835b60208310612a5e5780518252601f199092019160209182019101612a3f565b51815160209384036101000a60001901801990921691161790528651919093019286810192500280838360005b83811015612aa3578181015183820152602001612a8b565b50505050905001828051906020019060200280838360005b83811015612ad3578181015183820152602001612abb565b5050505090500196505050505050506040516020818303038152906040526040518082805190602001908083835b60208310612b205780518252601f199092019160209182019101612b01565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209a9950505050505050505050565b50600190565b604080516c01000000000000000000000000600160a060020a0387160260208083019190915260348201869052605482018590526074808301859052835180840390910181526094909201928390528151600093918291908401908083835b60208310612bdb5780518252601f199092019160209182019101612bbc565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912098975050505050505050565b612c18612563565b1515612c2357600080fd5b8051608011612c3157600080fd5b8051612c4490600a9060208401906143c7565b506004547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316612c7b611319565b60408051600160a060020a038085168252831660208201526060918101828152600a80546002600019610100600184161502019091160493830184905292608083019084908015612d0d5780601f10612ce257610100808354040283529160200191612d0d565b820191906000526020600020905b815481529060010190602001808311612cf057829003601f168201915b505094505050505060405180910390a150565b600d805482908110612d2e57fe5b600091825260209091200154600160a060020a0316905081565b600080805b600e54811015612d985783600160a060020a0316600d82815481101515612d7057fe5b600091825260209091200154600160a060020a03161415612d9057600191505b600101612d4d565b5092915050565b601f5460225460ff9091169082565b600080839050600360009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612e1157600080fd5b505af1158015612e25573d6000803e3d6000fd5b505050506040513d6020811015612e3b57600080fd5b5051600160a060020a03161415612e555760019150612f02565b60115460ff86811691161415612e7857612e7160178585614112565b9150612f02565b60115460ff868116610100909204161415612e9957612e71601b8585614112565b60115460ff86811662010000909204161415612ebb57612e7160138585614112565b60115460ff868116640100000000909204161415612edf57612e7160238585614112565b60115460ff8681166301000000909204161415612f0257612e71601f8585614112565b509392505050565b600160a060020a0316600090815260208052604090205460ff1690565b6011546000906118d590640100000000900460ff168484612797565b601754601a5460ff9091169082565b602180546000919083908110611d9e57fe5b600454600160a060020a031681565b600354600160a060020a0316331480612f8f5750612f8f6118b1565b1515612f9a57600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156130395780601f1061300e57610100808354040283529160200191613039565b820191906000526020600020905b81548152906001019060200180831161301c57829003601f168201915b50509250505060405180910390a1565b60135460165460ff9091169082565b600e5481565b600354600160a060020a03163214806130815750600354600160a060020a031633145b151561308c57600080fd5b600c8054600160a060020a031916600160a060020a0392909216919091179055565b60165490565b601980546000919083908110611d9e57fe5b601580546000919083908110611d9e57fe5b6000611344601b613993565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156124a55780601f1061247a576101008083540402835291602001916124a5565b600080600080600080613150612563565b151561315b57600080fd5b866040516020018082805190602001908083835b6020831061318e5780518252601f19909201916020918201910161316f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b602083106131f15780518252601f1990920191602091820191016131d2565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450600660405160200180828054600181600116156101000203166002900480156132805780601f1061325e576101008083540402835291820191613280565b820191906000526020600020905b81548152906001019060200180831161326c575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106132c35780518252601f1990920191602091820191016132a4565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209650505050848414156133e457604080516020810191829052600090819052613317916006916143c7565b506000600781905560045460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b8381101561339f578181015183820152602001613387565b50505050905090810190601f1680156133cc5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1600095506136dd565b6000199250600091505b6008548210156135fa57600880548390811061340657fe5b90600052602060002001604051602001808280546001816001161561010002031660029004801561346e5780601f1061344c57610100808354040283529182019161346e565b820191906000526020600020905b81548152906001019060200180831161345a575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106134b15780518252601f199092019160209182019101613492565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209350505050848114156135ef5760088054839081106134f557fe5b90600052602060002001600061350b9190614435565b600980548390811061351957fe5b60009182526020822001556008546000190182146135bf5760088054600019810190811061354357fe5b9060005260206000200160088381548110151561355c57fe5b906000526020600020019080546001816001161561010002031660029004613585929190614342565b5060098054600019810190811061359857fe5b90600052602060002001546009838154811015156135b257fe5b6000918252602090912001555b60088054906135d290600019830161447c565b5060098054906135e69060001983016144a0565b508192506135fa565b6001909101906133ee565b60001983141561360957600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600460009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561369d578181015183820152602001613685565b50505050905090810190601f1680156136ca5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600381565b601a5490565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b611ba2601b848484613bf9565b600354600160a060020a03163214806137535750600354600160a060020a031633145b151561375e57600080fd5b600160a060020a038116151561377357600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b60006028548211156137a9575060016113c0565b506000919050565b600160a060020a031660009081526014602052604090205460ff1690565b60265490565b60035460009081908190600160a060020a03163214806137ff5750600354600160a060020a031633145b151561380a57600080fd5b5050600e546000190160005b600e54811015611b895783600160a060020a0316600d8281548110151561383957fe5b600091825260209091200154600160a060020a0316141561397057600d80548290811061386257fe5b60009182526020909120018054600160a060020a031916905580821461390757600d80548390811061389057fe5b600091825260209091200154600d8054600160a060020a0390921691839081106138b657fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600d8054839081106138ed57fe5b60009182526020909120018054600160a060020a03191690555b600e829055600160a060020a0384166000818152600f60209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250611b8e565b600101613816565b6011546000906118d5906301000000900460ff168484612797565b600080805b8360030154811015612d98576139d284600201828154811015156139b857fe5b600091825260209091200154600160a060020a03166126ef565b1515613b5c577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260818560020183815481101515613a0b57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a160028401805482908110613a7c57fe5b60009182526020909120018054600160a060020a0319169055600384015460019290920191600019018114613b4b57836002016001856003015403815481101515613ac357fe5b600091825260209091200154600285018054600160a060020a039092169183908110613aeb57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550836002016001856003015403815481101515613b3157fe5b60009182526020909120018054600160a060020a03191690555b600384018054600019019055613bf4565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b260818560020183815481101515613b8f57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b613998565b6000806000806000613c096144c4565b600060ff881615613dfd5760048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152329381019390935251600160a060020a03909116985088916363e6ffdd9160248083019260209291908290030181600087803b158015613c7e57600080fd5b505af1158015613c92573d6000803e3d6000fd5b505050506040513d6020811015613ca857600080fd5b50519550600160a060020a0386161515613d3d5789945084600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613cfd57600080fd5b505af1158015613d11573d6000803e3d6000fd5b505050506040513d6020811015613d2757600080fd5b5051600160a060020a03163214613d3d57600080fd5b600160a060020a03861615613dfd578a54604080517f7fb52f1a00000000000000000000000000000000000000000000000000000000815260ff9092166004830152600160a060020a038c8116602484015260026044840152905188965090861691637fb52f1a9160648083019260209291908290030181600087803b158015613dc657600080fd5b505af1158015613dda573d6000803e3d6000fd5b505050506040513d6020811015613df057600080fd5b50511515613dfd57600080fd5b600160a060020a038a16600090815260018c01602090815260409182902054600a60ff91821690810682168087526064820681900383169387018490529281039290920316918401919091529250613e5432611f3f565b151560011415613f8b5760ff88161515613e875760008260ff8b1660038110613e7957fe5b60ff90921660209290920201525b60018260ff8b1660038110613e9857fe5b602002015160ff16148015613eb1575060ff8816600114155b15613efc57601260ff8a1660038110613ec657fe5b602081049091015460ff601f9092166101000a9004811689029083908b1660038110613eee57fe5b60ff90921660209290920201525b600160ff891610613f4f57601260ff8a1660038110613f1757fe5b602091828204019190069054906101000a900460ff16600202828a60ff16600381101515613f4157fe5b60ff90921660209290920201525b60ff8916158015613f62575060ff881615155b15613f865760028260ff8b1660038110613f7857fe5b60ff90921660209290920201525b614025565b600160ff891610801590613fb357508160ff8a1660038110613fa957fe5b602002015160ff16155b15613ffc57601260ff8a1660038110613fc857fe5b602081049091015460ff601f9092166101000a900481169083908b1660038110613fee57fe5b60ff90921660209290920201525b60ff881615156140255760008260ff8b166003811061401757fe5b60ff90921660209290920201525b81600260200201518260016020020151836000602002015101019050808b60010160008c600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff16600014158015614096575060ff8316155b156140a5576140a58b8b614166565b60ff811615156140bb576140b98b8b6141fd565b505b60408051308152600160a060020a038c16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff9081169060129084166003811061414257fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b6002820154600383015410156141bf578082600201836003015481548110151561418c57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506141f0565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b83600301548110156143385782600160a060020a0316846002018281548110151561422857fe5b600091825260209091200154600160a060020a03161415614330576002840180548290811061425357fe5b60009182526020909120018054600160a060020a0319169055600384015460001901811461431b5783600201600185600301540381548110151561429357fe5b600091825260209091200154600285018054600160a060020a0390921691839081106142bb57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561430157fe5b60009182526020909120018054600160a060020a03191690555b60038401805460001901905560019150612d98565b600101614201565b5060009392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061437b57805485556143b7565b828001600101855582156143b757600052602060002091601f016020900482015b828111156143b757825482559160010191906001019061439c565b506143c39291506144e3565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061440857805160ff19168380011785556143b7565b828001600101855582156143b7579182015b828111156143b757825182559160200191906001019061441a565b50805460018160011615610100020316600290046000825580601f1061445b5750614479565b601f01602090049060005260206000209081019061447991906144e3565b50565b815481835581811115611ba257600083815260209020611ba29181019083016144fd565b815481835581811115611ba257600083815260209020611ba29181019083016144e3565b6060604051908101604052806003906020820280388339509192915050565b61132691905b808211156143c357600081556001016144e9565b61132691905b808211156143c35760006145178282614435565b506001016145035600583d8312ef7016406c7ea8ba9796b9e55ac1fdc22455754cbc93869509faefada165627a7a72305820a0ad8e258c24d15207af30cb948e01a111905036c83a8ab43f3c9a450a60427d0029"
};
module.exports = contract;