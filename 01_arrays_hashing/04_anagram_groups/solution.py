'''
Arrays & Hashing -> Anagram Groups
Neetcode 4 / 150
Leetcode 49

Python

Comments:
This method is a bit more efficient and much easier to implement in python. 
Iterate through each word to count its letters. Can't do this with a dict because
you can't use mutable types as keys. ord(char) gives unicode value.

Time: O(m * n) loop through each word, each letter in each word
Space: O(m * n) array for each word, map for all words at worst
'''

from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        groups = defaultdict(list)
        for word in strs:
            count = [0] * 26
            for ltr in word:
                count[ord(ltr) - ord("a")] += 1
            groups[tuple(count)].append(word)
        return groups.values()