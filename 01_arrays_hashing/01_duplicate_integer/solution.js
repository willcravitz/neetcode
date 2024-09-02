/*
Arrays & Hashing -> Duplicate Integer
Neetcode 1 / 150
Leetcode 217

Javascript

Comments:
Didn't realize Javascript has a Set object. That's nice, I guess.

Time: O(n) loop through list of nums
Space: O(n) create a set of max size equal to list size
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
