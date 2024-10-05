/*
Sliding Window -> Permutation in String
Neetcode 18 / 150
Leetcode 567

Javascript

Comments:
Yes I know I know but I'm sick and want to be done with this problem. There's a
clever way to get down to O(n) by tracking the match count.

Time: O(nk) where n is the length of s2 and k is the length of s1
Space: O(1) our arrays have a max size of 26
*/

class Solution {
	/**
	 * @param {string} s1
	 * @param {string} s2
	 * @return {boolean}
	 */
	checkInclusion(s1, s2) {
		if (s1.length > s2.length) {
			return false;
		}
		const s1Count = new Array(26).fill(0);
		const s2Count = new Array(26).fill(0);
		for (let i = 0; i < s1.length; i++) {
			s1Count[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
		}
		for (let r = 0; r < s2.length; r++) {
			s2Count[s2.charCodeAt(r) - "a".charCodeAt(0)]++;
			if (r >= s1.length) {
				s2Count[s2.charCodeAt(r - s1.length) - "a".charCodeAt(0)]--;
			}
			console.log(s1Count, s2Count);
			if (s1Count.every((val, index) => val === s2Count[index])) {
				return true;
			}
		}
		return false;
	}
}
