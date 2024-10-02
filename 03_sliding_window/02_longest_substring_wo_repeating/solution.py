"""
Sliding Window -> Longest Substring Without Repeating Characters
Neetcode 16 / 150
Leetcode 3

Python

Comments:
Dynamic window! Keep track of what's inside. If we hit a repeat, shrink from
the left until the repeat is gone. 

Time: O(n) iterate once with right pointer
Space: O(n) use a set that could contain all chars in string
"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        window = set()
        res = 0
        for r in range(len(s)):
            while s[r] in window:
                window.remove(s[l])
                l += 1
            window.add(s[r])
            res = max(r - l + 1, res)
        return res
