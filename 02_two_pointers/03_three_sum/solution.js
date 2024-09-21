/*
Two Pointers -> Three Sum
Neetcode 12 / 150
Leetcode 15

Javascript

Comments:
Blech. I tried so hard to run the two pointers on the outside with an interior
iterator. Could not get it to work. Iterate and run Two Sum on the remaining 
elements. Most of this code is just to cut down on inefficiencies.

Time: O(n^2) sorting then two pointer iteration within iteration
Space: O(n) I guess you need space to sort the array
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	threeSum(nums) {
		nums.sort((a, b) => a - b);
		const res = [];
		for (let a = 0; a < nums.length - 2; a++) {
			if (nums[a] > 0) break;
			if (a > 0 && nums[a] === nums[a - 1]) continue;
			let b = a + 1;
			let c = nums.length - 1;
			while (b < c) {
				const total = nums[a] + nums[b] + nums[c];
				if (total < 0) {
					b++;
				} else if (total > 0) {
					c--;
				} else {
					const triple = [nums[a], nums[b], nums[c]];
					res.push(triple);
					while (b < c && nums[b] === triple[1]) {
						b++;
					}
					while (b < c && nums[c] === triple[2]) {
						c--;
					}
				}
			}
		}
		return res;
	}
}
