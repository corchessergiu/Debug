const TipsyERC721Marketplace = artifacts.require("TipsyERC721Marketplace")
const ERC20Contract = artifacts.require("ERC20Contract");
const DefaultERC721 = artifacts.require("DefaultERC721");
module.exports = async function(deployer) {
    await deployer.deploy(ERC20Contract);
    await deployer.deploy(DefaultERC721, "TipsyLand", "Tipsy");
    await deployer.deploy(TipsyERC721Marketplace, ERC20Contract.address, "0xfB8B29772233Bf76E1237da2927789ad05321001", "0xfB8B29772233Bf76E1237da2927789ad05321001");
};