/*
Arrays & Hashing -> Is Anagram
Neetcode 1.2
Leetcode 242

Javascript

Comments:
Use object[key] instead of object.key when the key is being determined 
dynamically. The || operator returns the value of the first operator as long as
it's truthy, so you can use it for undefined expressions. There's no deep check
of objects; you have to do that on your own.

Time: O(n) we loop through the strings
Space: O(1) since counter has at most 26 keys, one for each letter
*/

class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		if (s.length !== t.length) {
			return false;
		}
		const counter = {};
		for (const char of s) {
			counter[char] = (counter[char] || 0) + 1;
		}
		console.log(counter);
		for (const char of t) {
			const newCount = (counter[char] || 0) - 1;
			if (newCount < 0) {
				return false;
			}
			counter[char] = newCount;
		}
		return true;
	}
}
