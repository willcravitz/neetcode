"""
Arrays & Hashing -> String Encode and Decode
Neetcode 6 / 150
Leetcode 271

Python

Comments:
Credit to Bon! Stick all the location information on the front of the string,
then parse it out when decoding.

Time: O(n) for each, loop through once, getting length is constant time
Space: O(n) for each, create a new string or a new list
"""


class Solution:
    def encode(self, strs: list[str]) -> str:
        if len(strs) == 0:
            return ""
        info = ""
        content = ""
        pos = 0
        for word in strs:
            info += str(pos) + "$"
            content += word
            pos += len(word)
        info += str(pos)
        return info + "*" + content

    def decode(self, s: str) -> list[str]:
        if s == "":
            return []
        res = []
        # the * we used to delimit is always the first one
        info, content = s.split("*", maxsplit=1)
        pos = info.split("$")
        for i in range(1, len(pos)):
            start, end = int(pos[i - 1]), int(pos[i])
            word = content[start:end]
            res.append(word)
        return res
