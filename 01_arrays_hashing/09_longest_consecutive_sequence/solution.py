"""
Arrays & Hashing -> Longest Consecutive Sequence
Neetcode 9 / 150
Leetcode 128

Python

Comments:
Oops, Bon and I thought this solution had an issue but it doesn't. Just iterate
over the set and then there are no duplicates. You'll hit each number two times
at most.

Time: O(n) we check over each number a maximum of 2 times
Space: O(n) set of all numbers
"""


class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        all_nums = set(nums)
        longest = 0
        for n in all_nums:
            if (n - 1) in all_nums:
                continue
            length = 1
            while (n + length) in all_nums:
                length += 1
            if length > longest:
                longest = length
        return longest
