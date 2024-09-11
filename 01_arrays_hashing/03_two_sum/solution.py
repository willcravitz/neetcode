"""
Arrays & Hashing -> Two Integer Sum
Neetcode 3 / 150
Leetcode 1

Python

Comments:
The secret is to save the precious information of each value's index in the 
array. We're doing that as we check for the second number in the sum.

Time: O(n) we loop through nums once
Space: O(n) prev might have a key for each num
"""


class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        prev = {}  # num as key and index as value
        for i in range(len(nums)):
            target_diff = target - nums[i]
            if target_diff in prev:
                return [prev[target_diff], i]
            prev[nums[i]] = i
