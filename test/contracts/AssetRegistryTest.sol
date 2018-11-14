pragma solidity ^0.4.24;

import "openzeppelin-eth/contracts/token/ERC721/ERC721.sol";


contract AssetRegistryTest is ERC721 {
    constructor() public {
        ERC721.initialize();
    }
}