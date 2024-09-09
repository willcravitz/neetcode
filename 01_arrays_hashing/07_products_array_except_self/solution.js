/*
Arrays & Hashing -> Products of Array Except Self
Neetcode 7 / 150
Leetcode 238

JavaScript

Comments:
Dipping my toes into dynamic programming. The whole before/after array trick is
really just a way to reuse previous products to compute the next product. 
Oh, and JavaScript doesn't have negative indexing for arrays - hence the "at"
method.

Time: O(n) two loops through nums
Space: O(n) create three arrays of size n
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[]}
	 */
	productExceptSelf(nums) {
		const before = [1]; // index i is product of nums before index i
		const after = [1]; // index i is product of nums after index -i-1
		for (let i = 0; i < nums.length - 1; i++) {
			before.push(before[i] * nums[i]);
			after.push(after[i] * nums.at(-i - 1));
		}
		const res = [];
		for (let i = 0; i < nums.length; i++) {
			res.push(before[i] * after.at(-i - 1));
		}
		return res;
	}
}
