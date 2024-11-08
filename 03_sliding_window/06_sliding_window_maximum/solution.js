/*
Sliding Window -> Sliding Window Maximum
Neetcode 20 / 150
Leetcode 239

Javascript

Comments:
Keep track of the maximum at the top of the queue, and keep potential future
maxima in the queue. Everything else can go. This is only slow because JS 
doesn't have deque.

Time: O(n) iterate through the array once and we only do O(1) work per element
Space: O(k) we only have k elements in the queue at any time
*/

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	maxSlidingWindow(nums, k) {
		const res = [];
		const deq = [];

		for (let i = 0; i < nums.length; i++) {
			while (deq.length && deq[deq.length - 1] < nums[i]) {
				deq.pop();
			}
			deq.push(nums[i]);

			if (i >= k && nums[i - k] === deq[0]) {
				deq.shift();
			}

			if (i >= k - 1) {
				res.push(deq[0]);
			}
		}

		return res;
	}
}
