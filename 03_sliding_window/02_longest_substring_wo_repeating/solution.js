/*
Sliding Window -> Longest Substring Without Repeating Characters
Neetcode 16 / 150
Leetcode 3

Javascript

Comments:
Dynamic window! Keep track of what's inside. If we hit a repeat, shrink from
the left until the repeat is gone. 

Time: O(n) iterate once with right pointer
Space: O(n) use a set that could contain all chars in string
*/

class Solution {
	/**
	 * @param {string} s
	 * @return {number}
	 */
	lengthOfLongestSubstring(s) {
		let l = 0;
		const window = new Set();
		let res = 0;
		for (let r = 0; r < s.length; r++) {
			while (window.has(s[r])) {
				window.delete(s[l]);
				l++;
			}
			window.add(s[r]);
			res = Math.max(r - l + 1, res);
		}
		return res;
	}
}
