/*
Stack -> Min Stack
Neetcode 22 / 150
Leetcode 155

Javascript

Comments:
Challenge is to track min even when it's popped. Take advantage of stack to have
a "history" by tracking the min at each push.

Time: O(1) duh that's the whole problem
Space: O(n) stack
*/

class MinStack {
	constructor() {
		this.stack = [];
	}

	/**
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		let minVal = this.getMin();
		if (minVal === null || val < minVal) {
			minVal = val;
		}
		this.stack.push([val, minVal]);
	}

	/**
	 * @return {void}
	 */
	pop() {
		this.stack.pop();
	}

	/**
	 * @return {number}
	 */
	top() {
		if (this.stack.length) {
			return this.stack[this.stack.length - 1][0];
		}
		return null;
	}

	/**
	 * @return {number}
	 */
	getMin() {
		if (this.stack.length) {
			return this.stack[this.stack.length - 1][1];
		}
		return null;
	}
}
