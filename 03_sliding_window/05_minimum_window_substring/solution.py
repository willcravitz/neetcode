"""
Sliding Window -> Minimum Window Substring
Neetcode 19 / 150
Leetcode 76

Python

Comments:
I need to get through sliding window.

Time: O(n)
Space: O(n)
"""


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""

        count = {}
        for char in t:
            count[char] = 1 + count.get(char, 0)

        window = {}
        min_len = float("inf")
        have = 0
        need = len(count)
        l = 0
        res_l = 0
        res_r = 0

        for r in range(len(s)):
            window[s[r]] = 1 + window.get(s[r], 0)
            if s[r] in count and window[s[r]] == count[s[r]]:
                have += 1
            while have == need:
                if (r - l + 1) < min_len:
                    min_len = r - l + 1
                    res_l = l
                    res_r = r
                window[s[l]] -= 1
                if s[l] in count and window[s[l]] < count[s[l]]:
                    have -= 1
                l += 1
        return s[res_l : res_r + 1] if min_len != float("inf") else ""
