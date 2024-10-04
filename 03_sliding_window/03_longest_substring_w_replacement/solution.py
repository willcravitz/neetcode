"""
Sliding Window -> Longest Repeating Character Replacement
Neetcode 17 / 150
Leetcode 424

Python

Comments:
The measure of success is: can we fill up the rest of the window with the most
frequent character? If yes, let's make the window even bigger. If no, shrink the
window.

Time: O(n) iterate once with right pointer
Space: O(n) use a dict that could contain all chars in string
"""


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        window = {}
        max_count = 0
        res = 0
        for r in range(len(s)):
            window[s[r]] = 1 + window.get(s[r], 0)
            max_count = max(window[s[r]], max_count)
            if max_count + k < r - l + 1:
                window[s[l]] -= 1
                l += 1
            res = max(r - l + 1, res)
        return res
