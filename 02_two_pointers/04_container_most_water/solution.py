"""
Two Pointers -> Container With Most Water
Neetcode 13 / 150
Leetcode 11

Python

Comments:
The two pointers move from the largest width to the smallest width. Here's the
key: once the pointer moves off a height, there will never be a larger area that
uses the height. 

Time: O(n) two pointers iterate through the list
Space: O(1) don't need to make anything new
"""


class Solution:
    def maxArea(self, heights: list[int]) -> int:
        l = 0
        r = len(heights) - 1
        max_amount = 0
        while l < r:
            dist = r - l
            if heights[l] <= heights[r]:
                amount = dist * heights[l]
                l += 1
            else:
                amount = dist * heights[r]
                r -= 1
            max_amount = max(amount, max_amount)
        return max_amount
