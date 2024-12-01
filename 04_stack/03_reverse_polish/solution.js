/*
Stack -> Evaluate Reverse Polish Notation
Neetcode 23 / 150
Leetcode 150

Javascript

Comments:
Stack keeps a line of numbers to be operated on. Once you understand polish
notation it is nothing but a stack. 

Time: O(n) iterate through the tokens
Space: O(n) keep a stack that can hold all the nums
*/

class Solution {
	/**
	 * @param {string[]} tokens
	 * @return {number}
	 */
	evalRPN(tokens) {
		const operators = {
			"+": (x, y) => x + y,
			"-": (x, y) => x - y,
			"*": (x, y) => x * y,
			"/": (x, y) => Math.trunc(x / y),
		};
		const stack = [];
		for (const token of tokens) {
			let res;
			if (token in operators) {
				let y = stack.pop();
				let x = stack.pop();
				res = operators[token](x, y);
			} else {
				res = Number(token);
			}
			stack.push(res);
		}
		return stack.pop();
	}
}
