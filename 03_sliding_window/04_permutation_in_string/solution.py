"""
Sliding Window -> Permutation in String
Neetcode 18 / 150
Leetcode 567

Python

Comments:
Yes I know I know but I'm sick and want to be done with this problem.

Time: O(nk) where n is the length of s2 and k is the length of s1
Space: O(1) our dicts have a max size of 26
"""


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        s1_count = {}
        for char in s1:
            s1_count[char] = 1 + s1_count.get(char, 0)
        s2_count = {}
        for r in range(len(s2)):
            s2_count[s2[r]] = 1 + s2_count.get(s2[r], 0)
            s1_count[s2[r]] = s1_count.get(s2[r], 0)
            if r >= len(s1):
                s2_count[s2[r - len(s1)]] -= 1
            if s1_count == s2_count:
                return True
        return False
