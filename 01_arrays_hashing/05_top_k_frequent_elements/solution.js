/*
Arrays & Hashing -> Top K Frequent Elements
Neetcode 5 / 150
Leetcode 347

Javascript

Comments:
Put the elements in their frequency buckets, then they're already sorted for 
when you have to go through. I guess you can't fill with [] because they all 
share the same reference.

Time: O(n) iterate through a bunch of (non-nested) lists and maps
Space: O(n) create a bunch of lists and maps
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
		const count = new Map();
		const freq = new Array(nums.length + 1).fill(null).map(() => []);
		for (const n of nums) {
			count.set(n, 1 + (count.get(n) || 0));
		}
		count.forEach((count, num) => {
			freq[count].push(num);
		});
		const topk = [];
		for (let i = freq.length - 1; i > 0; i--) {
			for (const n of freq[i]) {
				topk.push(n);
				if (topk.length === k) {
					return topk;
				}
			}
		}
	}
}
