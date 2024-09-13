/*
Arrays & Hashing -> Longest Consecutive Sequence
Neetcode 9 / 150
Leetcode 128

JavaScript

Comments:
Oops, Bon and I thought this solution had an issue but it doesn't. Just iterate
over the set and then there are no duplicates. You'll hit each number two times
at most.

Time: O(n) we check over each number a maximum of 2 times
Space: O(n) set of all numbers
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	longestConsecutive(nums) {
		const allNums = new Set(nums);
		let longest = 0;
		for (const n of allNums) {
			if (allNums.has(n - 1)) continue;
			let length = 1;
			while (allNums.has(n + length)) {
				length++;
			}
			if (length > longest) {
				longest = length;
			}
		}
		return longest;
	}
}
