"""
Stack -> Min Stack
Neetcode 22 / 150
Leetcode 155

Python

Comments:
Challenge is to track min even when it's popped. Take advantage of stack to have
a "history" by tracking the min at each push.

Time: O(1) duh that's the whole problem
Space: O(n) stack
"""


class MinStack:
    def __init__(self):
        # store val in first index, minimum at time in second index
        self.stack = []

    def push(self, val: int) -> None:
        past_min = self.getMin()
        if past_min is None or val < past_min:
            curr_min = val
        else:
            curr_min = past_min
        self.stack.append([val, curr_min])

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        if self.stack:
            return self.stack[-1][0]
        return None

    def getMin(self) -> int:
        if self.stack:
            return self.stack[-1][1]
        return None
