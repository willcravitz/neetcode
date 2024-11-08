"""
Sliding Window -> Sliding Window Maximum
Neetcode 20 / 150
Leetcode 239

Javascript

Comments:
Keep track of the maximum at the top of the queue, and keep potential future
maxima in the queue. Everything else can go.

Time: O(n) iterate through the array once and we only do O(1) work per element
Space: O(k) we only have k elements in the queue at any time
"""

from collections import deque


class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        res = []
        deq = deque()

        for i in range(len(nums)):
            while deq and deq[-1] < nums[i]:
                deq.pop()
            deq.append(nums[i])

            if i >= k and nums[i - k] == deq[0]:
                deq.popleft()

            if i >= k - 1:
                res.append(deq[0])

        return res
