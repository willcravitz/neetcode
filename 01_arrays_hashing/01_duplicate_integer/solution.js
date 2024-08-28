/*
Arrays & Hashing -> Duplicate Integer
Neetcode 1.1
Leetcode 217

Javascript

Comments:
Didn't realize Javascript has a Set object. That's nice, I guess.

Time: O(n)
Space: O(n)
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {boolean}
	 */
	hasDuplicate(nums) {
		const seen = new Set();
		for (const num of nums) {
			if (seen.has(num)) return true;
			seen.add(num);
		}
		return false;
	}
}
