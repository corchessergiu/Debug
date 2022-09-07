const TipsyERC721Marketplace = artifacts.require("TipsyERC721Marketplace")
const ERC20Contract = artifacts.require("ERC20Contract");
const DefaultERC721 = artifacts.require("DefaultERC721");
contract('TipsyMarket', (accounts) => {
    it.only('Test', async() => {
        console.log(accounts)
        const erc20 = await ERC20Contract.deployed();
        const nft = await DefaultERC721.deployed("TipsyLand", "Tipsy");
        const market = await TipsyERC721Marketplace.deployed(erc20.address, accounts[1], accounts[1], { from: accounts[0] });
        await market.addWhitelistAddress(nft.address, { from: accounts[1] });

        await nft.mint(accounts[1], { from: accounts[1] });
        await nft.mint(accounts[1], { from: accounts[1] });
        await nft.approve(market.address, 1, { from: accounts[1] });
        await market.sell(nft.address, 1, 100000, { from: accounts[1] });
        await nft.approve(market.address, 2, { from: accounts[1] });
        await market.sell(nft.address, 2, 200000, { from: accounts[1] });

        await debug(market.cancelListing(nft.address, 2, { from: accounts[1] }));
    });

});