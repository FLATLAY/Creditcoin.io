/*jslint browser: true, nomen: true, unparam: true*/
/*global jQuery, web3, Web3, moment*/
"use strict";



jQuery(function () {
    if (typeof(web3) !== "undefined") {
        var web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/lCjDoM2bVKukZdUG3D3m"));
    }

    var abi = [
                {
                  "constant": true,
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                    {
                      "name": "",
                      "type": "string"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "_spender",
                      "type": "address"
                    },
                    {
                      "name": "_value",
                      "type": "uint256"
                    }
                  ],
                  "name": "approve",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "totalSupply",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "name": "manuallyAssignTokens",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "_from",
                      "type": "address"
                    },
                    {
                      "name": "_to",
                      "type": "address"
                    },
                    {
                      "name": "_value",
                      "type": "uint256"
                    }
                  ],
                  "name": "transferFrom",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "rate",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "decimals",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint8"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "_rate",
                      "type": "uint256"
                    }
                  ],
                  "name": "setRate",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [],
                  "name": "haltFundraising",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [],
                  "name": "unpause",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "_value",
                      "type": "uint256"
                    }
                  ],
                  "name": "burn",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "tokensSold",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "wallet",
                  "outputs": [
                    {
                      "name": "",
                      "type": "address"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [],
                  "name": "prepareLiquidityReserve",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "paused",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [
                    {
                      "name": "_owner",
                      "type": "address"
                    }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                    {
                      "name": "balance",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "marketingWallet",
                  "outputs": [
                    {
                      "name": "",
                      "type": "address"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "isIcoFinished",
                  "outputs": [
                    {
                      "name": "icoFinished",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "newIcoStartTimestamp",
                      "type": "uint256"
                    },
                    {
                      "name": "newIcoEndTimestamp",
                      "type": "uint256"
                    }
                  ],
                  "name": "setIcoDates",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [],
                  "name": "pause",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "icoEtherMaxCap",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "owner",
                  "outputs": [
                    {
                      "name": "",
                      "type": "address"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                    {
                      "name": "",
                      "type": "string"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [],
                  "name": "unhaltFundraising",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "_to",
                      "type": "address"
                    },
                    {
                      "name": "_value",
                      "type": "uint256"
                    }
                  ],
                  "name": "transfer",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "icoEndTimestamp",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "halted",
                  "outputs": [
                    {
                      "name": "",
                      "type": "bool"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "marketingPool",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "icoStartTimestamp",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "liquidityReserveWallet",
                  "outputs": [
                    {
                      "name": "",
                      "type": "address"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "icoEtherMinCap",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [],
                  "name": "totalRaised",
                  "outputs": [
                    {
                      "name": "",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": true,
                  "inputs": [
                    {
                      "name": "_owner",
                      "type": "address"
                    },
                    {
                      "name": "_spender",
                      "type": "address"
                    }
                  ],
                  "name": "allowance",
                  "outputs": [
                    {
                      "name": "remaining",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "function"
                },
                {
                  "constant": false,
                  "inputs": [
                    {
                      "name": "newOwner",
                      "type": "address"
                    }
                  ],
                  "name": "transferOwnership",
                  "outputs": [],
                  "payable": false,
                  "type": "function"
                },
                {
                  "inputs": [
                    {
                      "name": "newWallet",
                      "type": "address"
                    },
                    {
                      "name": "newMarketingWallet",
                      "type": "address"
                    },
                    {
                      "name": "newLiquidityReserveWallet",
                      "type": "address"
                    },
                    {
                      "name": "newIcoEtherMinCap",
                      "type": "uint256"
                    },
                    {
                      "name": "newIcoEtherMaxCap",
                      "type": "uint256"
                    },
                    {
                      "name": "totalPresaleRaised",
                      "type": "uint256"
                    }
                  ],
                  "payable": false,
                  "type": "constructor"
                },
                {
                  "payable": true,
                  "type": "fallback"
                },
                {
                  "anonymous": false,
                  "inputs": [
                    {
                      "indexed": true,
                      "name": "burner",
                      "type": "address"
                    },
                    {
                      "indexed": false,
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "name": "Burn",
                  "type": "event"
                },
                {
                  "anonymous": false,
                  "inputs": [],
                  "name": "Pause",
                  "type": "event"
                },
                {
                  "anonymous": false,
                  "inputs": [],
                  "name": "Unpause",
                  "type": "event"
                },
                {
                  "anonymous": false,
                  "inputs": [
                    {
                      "indexed": true,
                      "name": "owner",
                      "type": "address"
                    },
                    {
                      "indexed": true,
                      "name": "spender",
                      "type": "address"
                    },
                    {
                      "indexed": false,
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "name": "Approval",
                  "type": "event"
                },
                {
                  "anonymous": false,
                  "inputs": [
                    {
                      "indexed": true,
                      "name": "from",
                      "type": "address"
                    },
                    {
                      "indexed": true,
                      "name": "to",
                      "type": "address"
                    },
                    {
                      "indexed": false,
                      "name": "value",
                      "type": "uint256"
                    }
                  ],
                  "name": "Transfer",
                  "type": "event"
                }
              ],

        // init contract object    
        contractAddress = "0x1F870a147029E7dC2AB06A700EAB1803688aC65E",
        contractInstance = new web3.eth.Contract(abi, contractAddress),

        // init
        totalRaised = 0,
        tokensSold = 0,

        // constant
        ratio = 1000,
        decimals = Math.pow(10, 18),

        // functions
        updateContribAmount,
        init;

    updateContribAmount = function () {
        var contrib_eth = jQuery("#spinner").val(),
            contrib_amount = contrib_eth * 1000,
            contrib_bonus = 0;

        jQuery(".contrib_eth").text(contrib_eth);
        jQuery(".contrib_amount").text(contrib_amount);
        jQuery(".contrib_bonus").text(contrib_bonus);
        jQuery(".contrib_get").text(contrib_amount + contrib_bonus);
    };

    init = function () {
        // UI
        jQuery(".chckbx input").checkboxradio();
        jQuery(".agreement-body").mCustomScrollbar({
            scrollInertia: 0
        });
        jQuery("#selectcountry").selectric();
        jQuery('.parallax-b').parallax({
            imageSrc: '/wp-content/uploads/2017/07/Home-hero-2@2x-3.png',
            speed: 0.5
        });
        jQuery('.parallax-b-1').parallax({
            imageSrc: '/wp-content/uploads/2017/07/Home-hero-1@2x.jpg',
            speed: 0.3
        });
        jQuery("#spinner").spinner({
            min: 1
        });
        jQuery(document).on('mailsent.wpcf7', function () {
            jQuery(".step-1").hide();
            jQuery(".step-2").show();
        });

        // SCT
        jQuery("#contract_address").text(contractAddress);
        jQuery("#ratio").text(ratio);

        // use async to support MetaMask
        contractInstance.methods.totalRaised().call(function (error, result) {
            if (!error) {
                totalRaised = result;
                console.log("totalRaised: " + totalRaised.toString(10));

                jQuery("#contributions").text(totalRaised / decimals);
                
                // get price for equivalent
                jQuery.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR", function (data) {
                    jQuery("#equivalent").text(totalRaised / decimals * data[0].price_eur);
                });
            } else {
                console.error(error);
            }
        });

        contractInstance.methods.tokensSold().call(function (error, result) {
            if (!error) {
                tokensSold = result;
                console.log("tokensSold: " + tokensSold.toString(10));

                jQuery("#tokens_sold").text(tokensSold / decimals);
            } else {
                console.error(error);
            }
        });

        // contribute amount
        updateContribAmount();
        jQuery(".ui-spinner-button").click(function () {
            updateContribAmount();
        });
        jQuery("#spinner").change(function () {
            updateContribAmount();
        });
        jQuery("#spinner").keyup(function () {
            updateContribAmount();
        });
    };

    init();
});
