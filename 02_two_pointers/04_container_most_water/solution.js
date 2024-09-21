/*
Two Pointers -> Container With Most Water
Neetcode 13 / 150
Leetcode 11

Javascript

Comments:
The two pointers move from the largest width to the smallest width. Here's the
key: once the pointer moves off a height, there will never be a larger area that
uses the height. 

Time: O(n) two pointers iterate through the array
Space: O(1) don't need to make anything new
*/

class Solution {
	/**
	 * @param {number[]} heights
	 * @return {number}
	 */
	maxArea(heights) {
		let l = 0;
		let r = heights.length - 1;
		let maxAmount = 0;
		while (l < r) {
			const amount = (r - l) * Math.min(heights[l], heights[r]);
			maxAmount = Math.max(amount, maxAmount);
			if (heights[l] <= heights[r]) {
				l++;
			} else {
				r--;
			}
		}
		return maxAmount;
	}
}
