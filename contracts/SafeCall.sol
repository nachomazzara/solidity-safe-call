pragma solidity ^0.4.25;


/**
 * @title SafeCall
 * @dev Safe call method for contracts
 */
library SafeCall {
    function safeCall(address _token, string _method, uint256 _gas) internal returns (bool success, bytes memory returnData) {
        uint256 gas = _gas;
        if(_gas == 0) {
            gas = gasleft();
        }

        (success, returnData) = _token.call.gas(gas)(_method);
    }
}