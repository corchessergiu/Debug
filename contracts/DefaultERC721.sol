// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DefaultERC721 is ERC721 {
    uint256 public currentSupply = 0;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mint(address _to) public {
        _mint(_to, currentSupply + 1);
        currentSupply += 1;
    }
}