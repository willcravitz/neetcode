/*
Sliding Window -> Best Time to Buy and Sell Stock
Neetcode 15 / 150
Leetcode 121

Javascript

Comments:
The window starts at the lowest price and ends at the current price. 

Time: O(n) one iteration through array
Space: O(1) no space
*/

class Solution {
	/**
	 * @param {number[]} prices
	 * @return {number}
	 */
	maxProfit(prices) {
		let res = 0;
		let low = prices[0];
		for (const price of prices) {
			const profit = price - low;
			if (profit > 0) {
				res = Math.max(profit, res);
			} else {
				low = price;
			}
		}
		return res;
	}
}
