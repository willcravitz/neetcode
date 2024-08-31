/*
Arrays & Hashing -> Two Integer Sum
Neetcode 1.3
Leetcode 1

Javascript

Comments:
The secret is to save the precious information of each value's index in the 
array. We're doing that as we check for the second number in the sum. Map uses
get, set, has.

Time: O(n) we loop through nums once
Space: O(n) since prev might have a key for each num
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		const prev = new Map(); // num as key and index as value
		for (let i = 0; i < nums.length; i++) {
			const targetDiff = target - nums[i];
			if (prev.has(targetDiff)) {
				return [prev.get(targetDiff), i];
			}
			prev.set(nums[i], i);
		}
	}
}
