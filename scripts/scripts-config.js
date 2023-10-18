module.exports = {
    "localhost": {
        "deploy.js": [
            {
                name: "WETH"
            },
            {
                name: "AuctionHouse",
                constructorArgs: ["0x3F012C2e7c35fE523c8B70d6268dB72d3B4D77EC","WETH.address"]
            },
        ],
        "initialize.js": [],
    },
    "goerli": {
        "deploy.js": [
            {
                name: "WETH"
            },
            {
                name: "AuctionHouse",
                constructorArgs: ["0x3F012C2e7c35fE523c8B70d6268dB72d3B4D77EC","WETH.address"]
            },
        ],
        "initialize.js": [],
        "verify.js": ["+REST"]
    }, 
    "mainnet": {}
}