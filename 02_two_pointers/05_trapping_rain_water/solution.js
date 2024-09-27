/*
Two Pointers -> Trapping Rain Water
Neetcode 14 / 150
Leetcode 42

Javascript

Comments:
The code hides the sneakiness of this solution. For each index, we care about 
the smaller of the max heights to the left and right. We only track left max of 
l and right max of r. But if left max of l is smaller than ~some~thing to its 
right (or right max of r smaller than something to the left), we know it's
the smaller of the max heights. 

Time: O(n) two pointers iterate through array
Space: O(1) no extra space needed
*/

class Solution {
	/**
	 * @param {number[]} height
	 * @return {number}
	 */
	trap(height) {
		if (height.length <= 2) {
			return 0;
		}
		let l = 0;
		let r = height.length - 1;
		let leftMax = height[l];
		let rightMax = height[r];
		let res = 0;
		while (l < r) {
			if (leftMax <= rightMax) {
				res += leftMax - height[l];
				l++;
				leftMax = Math.max(height[l], leftMax);
			} else {
				res += rightMax - height[r];
				r--;
				rightMax = Math.max(height[r], rightMax);
			}
		}
		return res;
	}
}
