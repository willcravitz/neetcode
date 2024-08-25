'''
Neetcode 1.1
Leetcode 217
Arrays & Hashing -> Duplicate Integer
Python

Comments:
Me love python.

Time: O(n)
Space: O(n)
'''

class Solution:
    def hasDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False