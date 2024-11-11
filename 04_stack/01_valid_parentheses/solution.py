"""
Stack -> Valid Parentheses
Neetcode 21 / 150
Leetcode 20

Python

Comments:
First bracket started needs to be first one closed: stack.

Time: O(n) one iteration through array
Space: O(n) create stack of max size n
"""


class Solution:
    def isValid(self, s: str) -> bool:
        opened = []
        starts = "([{"
        pairs = {")": "(", "]": "[", "}": "{"}
        for char in s:
            if char in starts:
                opened.append(char)
            elif char in pairs:
                if not opened or pairs[char] != opened.pop():
                    return False
        return not opened
