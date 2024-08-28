'''
Arrays & Hashing -> Duplicate Integer
Neetcode 1.1
Leetcode 217

Python

Comments:
Me love python.

Time: O(n) loop through list of nums
Space: O(n) create a set of max size being list size
'''

class Solution:
    def hasDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False