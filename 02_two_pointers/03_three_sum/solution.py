"""
Two Pointers -> Three Sum
Neetcode 12 / 150
Leetcode 15

Python

Comments:
Blech. I tried so hard to run the two pointers on the outside with an interior
iterator. Could not get it to work. Iterate and run Two Sum on the remaining 
elements. Most of this code is just to cut down on inefficiencies.

Time: O(n^2) sorting then two pointer iteration within iteration
Space: O(n) I guess you need space to sort the array
"""


class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        res = []
        for a in range(len(nums) - 2):
            if nums[a] > 0:
                break
            if a > 0 and nums[a] == nums[a - 1]:
                continue
            b = a + 1
            c = len(nums) - 1
            while b < c:
                total = nums[a] + nums[b] + nums[c]
                if total < 0:
                    b += 1
                elif total > 0:
                    c -= 1
                else:
                    triple = [nums[a], nums[b], nums[c]]
                    res.append(triple)
                    while b < c and nums[b] == triple[1]:
                        b += 1
                    while b < c and nums[c] == triple[2]:
                        c -= 1
        return res
