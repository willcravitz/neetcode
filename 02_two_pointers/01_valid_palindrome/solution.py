"""
Arrays & Hashing -> Valid Palindrome
Neetcode 10 / 150
Leetcode 125

Python

Comments:
While loops inside while loops are yucky, admittedly. But we just want to move
the pointer until we reach a valid character. 

Time: O(n) the pointers iterate together through the list once
Space: O(n) no additional data structures are used
"""


class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s) - 1
        while l < r:
            while l < r and not s[l].isalnum():
                l += 1
            while l < r and not s[r].isalnum():
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
        return True
