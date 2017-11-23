pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract KairosToken is StandardToken {
    string public name = 'KairosToken';
    string public symbol = 'KRS';
    uint public decimals = 0;
    uint public INITIAL_SUPPLY = 100000000;

    function KairosToken() {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}