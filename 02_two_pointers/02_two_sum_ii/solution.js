/*
Two Pointers -> Two Sum II - Input Array is Sorted
Neetcode 11 / 150
Leetcode 167

Javascript

Comments:
So fun, so simple!

Time: O(n) the two pointers traverse whole array at most once
Space: O(1) we don't need to make anything new
*/

class Solution {
	/**
	 * @param {number[]} numbers
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(numbers, target) {
		let l = 0;
		let r = numbers.length - 1;
		while (l < r) {
			const total = numbers[l] + numbers[r];
			if (total === target) {
				return [l + 1, r + 1];
			} else if (total < target) {
				l++;
			} else {
				r--;
			}
		}
		return []; // return empty array if no solution found
	}
}
