// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Number0 {
  uint256 value;

  function get() public view returns (uint256) {
    return value;
  }

  function set(uint256 newValue) public {
    value = newValue;
  }
}
