"""
Two Pointers -> Trapping Rain Water
Neetcode 14 / 150
Leetcode 42

Python

Comments:
The code hides the sneakiness of this solution. For each index, we care about 
the smaller of the max heights to the left and right. We only track left max of 
l and right max of r. But if left max of l is smaller than ~some~thing to its 
right (or right max of r smaller than something to the left), we know it's
the smaller of the max heights. 

Time: O(n) two pointers iterate through list
Space: O(1) no extra space needed
"""


class Solution:
    def trap(self, height: list[int]) -> int:
        if len(height) <= 2:
            return 0
        l = 0
        r = len(height) - 1
        max_left = height[l]
        max_right = height[r]
        res = 0
        while l < r:
            if max_left <= max_right:
                res += max_left - height[l]
                l += 1
                max_left = max(height[l], max_left)
            else:
                res += max_right - height[r]
                r -= 1
                max_right = max(height[r], max_right)
        return res
