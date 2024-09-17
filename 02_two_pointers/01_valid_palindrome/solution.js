/*
Arrays & Hashing -> Valid Palindrome
Neetcode 10 / 150
Leetcode 125

Javascript

Comments:
Sadly, LeetCode says my solution is pretty slow. But I think it's fundamentally
sound? Yes, lowercasing and filtering at the start is simpler, but it's not in 
the spirit of the problem.

Time: O(n) the pointers iterate together through the array once
Space: O(n) no additional data structures are used
*/

class Solution {
	/**
	 * @param {string} s
	 * @return {boolean}
	 */
	isPalindrome(s) {
		let l = 0;
		let r = s.length - 1;
		const alphaNum = (char) => !!char.match(/^[0-9a-zA-Z]+$/);
		while (l < r) {
			if (!alphaNum(s[l])) {
				l++;
			} else if (!alphaNum(s[r])) {
				r--;
			} else if (s[l].toLowerCase() === s[r].toLowerCase()) {
				l++;
				r--;
			} else {
				return false;
			}
		}
		return true;
	}
}
