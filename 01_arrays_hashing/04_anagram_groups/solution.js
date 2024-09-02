/*
Arrays & Hashing -> Anagram Groups
Neetcode 4 / 150
Leetcode 49

Javascript

Comments:
Strings are just arrays of characters. Once you sort them, anagrams are the same.

Time: O(m * nlog[n]) sort each word in the list
Space: O(m * n) sorted word for each word, map for all words at worst
*/

class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
		const groups = {};
		for (const word of strs) {
			const sorted = word.split("").sort().join();
			if (!groups[sorted]) {
				groups[sorted] = [];
			}
			groups[sorted].push(word);
		}
		return Object.values(groups);
	}
}
