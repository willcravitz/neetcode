/*
Arrays & Hashing -> String Encode and Decode
Neetcode 6 / 150
Leetcode 271

Javascript

Comments:
Credit to Bon! Stick all the location information on the front of the string,
then parse it out when decoding. This was especially useful for the JS solution.

Time: O(n) for each, loop through once, getting length is constant time
Space: O(n) for each, create a new string or a new array
*/

class Solution {
	/**
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		if (!strs) return "";
		let info = "";
		let content = "";
		let pos = 0;
		for (const word of strs) {
			info += `${pos}#`;
			content += word;
			pos += word.length;
		}
		info += `${pos}`;
		return `${info}*${content}`;
	}

	/**
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		if (!str) return [];
		const res = [];
		// Dealing with lack of max split in JS
		const [info, ...other] = str.split("*");
		const content = other.join("*");
		const pos = info.split("#");
		for (let i = 1; i < pos.length; i++) {
			const start = parseInt(pos[i - 1]);
			const end = parseInt(pos[i]);
			res.push(content.substring(start, end));
		}
		return res;
	}
}
