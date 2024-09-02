'''
Arrays & Hashing -> Is Anagram
Neetcode 2 / 150
Leetcode 242

Python

Comments:
Do the easy checks first. Since the lengths are the same, pigeonhole principle 
says some counter will be negative if the strings are different. Always use the 
get method if the key might not be in the dictionary.

Time: O(n) we loop through the strings
Space: O(1) since counter has at most 26 keys, one for each letter
'''

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        counter = {}
        for char in s:
            counter[char] = counter.get(char, 0) + 1
        for char in t:
            new_count = counter.get(char, 0) - 1
            if new_count < 0:
                return False
            counter[char] = new_count
        return True