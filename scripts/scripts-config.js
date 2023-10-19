module.exports = {
    "localhost": {
        "deploy.js": [
            {
                name: "WETH"
            },
            {
                name: "AuctionHouse",
                constructorArgs: ["0xcc341FfDf46c08B5939FF62cf5D66572Fd5Da5e2","WETH.address"]
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
                constructorArgs: ["0xcc341FfDf46c08B5939FF62cf5D66572Fd5Da5e2","WETH.address"]
            },
        ],
        "initialize.js": [],
        "verify.js": ["+REST"]
    }, 
    "mainnet": {}
}