"""
Two Pointers -> Two Sum II - Input Array is Sorted
Neetcode 11 / 150
Leetcode 167

Python

Comments:
So fun, so simple!

Time: O(n) the two pointers traverse whole list at most once
Space: O(1) we don't need to make anything new
"""


class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        l = 0
        r = len(numbers) - 1
        while l < r:
            total = numbers[l] + numbers[r]
            if total == target:
                return [l + 1, r + 1]
            elif total < target:
                l += 1
            else:
                r -= 1
        return []  # return empty list if no solution found
