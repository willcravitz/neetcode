'''
Arrays & Hashing -> Top K Frequent Elements
Neetcode 5 / 150
Leetcode 347

Python

Comments:
We want to get the k elements with the highest frequency, so it's natural to 
drop them in a heap and pop them off one by one. Python has no business being 
this readable. 

Time: O(k * logn) logn for the pop, do it k times, linear for everything else
Space: O(n) dict has max n keys, so heap has max n nodes
'''

import heapq

class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        count = {}
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        heap = []
        for n, c in count.items():
            heapq.heappush(heap, (-c, n))
        topk = []
        while len(topk) < k:
            topk.append(heapq.heappop(heap)[1])
        return topk
