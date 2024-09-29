"""
Sliding Window -> Best Time to Buy and Sell Stock
Neetcode 15 / 150
Leetcode 121

Python

Comments:
The window starts at the lowest price and ends at the current price. 

Time: O(n) one iteration through list
Space: O(1) no space
"""


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        res = 0
        low = prices[0]
        for price in prices:
            profit = price - low
            if profit > 0:
                res = max(profit, res)
            else:
                low = price
        return res
