// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "../src/Number.sol";

contract NumberTest is Test {
    Number number;

    address account1 = 0x766FCe3d50d795Fe6DcB1020AB58bccddd5C5c77;
    address account2 = 0x078D888E40faAe0f32594342c85940AF3949E666;

    function setUp() public {
        number = new Number(account1);
    }

    function testExample() public {
        assertTrue(true);
    }

    function testSet() public {
        uint256 value = 315289;
        vm.prank(account1);
        number.set(value);
        assertEq(number.get(), value);
    }

    function testNonOwnerCannotSet() public {
        uint256 originalNumber = number.get();
        uint256 value = 315289;
        vm.prank(account2);
        vm.expectRevert("Only owner can set value");
        number.set(value);
        assertEq(number.get(), originalNumber);
    }
}
