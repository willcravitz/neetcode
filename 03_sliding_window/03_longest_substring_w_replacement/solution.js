/*
Sliding Window -> Longest Repeating Character Replacement
Neetcode 17 / 150
Leetcode 424

Javascript

Comments:
The measure of success is: can we fill up the rest of the window with the most
frequent character? If yes, let's make the window even bigger. If no, shrink the
window.

Time: O(n) iterate once with right pointer
Space: O(n) use a map that could contain all chars in string
*/

class Solution {
	/**
	 * @param {string} s
	 * @param {number} k
	 * @return {number}
	 */
	characterReplacement(s, k) {
		let l = 0;
		const window = new Map();
		let maxCount = 0;
		let res = 0;
		for (let r = 0; r < s.length; r++) {
			window.set(s[r], 1 + (window.get(s[r]) || 0));
			maxCount = Math.max(window.get(s[r]), maxCount);
			if (maxCount + k < r - l + 1) {
				window.set(s[l], window.get(s[l]) - 1);
				l++;
			}
			res = Math.max(r - l + 1, res);
		}
		return res;
	}
}
