export default {
  "contractName": "Number",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        }
      ],
      "name": "ValueSet",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newValue",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oldValue\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newValue\",\"type\":\"uint256\"}],\"name\":\"ValueSet\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"get\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newValue\",\"type\":\"uint256\"}],\"name\":\"set\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/src/Number.sol\":\"Number\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/src/Number.sol\":{\"keccak256\":\"0x6f2e1624206f82299074ff974c90518dcb67acc330d0987b43eb4eeef93100fd\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7bf3a525609772f3229beab336f0ebdfa3ff21a66978cd187d5aa2004b076e28\",\"dweb:/ipfs/QmYro47N7VYf3LqfUB3FnCSGRfkpezYNKdhepHMU1GapRf\"]}},\"version\":1}",
  "bytecode": "0x60a060405234801561001057600080fd5b506040516103da3803806103da833981810160405281019061003291906100cf565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100fc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b6100ac81610091565b81146100b757600080fd5b50565b6000815190506100c9816100a3565b92915050565b6000602082840312156100e5576100e461006c565b5b60006100f3848285016100ba565b91505092915050565b6080516102c46101166000396000607701526102c46000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b61005560048036038101906100509190610191565b610075565b005b61005f61014d565b60405161006c91906101cd565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fa90610245565b60405180910390fd5b600080549050816000819055507f69be06033bef8d755e18606a27d6d07393aabbd1800776e503af2c8a03b7c6818183604051610141929190610265565b60405180910390a15050565b60008054905090565b600080fd5b6000819050919050565b61016e8161015b565b811461017957600080fd5b50565b60008135905061018b81610165565b92915050565b6000602082840312156101a7576101a6610156565b5b60006101b58482850161017c565b91505092915050565b6101c78161015b565b82525050565b60006020820190506101e260008301846101be565b92915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e207365742076616c75650000000000000000600082015250565b600061022f6018836101e8565b915061023a826101f9565b602082019050919050565b6000602082019050818103600083015261025e81610222565b9050919050565b600060408201905061027a60008301856101be565b61028760208301846101be565b939250505056fea26469706673582212208754ee8094698b3bf6ed950792fbf42198e9826671813fcea86b00f5eff0b7da64736f6c634300080f0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b61005560048036038101906100509190610191565b610075565b005b61005f61014d565b60405161006c91906101cd565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610103576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100fa90610245565b60405180910390fd5b600080549050816000819055507f69be06033bef8d755e18606a27d6d07393aabbd1800776e503af2c8a03b7c6818183604051610141929190610265565b60405180910390a15050565b60008054905090565b600080fd5b6000819050919050565b61016e8161015b565b811461017957600080fd5b50565b60008135905061018b81610165565b92915050565b6000602082840312156101a7576101a6610156565b5b60006101b58482850161017c565b91505092915050565b6101c78161015b565b82525050565b60006020820190506101e260008301846101be565b92915050565b600082825260208201905092915050565b7f4f6e6c79206f776e65722063616e207365742076616c75650000000000000000600082015250565b600061022f6018836101e8565b915061023a826101f9565b602082019050919050565b6000602082019050818103600083015261025e81610222565b9050919050565b600060408201905061027a60008301856101be565b61028760208301846101be565b939250505056fea26469706673582212208754ee8094698b3bf6ed950792fbf42198e9826671813fcea86b00f5eff0b7da64736f6c634300080f0033",
  "immutableReferences": {
    "9": [
      {
        "length": 32,
        "start": 119
      }
    ]
  },
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1199:1",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:1",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:1"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:1"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:1",
                "type": ""
              }
            ],
            "src": "7:75:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:1",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:1"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:1",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:1"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:81:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:65:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "404:5:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "411:42:1",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "400:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:54:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:1",
                "type": ""
              }
            ],
            "src": "334:126:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "511:51:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "521:35:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "550:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "532:17:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "532:24:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "521:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "493:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "503:7:1",
                "type": ""
              }
            ],
            "src": "466:96:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "611:79:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "668:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "677:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "680:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "670:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "670:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "670:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "634:5:1"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "659:5:1"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "641:17:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "641:24:1"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "631:2:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "631:35:1"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "624:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "624:43:1"
                  },
                  "nodeType": "YulIf",
                  "src": "621:63:1"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "604:5:1",
                "type": ""
              }
            ],
            "src": "568:122:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "759:80:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "769:22:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "784:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "778:5:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:13:1"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "769:5:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "827:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "800:26:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "800:33:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "800:33:1"
                }
              ]
            },
            "name": "abi_decode_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "737:6:1",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "745:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "753:5:1",
                "type": ""
              }
            ],
            "src": "696:143:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "922:274:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "968:83:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "970:77:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "970:79:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "970:79:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "943:7:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "952:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "939:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "939:23:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "964:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "935:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "935:32:1"
                  },
                  "nodeType": "YulIf",
                  "src": "932:119:1"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1061:128:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1076:15:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1090:1:1",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1080:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1105:74:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1151:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1162:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1147:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1147:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1171:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1115:31:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1115:64:1"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1105:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "892:9:1",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "903:7:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "915:6:1",
                "type": ""
              }
            ],
            "src": "845:351:1"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
      "id": 1,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:2864:1",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:1",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:1"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:1"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:1",
                "type": ""
              }
            ],
            "src": "7:75:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:1",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:1"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:1",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:1",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:1"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:1",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:1"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:1"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:1",
                "type": ""
              }
            ],
            "src": "334:77:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:1",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:1",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:1"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:1"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:1"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:1"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:1"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:1"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:1",
                "type": ""
              }
            ],
            "src": "417:122:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:1"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:1"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:1"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:1",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:1",
                "type": ""
              }
            ],
            "src": "545:139:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:1",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:1",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:1"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:1"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:1"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "777:7:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:1"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:1"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:1",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:1",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:1",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:1",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:1",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:1"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:1"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:1"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:1"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:1"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:1"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "726:9:1",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:1",
                "type": ""
              }
            ],
            "src": "690:329:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1090:53:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1107:3:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1130:5:1"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1112:17:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1112:24:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1100:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1100:37:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1100:37:1"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1078:5:1",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1085:3:1",
                "type": ""
              }
            ],
            "src": "1025:118:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1247:124:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1257:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1269:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1280:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1265:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1265:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1257:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1337:6:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1350:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1361:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1346:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1346:17:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1293:43:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1293:71:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1293:71:1"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1219:9:1",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1231:6:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1242:4:1",
                "type": ""
              }
            ],
            "src": "1149:222:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1473:73:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1490:3:1"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1495:6:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1483:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1483:19:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1483:19:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1511:29:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1530:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1535:4:1",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1526:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1526:14:1"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1511:11:1"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1445:3:1",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1450:6:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1461:11:1",
                "type": ""
              }
            ],
            "src": "1377:169:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1658:68:1",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1680:6:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1688:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1676:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1676:14:1"
                      },
                      {
                        "hexValue": "4f6e6c79206f776e65722063616e207365742076616c7565",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1692:26:1",
                        "type": "",
                        "value": "Only owner can set value"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1669:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1669:50:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1669:50:1"
                }
              ]
            },
            "name": "store_literal_in_memory_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "1650:6:1",
                "type": ""
              }
            ],
            "src": "1552:174:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1878:220:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1888:74:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1954:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1959:2:1",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1895:58:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1895:67:1"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "1888:3:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2060:3:1"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b",
                      "nodeType": "YulIdentifier",
                      "src": "1971:88:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1971:93:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1971:93:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2073:19:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2084:3:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2089:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2080:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2080:12:1"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2073:3:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1866:3:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1874:3:1",
                "type": ""
              }
            ],
            "src": "1732:366:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2275:248:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2285:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2297:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2308:2:1",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2293:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2293:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2285:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2332:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2343:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2328:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2328:17:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2351:4:1"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2357:9:1"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2347:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2347:20:1"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2321:6:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2321:47:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2321:47:1"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2377:139:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2511:4:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2385:124:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2385:131:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2377:4:1"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2255:9:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2270:4:1",
                "type": ""
              }
            ],
            "src": "2104:419:1"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2655:206:1",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2665:26:1",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2677:9:1"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2688:2:1",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2673:3:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2673:18:1"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2665:4:1"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2745:6:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2758:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2769:1:1",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2754:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2754:17:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2701:43:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2701:71:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2701:71:1"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2826:6:1"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2839:9:1"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2850:2:1",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2835:3:1"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2835:18:1"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2782:43:1"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2782:72:1"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2782:72:1"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2619:9:1",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2631:6:1",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2639:6:1",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2650:4:1",
                "type": ""
              }
            ],
            "src": "2529:332:1"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b(memPtr) {\n\n        mstore(add(memPtr, 0), \"Only owner can set value\")\n\n    }\n\n    function abi_encode_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256__to_t_uint256_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n}\n",
      "id": 1,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "66:447:0:-:0;;;186:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;228:6;220:14;;;;;;;;;;186:53;66:447;;88:117:1;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;66:447:0:-;;;;;;;;;;;;;",
  "deployedSourceMap": "66:447:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;315:196;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;243:68;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;315:196;381:5;367:19;;:10;:19;;;359:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;421:16;440:5;;421:24;;459:8;451:5;:16;;;;478:28;487:8;497;478:28;;;;;;;:::i;:::-;;;;;;;;353:158;315:196;:::o;243:68::-;279:7;301:5;;294:12;;243:68;:::o;88:117:1:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:169::-;1461:11;1495:6;1490:3;1483:19;1535:4;1530:3;1526:14;1511:29;;1377:169;;;;:::o;1552:174::-;1692:26;1688:1;1680:6;1676:14;1669:50;1552:174;:::o;1732:366::-;1874:3;1895:67;1959:2;1954:3;1895:67;:::i;:::-;1888:74;;1971:93;2060:3;1971:93;:::i;:::-;2089:2;2084:3;2080:12;2073:19;;1732:366;;;:::o;2104:419::-;2270:4;2308:2;2297:9;2293:18;2285:26;;2357:9;2351:4;2347:20;2343:1;2332:9;2328:17;2321:47;2385:131;2511:4;2385:131;:::i;:::-;2377:139;;2104:419;;;:::o;2529:332::-;2650:4;2688:2;2677:9;2673:18;2665:26;;2701:71;2769:1;2758:9;2754:17;2745:6;2701:71;:::i;:::-;2782:72;2850:2;2839:9;2835:18;2826:6;2782:72;:::i;:::-;2529:332;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract Number {\n  event ValueSet(uint256 oldValue, uint256 newValue);\n\n  address immutable owner;\n  uint256 value;\n\n  constructor(address _owner) {\n    owner = _owner;\n  }\n\n  function get() public view returns (uint256) {\n    return value;\n  }\n\n  function set(uint256 newValue) public {\n    require(msg.sender == owner, \"Only owner can set value\");\n    uint256 oldValue = value;\n    value = newValue;\n    emit ValueSet(oldValue, newValue);\n  }\n}\n",
  "sourcePath": "/home/vacuumlabs/talk/prep-repo/simple-contract/src/Number.sol",
  "ast": {
    "absolutePath": "project:/src/Number.sol",
    "exportedSymbols": {
      "Number": [
        57
      ]
    },
    "id": 58,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".22",
          "<",
          "0.9",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:32:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "Number",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 57,
        "linearizedBaseContracts": [
          57
        ],
        "name": "Number",
        "nameLocation": "75:6:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "eventSelector": "69be06033bef8d755e18606a27d6d07393aabbd1800776e503af2c8a03b7c681",
            "id": 7,
            "name": "ValueSet",
            "nameLocation": "92:8:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldValue",
                  "nameLocation": "109:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "101:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "101:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newValue",
                  "nameLocation": "127:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 7,
                  "src": "119:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "119:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "100:36:0"
            },
            "src": "86:51:0"
          },
          {
            "constant": false,
            "id": 9,
            "mutability": "immutable",
            "name": "owner",
            "nameLocation": "159:5:0",
            "nodeType": "VariableDeclaration",
            "scope": 57,
            "src": "141:23:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 8,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "141:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 11,
            "mutability": "mutable",
            "name": "value",
            "nameLocation": "176:5:0",
            "nodeType": "VariableDeclaration",
            "scope": 57,
            "src": "168:13:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 10,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "168:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 20,
              "nodeType": "Block",
              "src": "214:25:0",
              "statements": [
                {
                  "expression": {
                    "id": 18,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 16,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9,
                      "src": "220:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 17,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "228:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "220:14:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 19,
                  "nodeType": "ExpressionStatement",
                  "src": "220:14:0"
                }
              ]
            },
            "id": 21,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "206:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "198:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "197:16:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "214:0:0"
            },
            "scope": 57,
            "src": "186:53:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 28,
              "nodeType": "Block",
              "src": "288:23:0",
              "statements": [
                {
                  "expression": {
                    "id": 26,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11,
                    "src": "301:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 25,
                  "id": 27,
                  "nodeType": "Return",
                  "src": "294:12:0"
                }
              ]
            },
            "functionSelector": "6d4ce63c",
            "id": 29,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get",
            "nameLocation": "252:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "255:2:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 29,
                  "src": "279:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "279:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "278:9:0"
            },
            "scope": 57,
            "src": "243:68:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 55,
              "nodeType": "Block",
              "src": "353:158:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 35,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "367:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "367:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 37,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9,
                          "src": "381:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "367:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f6e6c79206f776e65722063616e207365742076616c7565",
                        "id": 39,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "388:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b",
                          "typeString": "literal_string \"Only owner can set value\""
                        },
                        "value": "Only owner can set value"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_7be5bfba3dca848ee87283e4d355832623f7096cf9efb704e027cbe7e2b9b92b",
                          "typeString": "literal_string \"Only owner can set value\""
                        }
                      ],
                      "id": 34,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "359:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 40,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "359:56:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 41,
                  "nodeType": "ExpressionStatement",
                  "src": "359:56:0"
                },
                {
                  "assignments": [
                    43
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 43,
                      "mutability": "mutable",
                      "name": "oldValue",
                      "nameLocation": "429:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 55,
                      "src": "421:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 42,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "421:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 45,
                  "initialValue": {
                    "id": 44,
                    "name": "value",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 11,
                    "src": "440:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "421:24:0"
                },
                {
                  "expression": {
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 46,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 11,
                      "src": "451:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 47,
                      "name": "newValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 31,
                      "src": "459:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "451:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "451:16:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 51,
                        "name": "oldValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 43,
                        "src": "487:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 52,
                        "name": "newValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 31,
                        "src": "497:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 50,
                      "name": "ValueSet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "478:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 53,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "478:28:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 54,
                  "nodeType": "EmitStatement",
                  "src": "473:33:0"
                }
              ]
            },
            "functionSelector": "60fe47b1",
            "id": 56,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "set",
            "nameLocation": "324:3:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "mutability": "mutable",
                  "name": "newValue",
                  "nameLocation": "336:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 56,
                  "src": "328:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "328:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "327:18:0"
            },
            "returnParameters": {
              "id": 33,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "353:0:0"
            },
            "scope": 57,
            "src": "315:196:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 58,
        "src": "66:447:0",
        "usedErrors": []
      }
    ],
    "src": "32:482:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.15+commit.e14f2714.Emscripten.clang"
  },
  "networks": {
    "200101": {
      "events": {},
      "links": {},
      "address": "0x94E0f646D481578F87d2978eC2d84dfe24EB5c34",
      "transactionHash": "0x8413d154209b90c86abff9a6ceeed32ae19f6dd3d683d2baceb28f1fe6865425"
    }
  },
  "schemaVersion": "3.4.8",
  "updatedAt": "2022-10-25T20:36:59.225Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}