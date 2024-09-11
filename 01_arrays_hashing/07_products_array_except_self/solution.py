"""
Arrays & Hashing -> Products of Array Except Self
Neetcode 7 / 150
Leetcode 238

Python

Comments:
Dipping my toes into dynamic programming. The whole before/after array trick is
really just a way to reuse previous products to compute the next product.

Time: O(n) two loops through nums
Space: O(n) create three arrays of size n
"""


class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        before = [1]  # index i is product of nums before index i
        after = [1]  # index i is product of nums after index -i-1
        for i in range(len(nums) - 1):
            before.append(before[i] * nums[i])
            after.append(after[i] * nums[-i - 1])
        res = []
        for i in range(len(nums)):
            res.append(before[i] * after[-i - 1])
        return res
