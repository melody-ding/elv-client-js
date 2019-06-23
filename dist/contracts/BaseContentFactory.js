"use strict";

var contract = {
  "abi": [{
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
    "name": "kill",
    "outputs": [],
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
    "name": "owner",
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
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "content_type",
      "type": "address"
    }],
    "name": "createContent",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
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
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c0000000000000000006000557f426173654374466163746f727932303139303530393137313930304d4c00000060045560018054600160a060020a0319908116329081179092556002805490911690911790556145a48061007e6000396000f3006080604052600436106100745763ffffffff60e060020a60003504166302d05d3f811461007657806341c0e1b5146100a757806354fd4d50146100bc5780636d2e4b1b146100e35780638da5cb5b14610104578063af570c0414610119578063bf4e088f1461012e578063f2fde38b14610155575b005b34801561008257600080fd5b5061008b610176565b60408051600160a060020a039092168252519081900360200190f35b3480156100b357600080fd5b50610074610185565b3480156100c857600080fd5b506100d16101c1565b60408051918252519081900360200190f35b3480156100ef57600080fd5b50610074600160a060020a03600435166101c7565b34801561011057600080fd5b5061008b610222565b34801561012557600080fd5b5061008b610231565b34801561013a57600080fd5b5061008b600160a060020a0360043581169060243516610240565b34801561016157600080fd5b50610074600160a060020a0360043516610788565b600154600160a060020a031681565b600254600160a060020a03163214806101a85750600254600160a060020a031633145b15156101b357600080fd5b600254600160a060020a0316ff5b60045481565b600154600160a060020a031632146101de57600080fd5b600160a060020a03811615156101f357600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b600354600160a060020a031681565b60008060008060008087945084600160a060020a0316630eaec2c5326040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156102a757600080fd5b505af11580156102bb573d6000803e3d6000fd5b505050506040513d60208110156102d157600080fd5b505115156102de57600080fd5b84600160a060020a03166329dedde5886040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561033957600080fd5b505af115801561034d573d6000803e3d6000fd5b505050506040513d602081101561036357600080fd5b5051151561037057600080fd5b33888861037b6107fa565b600160a060020a03938416815291831660208301529091166040808301919091525190819003606001906000f0801580156103ba573d6000803e3d6000fd5b50935083600160a060020a031663c9e8e72d86600160a060020a03166332eaf21b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561040a57600080fd5b505af115801561041e573d6000803e3d6000fd5b505050506040513d602081101561043457600080fd5b50516040805160e060020a63ffffffff8516028152600160a060020a03909216600483015251602480830192600092919082900301818387803b15801561047a57600080fd5b505af115801561048e573d6000803e3d6000fd5b5050505083600160a060020a031663e538530386600160a060020a0316631cdbee5a8a6040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156104fc57600080fd5b505af1158015610510573d6000803e3d6000fd5b505050506040513d602081101561052657600080fd5b50516040805160e060020a63ffffffff8516028152600160a060020a03909216600483015251602480830192600092919082900301818387803b15801561056c57600080fd5b505af1158015610580573d6000803e3d6000fd5b5050505033925082600160a060020a031663a2d67fcf6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156105c557600080fd5b505af11580156105d9573d6000803e3d6000fd5b505050506040513d60208110156105ef57600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a03831691633def51409187918491635d97b6c29160048083019260209291908290030181600087803b15801561065c57600080fd5b505af1158015610670573d6000803e3d6000fd5b505050506040513d602081101561068657600080fd5b5051604080517f186897330000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163186897339160048083019260209291908290030181600087803b1580156106e357600080fd5b505af11580156106f7573d6000803e3d6000fd5b505050506040513d602081101561070d57600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b15801561076457600080fd5b505af1158015610778573d6000803e3d6000fd5b50959a9950505050505050505050565b600254600160a060020a03163214806107ab5750600254600160a060020a031633145b15156107b657600080fd5b600160a060020a03811615156107cb57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b604051613d6e8061080b833901905600608060408190527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f4564697461626c653230313930363037313035363030504f00000000000000006004557f42617365436f6e74656e743230313930363131313230303030504f0000000000600855600f556010805461010061ffff199091161762ff00001916620a00001763ff00000019166364000000179055606080613d6e8339810160408181528251602080850151948301516001805432600160a060020a03199182168117909255600280548216909217909155600380548216600160a060020a0380871691909117909155600c80548316828a161790819055600019600e55600980549093168285161790925516855292519194937fc3decc188980e855666b70498ca85e8fa284d97d30483d828fa126f7303d7d19929081900390910190a1505050613c128061015c6000396000f30060806040526004361061024b5763ffffffff60e060020a60003504166217de98811461024d578062821de31461027457806302d05d3f146102a5578063075d4782146102ba5780630c6d3f93146102d65780630fe1b5a214610341578063100508a21461036e57806314cfabb3146103995780631a735f18146103ae57806322e564eb146103fb5780632310167f1461042857806327c1c21d1461043d57806329adec141461045257806332eaf21b14610467578063331b86c01461047c57806336ebffca1461049157806338864284146104a657806338d0f504146104be57806341c0e1b514610578578063446e88261461058d5780634dd70788146105955780635267db44146105aa57806354fd4d50146105c25780635cc4aa9b146105d757806364ade32b146105e85780636d2e4b1b146105fd5780636e3754271461061e5780637ca8f6181461063357806381beeb64146106c05780638280dd8f146106d55780638da5cb5b146106ed5780638f7792011461070257806397ac4fd2146107175780639867db741461072c578063a1ff106e14610785578063a8d4160e14610889578063aa024e8b146109c0578063af570c04146109db578063b816f513146109f0578063b8ff1dba14610a05578063c287e0ed14610a1a578063c9e8e72d14610a2f578063cbcd446114610a50578063d810f8c814610a65578063e02dd9c214610a7a578063e538530314610a8f578063ee56d76714610ab0578063ef1d7dc214610b50578063f2fde38b14610b65578063f4d9bae814610b86578063f81ab0ae14610b9e575b005b34801561025957600080fd5b50610262610bb3565b60408051918252519081900360200190f35b34801561028057600080fd5b50610289610bd7565b60408051600160a060020a039092168252519081900360200190f35b3480156102b157600080fd5b50610289610be7565b6102c2610bf6565b604080519115158252519081900360200190f35b3480156102e257600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526102c29482359460248035600160a060020a0316953695946064949201919081908401838280828437509497505093359450610d5c9350505050565b34801561034d57600080fd5b5061024b600160a060020a036004351660ff60243581169060443516610da3565b34801561037a57600080fd5b50610383610e6f565b6040805160ff9092168252519081900360200190f35b3480156103a557600080fd5b506102c2610e7d565b3480156103ba57600080fd5b506103c6600435610f17565b60408051600160a060020a0390951685526020850193909352600091820b90910b838301526060830152519081900360800190f35b34801561040757600080fd5b5061024b600160a060020a036004351660ff60243581169060443516610f4b565b34801561043457600080fd5b50610289610fdd565b34801561044957600080fd5b50610262610fec565b34801561045e57600080fd5b50610383610ff2565b34801561047357600080fd5b50610289610ffb565b34801561048857600080fd5b5061026261100a565b34801561049d57600080fd5b50610289611010565b3480156104b257600080fd5b5061026260043561101f565b3480156104ca57600080fd5b5060408051602060046024803582810135848102808701860190975280865261055496843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506111719650505050505050565b6040805160ff94851681529290931660208301528183015290519081900360600190f35b34801561058457600080fd5b5061024b6114c3565b6102c26115a8565b3480156105a157600080fd5b50610262611729565b3480156105b657600080fd5b5061026260043561174d565b3480156105ce57600080fd5b506102626117e2565b6102c26004356024356044356117e8565b3480156105f457600080fd5b50610262611aa2565b34801561060957600080fd5b5061024b600160a060020a0360043516611aa8565b34801561062a57600080fd5b506102c2611b03565b34801561063f57600080fd5b5061064b600435611b12565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561068557818101518382015260200161066d565b50505050905090810190601f1680156106b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106cc57600080fd5b506102c2611bb9565b3480156106e157600080fd5b50610262600435611d65565b3480156106f957600080fd5b50610289611edc565b34801561070e57600080fd5b50610262611eeb565b34801561072357600080fd5b50610383611ef1565b34801561073857600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261024b943694929360249392840191908190840183828082843750949750611f009650505050505050565b60408051602060046024803582810135601f810185900485028601850190965285855261026295833560ff1695369560449491939091019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506120109650505050505050565b34801561089557600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526108e29436949293602493928401919081908401838280828437509497506124e09650505050505050565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561092357818101518382015260200161090b565b50505050905090810190601f1680156109505780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561098357818101518382015260200161096b565b50505050905090810190601f1680156109b05780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b3480156109cc57600080fd5b5061024b60ff60043516612895565b3480156109e757600080fd5b506102896128d9565b3480156109fc57600080fd5b506102896128e8565b348015610a1157600080fd5b5061024b6128f7565b348015610a2657600080fd5b5061024b612b18565b348015610a3b57600080fd5b5061024b600160a060020a0360043516612bee565b348015610a5c57600080fd5b506102c2612c4b565b348015610a7157600080fd5b50610262612c6d565b348015610a8657600080fd5b5061064b612c91565b348015610a9b57600080fd5b5061024b600160a060020a0360043516612cec565b348015610abc57600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526102c2948235946024803515159536959460649492019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750612eb09650505050505050565b348015610b5c57600080fd5b50610383613247565b348015610b7157600080fd5b5061024b600160a060020a0360043516613257565b348015610b9257600080fd5b506102626004356132c9565b348015610baa57600080fd5b5061026261333a565b7f5075626c6973686564000000000000000000000000000000000000000000000081565b600c54600160a060020a03165b90565b600154600160a060020a031681565b600c54604080517f2cf9942200000000000000000000000000000000000000000000000000000000815230600482015290516000928392600160a060020a0390911691632cf994229160248082019260209290919082900301818787803b158015610c6057600080fd5b505af1158015610c74573d6000803e3d6000fd5b505050506040513d6020811015610c8a57600080fd5b5051600e5460408051831515815260208101839052606091810182815260058054600260001961010060018416150201909116049383018490529495507fad9c5eacc073b2e1767affc883e050347e1dd379c9799cb5ac0a17bde80f5cf49486949390929190608083019084908015610d445780601f10610d1957610100808354040283529160200191610d44565b820191906000526020600020905b815481529060010190602001808311610d2757829003601f168201915b505094505050505060405180910390a18091505b5090565b600b54600090600160a060020a031615801590610d835750600b54600160a060020a031633145b1515610d8e57600080fd5b610d9a85858585613347565b95945050505050565b600354604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301529151919092169160009183916363e6ffdd91602480830192602092919082900301818787803b158015610e0f57600080fd5b505af1158015610e23573d6000803e3d6000fd5b505050506040513d6020811015610e3957600080fd5b50519050600160a060020a0381161515610e5d57610e58858585610f4b565b610e68565b610e68818585610f4b565b5050505050565b601054610100900460ff1681565b600c54604080517f26683e140000000000000000000000000000000000000000000000000000000081523360048201529051600092600160a060020a03169182916326683e149160248082019260209290919082900301818887803b158015610ee557600080fd5b505af1158015610ef9573d6000803e3d6000fd5b505050506040513d6020811015610f0f57600080fd5b505191505090565b6011602052600090815260408120805460018201546002830154600390930154600160a060020a03909216939092900b9084565b604080517f3def514000000000000000000000000000000000000000000000000000000000815230600482015260ff80851660248301528316604482015290518491600160a060020a03831691633def51409160648082019260009290919082900301818387803b158015610fbf57600080fd5b505af1158015610fd3573d6000803e3d6000fd5b5050505050505050565b600b54600160a060020a031681565b600e5481565b60105460ff1681565b600a54600160a060020a031681565b60065490565b600954600160a060020a031681565b600b5460009081908190600160a060020a0316156110cf5750600b54604080517f45080442000000000000000000000000000000000000000000000000000000008152600481018690529051600160a060020a0390921691829163450804429160248083019260209291908290030181600087803b1580156110a057600080fd5b505af11580156110b4573d6000803e3d6000fd5b505050506040513d60208110156110ca57600080fd5b505191505b81156110dd5781925061116a565b83151561110c577f5075626c69736865640000000000000000000000000000000000000000000000925061116a565b600084121561113d577f4472616674000000000000000000000000000000000000000000000000000000925061116a565b600084131561116a577f447261667420696e20726576696577000000000000000000000000000000000092505b5050919050565b6000806000806000806000806000600e54600014151561119e57611193613479565b9850985098506114b4565b6111a98c8c8c61373e565b9750909550935060ff80861614806111c457508360ff1660ff145b156114aa57600354604080517f63e6ffdd0000000000000000000000000000000000000000000000000000000081523260048201529051600160a060020a03909216945084916363e6ffdd916024808201926020929091908290030181600087803b15801561123257600080fd5b505af1158015611246573d6000803e3d6000fd5b505050506040513d602081101561125c57600080fd5b50519150600160a060020a038216156114aa57508060ff80861614156113905780600160a060020a0316635faecb763083600160a060020a03166396eba03d6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156112ca57600080fd5b505af11580156112de573d6000803e3d6000fd5b505050506040513d60208110156112f457600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561134557600080fd5b505af1158015611359573d6000803e3d6000fd5b505050506040513d602081101561136f57600080fd5b505115156001141561138057600094505b8484600d549850985098506114b4565b60ff851615156114aa578360ff1660ff14156114aa5780600160a060020a0316635faecb763083600160a060020a031663d1aeb6516040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156113f457600080fd5b505af1158015611408573d6000803e3d6000fd5b505050506040513d602081101561141e57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561146f57600080fd5b505af1158015611483573d6000803e3d6000fd5b505050506040513d602081101561149957600080fd5b50511515600114156114aa57600093505b8484879850985098505b50505050505093509350939050565b600254600090600160a060020a03163214806114e95750600254600160a060020a031633145b15156114f457600080fd5b600b54600160a060020a03161561159d5750600b54604080517f9e99bbea0000000000000000000000000000000000000000000000000000000081529051600160a060020a03909216918291639e99bbea9160048083019260209291908290030181600087803b15801561156757600080fd5b505af115801561157b573d6000803e3d6000fd5b505050506040513d602081101561159157600080fd5b50511561159d57600080fd5b6115a5613a7a565b50565b60006115b2610e7d565b15156115bd57600080fd5b6000600580546001816001161561010002031660029004905011156116365760068054600181810180845560009390935260058054611633937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0192600261010091831615919091026000190190911604613ab6565b50505b600780546116599160059160026000196101006001841615020190911604613ab6565b5060408051602081019182905260009081905261167891600791613b37565b5060408051602080825260058054600260001961010060018416150201909116049183018290527f5ae4ddb3009a8ccdedc04b2011fc66a472807bcdcff04af16286ddb27819ebe1939092918291820190849080156117185780601f106116ed57610100808354040283529160200191611718565b820191906000526020600020905b8154815290600101906020018083116116fb57829003601f168201915b50509250505060405180910390a190565b7f447261667400000000000000000000000000000000000000000000000000000081565b600254600090600160a060020a03163214801561178157506000821280611781575060008213801561178157506000600e54125b1561178c57600e8290555b600c54600160a060020a03163314156117a557600e8290555b600e5460408051918252517fda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a29181900360200190a15050600e5490565b60085481565b60008381526011602052604081208054829081908190600160a060020a03161580159061183257508354600160a060020a03163314806118325750600254600160a060020a031633145b151561183d57600080fd5b600b548715159350600160a060020a0316156118f757600b54604080517f17685953000000000000000000000000000000000000000000000000000000008152600481018b9052602481018a90529051600160a060020a03909216935083916317685953916044808201926020929091908290030181600087803b1580156118c457600080fd5b505af11580156118d8573d6000803e3d6000fd5b505050506040513d60208110156118ee57600080fd5b50518015935090505b8354600160a060020a0316331415611934578215611924576002848101805460ff19169091179055611934565b60028401805460ff191660fe1790555b836001015484600301541015611a12576002840154600090810b810b136119b557835460408051808201909152600681527f726566756e6400000000000000000000000000000000000000000000000000006020820152600386015460018701546119af938c93600160a060020a0390911692909103613347565b50611a12565b60025460408051808201909152600e81527f72656c6561736520657363726f77000000000000000000000000000000000000602082015260038601546001870154611a10938c93600160a060020a0390911692909103613347565b505b6000888152601160209081526040808320805473ffffffffffffffffffffffffffffffffffffffff191681556001810184905560028101805460ff191690556003019290925581518a81529081018990528415158183015290517f2c49ac638ee7bf3341004c40512c79847bb7fb8f17fb53151ff576a35630ac069181900360600190a150909695505050505050565b600d5481565b600154600160a060020a03163214611abf57600080fd5b600160a060020a0381161515611ad457600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000611b0d611bb9565b905090565b6006805482908110611b2057fe5b600091825260209182902001805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815293509091830182828015611bb15780601f10611b8657610100808354040283529160200191611bb1565b820191906000526020600020905b815481529060010190602001808311611b9457829003601f168201915b505050505081565b600354604080517fa2d67fcf0000000000000000000000000000000000000000000000000000000081529051600092600160a060020a03169183918291849163a2d67fcf9160048082019260209290919082900301818787803b158015611c1f57600080fd5b505af1158015611c33573d6000803e3d6000fd5b505050506040513d6020811015611c4957600080fd5b5051604080517f5d97b6c20000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a03831691635faecb769130918491635d97b6c29160048083019260209291908290030181600087803b158015611cb657600080fd5b505af1158015611cca573d6000803e3d6000fd5b505050506040513d6020811015611ce057600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b158015611d3157600080fd5b505af1158015611d45573d6000803e3d6000fd5b505050506040513d6020811015611d5b57600080fd5b5051935050505090565b6000806000611d72612c4b565b1515611d7d57600080fd5b600b54600160a060020a03161515611e0157600254600160a060020a0316321480611db25750600254600160a060020a031633145b8015611dc95750836000191480611dc95750836001145b15611dd657839150611dfc565b600c54600160a060020a031633148015611df357506000600e5412155b15611dfc578391505b611e99565b50600b54604080517f3513a805000000000000000000000000000000000000000000000000000000008152600481018690529051600160a060020a03909216918291633513a8059160248083019260209291908290030181600087803b158015611e6a57600080fd5b505af1158015611e7e573d6000803e3d6000fd5b505050506040513d6020811015611e9457600080fd5b505191505b600e8290556040805183815290517fda4f34b30fa0ba8a73fedb922f4d28e2a10a5d68e53cf8e942abce3ac09158a29181900360200190a15050600e5492915050565b600254600160a060020a031681565b600f5481565b60105462010000900460ff1681565b611f08611b03565b1515611f1357600080fd5b8051608011611f2157600080fd5b8051611f34906007906020840190613b37565b506003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316611f6b610bd7565b60408051600160a060020a038085168252831660208201526060918101828152600780546002600019610100600184161502019091160493830184905292608083019084908015611ffd5780601f10611fd257610100808354040283529160200191611ffd565b820191906000526020600020905b815481529060010190602001808311611fe057829003601f168201915b505094505050505060405180910390a150565b60008060008061201e613ba5565b600f80546001019055600080806120368d8b8b611171565b98509096509450600060ff8616101561205e573487111561205657600080fd5b61205e6128f7565b60408051608081018252338152346020808301918252600083850181815260608501828152600f548352601190935294812084518154600160a060020a0391821673ffffffffffffffffffffffffffffffffffffffff199091161782559351600182015594516002860180549190920b60ff1660ff1990911617905551600390930192909255600b54909550161561222657600b60009054906101000a9004600160a060020a0316925082600160a060020a031663123e0e80600f548f8d8d6040518563ffffffff1660e060020a028152600401808581526020018460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561218557818101518382015260200161216d565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156121c45781810151838201526020016121ac565b505050509050019650505050505050602060405180830381600087803b1580156121ed57600080fd5b505af1158015612201573d6000803e3d6000fd5b505050506040513d602081101561221757600080fd5b50519150811561222657600080fd5b7f50f423e39e8beb25bb2da38a63e3d33b5368f261522813712756733eaf569a06600f548e60058f8f604051808681526020018560ff1660ff1681526020018060200180602001806020018481038452878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156122f25780601f106122c7576101008083540402835291602001916122f2565b820191906000526020600020905b8154815290600101906020018083116122d557829003601f168201915b5050848103835286518152865160209182019188019080838360005b8381101561232657818101518382015260200161230e565b50505050905090810190601f1680156123535780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b8381101561238657818101518382015260200161236e565b50505050905090810190601f1680156123b35780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a15060005b89518110156124445789818151811015156123e157fe5b602090810290910101511561243c577f515e0a48b385fce2a8e4d9f169a97c4f6ea669a752358f5e6ab37cc3c2e84c388a8281518110151561241f57fe5b602090810290910181015160408051918252519081900390910190a15b6001016123ca565b5060005b88518110156124cc57898181518110151561245f57fe5b60209081029091010151156124c4577fb6e3239e521a6c66920ae634f8e921a37e6991d520ac44d52f8516397f41b684898281518110151561249d57fe5b602090810290910181015160408051600160a060020a039092168252519081900390910190a15b600101612448565b5050600f549b9a5050505050505050505050565b600354600a546060918291600160a060020a03918216911615806125955750600a54604080517fd6be0f49000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519183169163d6be0f49916024808201926020929091908290030181600087803b15801561256757600080fd5b505af115801561257b573d6000803e3d6000fd5b505050506040513d602081101561259157600080fd5b5051155b156125be576040805160208181018352600080835283519182019093529182529350915061288f565b600a54604080517f589aafc1000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015290519183169163268bfac491839163589aafc19160248082019260009290919082900301818387803b15801561262d57600080fd5b505af1158015612641573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561266a57600080fd5b81019080805164010000000081111561268257600080fd5b8201602081018481111561269557600080fd5b81516401000000008111828201871017156126af57600080fd5b5050929190505050866040518363ffffffff1660e060020a028152600401808060200180602001838103835285818151815260200191508051906020019080838360005b8381101561270b5781810151838201526020016126f3565b50505050905090810190601f1680156127385780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561276b578181015183820152602001612753565b50505050905090810190601f1680156127985780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1580156127b957600080fd5b505af11580156127cd573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160409081528110156127f657600080fd5b81019080805164010000000081111561280e57600080fd5b8201602081018481111561282157600080fd5b815164010000000081118282018710171561283b57600080fd5b5050929190602001805164010000000081111561285757600080fd5b8201602081018481111561286a57600080fd5b815164010000000081118282018710171561288457600080fd5b509497509550505050505b50915091565b600254600160a060020a03163214806128b85750600254600160a060020a031633145b15156128c357600080fd5b6010805460ff191660ff92909216919091179055565b600354600160a060020a031681565b600c54600160a060020a031681565b600354604080517fa2d67fcf0000000000000000000000000000000000000000000000000000000081529051600160a060020a03909216916000918291849163a2d67fcf91600480830192602092919082900301818787803b15801561295c57600080fd5b505af1158015612970573d6000803e3d6000fd5b505050506040513d602081101561298657600080fd5b5051604080517fd1aeb6510000000000000000000000000000000000000000000000000000000081529051919350839250600160a060020a03831691633def5140913091849163d1aeb6519160048083019260209291908290030181600087803b1580156129f357600080fd5b505af1158015612a07573d6000803e3d6000fd5b505050506040513d6020811015612a1d57600080fd5b5051604080517f186897330000000000000000000000000000000000000000000000000000000081529051600160a060020a0387169163186897339160048083019260209291908290030181600087803b158015612a7a57600080fd5b505af1158015612a8e573d6000803e3d6000fd5b505050506040513d6020811015612aa457600080fd5b50516040805160e060020a63ffffffff8716028152600160a060020a03909416600485015260ff92831660248501529116604483015251606480830192600092919082900301818387803b158015612afb57600080fd5b505af1158015612b0f573d6000803e3d6000fd5b50505050505050565b600254600160a060020a0316331480612b345750612b34610e7d565b1515612b3f57600080fd5b60408051602080825260058054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015612bde5780601f10612bb357610100808354040283529160200191612bde565b820191906000526020600020905b815481529060010190602001808311612bc157829003601f168201915b50509250505060405180910390a1565b600254600160a060020a0316321480612c115750600254600160a060020a031633145b1515612c1c57600080fd5b600a805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000612c55611bb9565b80611b0d575050600c54600160a060020a0316331490565b7f447261667420696e20726576696577000000000000000000000000000000000081565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015611bb15780601f10611b8657610100808354040283529160200191611bb1565b60025460009081908190600160a060020a0316321480612d165750600254600160a060020a031633145b1515612d2157600080fd5b600b54600160a060020a031615612dc157600b60009054906101000a9004600160a060020a0316925082600160a060020a0316639e99bbea6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612d8857600080fd5b505af1158015612d9c573d6000803e3d6000fd5b505050506040513d6020811015612db257600080fd5b505191508115612dc157600080fd5b600b805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03861690811790915515612e6b5783925082600160a060020a0316637b1cdb3e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612e3257600080fd5b505af1158015612e46573d6000803e3d6000fd5b505050506040513d6020811015612e5c57600080fd5b505190508015612e6b57600080fd5b600b5460408051600160a060020a039092168252517fa6f2e38f0cfebf27212317fced3ac40bc62e00bd33f38d69603710740c69acb79181900360200190a150505050565b600254600090819081908190600160a060020a0316331480612edc5750600a54600160a060020a031633145b1515612ee757600080fd5b60008881526011602052604090208054909350600160a060020a03161515612f0e57600080fd5b600b54879250600160a060020a031615612fc75750600b54604080517fe870ed91000000000000000000000000000000000000000000000000000000008152600481018a905288151560248201529051600160a060020a0390921691829163e870ed919160448083019260209291908290030181600087803b158015612f9357600080fd5b505af1158015612fa7573d6000803e3d6000fd5b505050506040513d6020811015612fbd57600080fd5b505115915061309b565b82600101548360030154101561309b5786151561303e57825460408051808201909152600f81527f616363657373206465636c696e65640000000000000000000000000000000000602082015260038501546001860154613038938c93600160a060020a0390911692909103613347565b5061309b565b60025460408051808201909152600d81527f6f776e6572207061796d656e7400000000000000000000000000000000000000602082015260038501546001860154613099938c93600160a060020a0390911692909103613347565b505b600182151514156131d65760028301805460ff19166001908117909155604080518a8152602080820184905260809282018381528a519383019390935289517f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b912718948d9490938c938c93919291606084019160a08501919087019080838360005b8381101561313357818101518382015260200161311b565b50505050905090810190601f1680156131605780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561319357818101518382015260200161317b565b50505050905090810190601f1680156131c05780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a161323c565b60028301805460ff191660ff179055604080518981526000602082018190526080828401819052820181905260c06060830181905282015290517f475e9d68ca61f129cebee5af694af00ed0e3b3b0d4b74071fbb81d0e2b912718918190036101000190a15b509695505050505050565b6010546301000000900460ff1681565b600254600160a060020a031632148061327a5750600254600160a060020a031633145b151561328557600080fd5b600160a060020a038116151561329a57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600090600160a060020a03163214806132ef5750600254600160a060020a031633145b15156132fa57600080fd5b600d8290556040805183815290517f4114f8ef80b6de2161db580cbefa14e1892d15d3ebe2062c9914e4a5773114a39181900360200190a15050600d5490565b6000611b0d600e5461101f565b60008481526011602052604081206001810154600382015484011161347057604051600160a060020a0386169084156108fc029085906000818181858888f1935050505015801561339c573d6000803e3d6000fd5b508281600301540181600301819055507fad58d18ea7292f887da6f15bb4f0badddaa33d169713d09cf49710acc7c3a5b986858786604051808581526020018060200184600160a060020a0316600160a060020a03168152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561343257818101518382015260200161341a565b50505050905090810190601f16801561345f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15b50949350505050565b60025460009081908190819081908190600160a060020a03163214806134ad575060105460ff630100000082048116911610155b156134c357600d54600096508695509350613736565b600354604080517f63e6ffdd0000000000000000000000000000000000000000000000000000000081523260048201529051600160a060020a03909216945084916363e6ffdd916024808201926020929091908290030181600087803b15801561352c57600080fd5b505af1158015613540573d6000803e3d6000fd5b505050506040513d602081101561355657600080fd5b50519150600160a060020a0382161561367c5781905080600160a060020a0316635faecb763083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156135ba57600080fd5b505af11580156135ce573d6000803e3d6000fd5b505050506040513d60208110156135e457600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b15801561363557600080fd5b505af1158015613649573d6000803e3d6000fd5b505050506040513d602081101561365f57600080fd5b505115156001141561367c57600d54600096508695509350613736565b600c54604080517f29d002190000000000000000000000000000000000000000000000000000000081523260048201529051600160a060020a03909216916329d00219916024808201926020929091908290030181600087803b1580156136e257600080fd5b505af11580156136f6573d6000803e3d6000fd5b505050506040513d602081101561370c57600080fd5b505115156001141561372957600d54600096508695509350613736565b600d54600a965086955093505b505050909192565b600d546010546000918291829190829081908190819081908190819060ff61010082048116911610156137725760ff613775565b60005b60105490975060ff6201000082048116911610156137945760ff613797565b60005b600b54909650600160a060020a031615613a6557600b60009054906101000a9004600160a060020a0316905080600160a060020a0316630f82c16f8f8f8f6040518463ffffffff1660e060020a028152600401808460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561383757818101518382015260200161381f565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561387657818101518382015260200161385e565b5050505090500195505050505050608060405180830381600087803b15801561389e57600080fd5b505af11580156138b2573d6000803e3d6000fd5b505050506040513d60808110156138c857600080fd5b50805160208201516040830151606090930151600d549298509096509194509092508211156138fa5760649650613a65565b80600160a060020a031663b535b03e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561393857600080fd5b505af115801561394c573d6000803e3d6000fd5b505050506040513d602081101561396257600080fd5b5051851660ff161515613973578396505b80600160a060020a0316636af274176040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156139b157600080fd5b505af11580156139c5573d6000803e3d6000fd5b505050506040513d60208110156139db57600080fd5b5051851660ff1615156139ec578295505b80600160a060020a031663f185db0c6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015613a2a57600080fd5b505af1158015613a3e573d6000803e3d6000fd5b505050506040513d6020811015613a5457600080fd5b5051851660ff161515613a65578197505b50949c939b5094995091975050505050505050565b600254600160a060020a0316321480613a9d5750600254600160a060020a031633145b1515613aa857600080fd5b600254600160a060020a0316ff5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613aef5780548555613b2b565b82800160010185558215613b2b57600052602060002091601f016020900482015b82811115613b2b578254825591600101919060010190613b10565b50610d58929150613bcc565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613b7857805160ff1916838001178555613b2b565b82800160010185558215613b2b579182015b82811115613b2b578251825591602001919060010190613b8a565b60408051608081018252600080825260208201819052918101829052606081019190915290565b610be491905b80821115610d585760008155600101613bd25600a165627a7a72305820465d0cbce941e618b96c88443a106bf28022700f264d86c175afe8186e7555a60029a165627a7a7230582085245dbd7f747a619d39d5749042c74dea3d8d47ca65f75b698b212ef8afc5c40029"
};
module.exports = contract;