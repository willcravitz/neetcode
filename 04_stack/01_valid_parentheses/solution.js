/*
Stack -> Valid Parentheses
Neetcode 21 / 150
Leetcode 20

Javascript

Comments:
First bracket started needs to be first one closed: stack.

Time: O(n) one iteration through array
Space: O(n) create stack of max size n
*/

class Solution {
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	isValid(s) {
		const opened = [];
		const starts = "([{";
		const pairs = {
			")": "(",
			"]": "[",
			"}": "{",
		};
		for (const c of s) {
			if (starts.includes(c)) {
				opened.push(c);
			} else if (pairs[c]) {
				if (!opened.length || pairs[c] !== opened.pop()) {
					return false;
				}
			}
		}
		return opened.length === 0;
	}
}
