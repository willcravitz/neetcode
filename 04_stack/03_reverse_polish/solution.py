"""
Stack -> Evaluate Reverse Polish Notation
Neetcode 23 / 150
Leetcode 150

Python

Comments:
Stack keeps a line of numbers to be operated on. Once you understand polish
notation it is nothing but a stack. 

Time: O(n) iterate through the tokens
Space: O(n) keep a stack that can hold all the nums
"""


class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        operators = {
            "+": lambda x, y: x + y,
            "-": lambda x, y: x - y,
            "*": lambda x, y: x * y,
            "/": lambda x, y: int(x / y),
        }
        stack = []
        for token in tokens:
            if token in operators:
                y = stack.pop()
                x = stack.pop()
                res = operators[token](x, y)
            else:
                res = int(token)
            stack.append(res)
        return stack.pop()
