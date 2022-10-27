// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Number1 {
  address immutable owner;
  uint256 value;

  constructor(address _owner) {
    owner = _owner;
  }

  function get() public view returns (uint256) {
    return value;
  }

  function set(uint256 newValue) public {
    require(msg.sender == owner, "Only owner can set value");
    value = newValue;
  }
}
