/*
Sliding Window -> Minimum Window Substring
Neetcode 19 / 150
Leetcode 76

Javascript

Comments:
I need to get through sliding window.

Time: O(n)
Space: O(n)
*/

class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {string}
	 */
	minWindow(s, t) {
		if (s.length < t.length) {
			return "";
		}

		const count = {};
		for (let char of t) {
			count[char] = (count[char] || 0) + 1;
		}

		const window = {};
		let minLen = Infinity;
		let have = 0;
		let need = Object.keys(count).length;
		let left = 0;
		let resLeft = 0;
		let resRight = 0;

		for (let right = 0; right < s.length; right++) {
			window[s[right]] = (window[s[right]] || 0) + 1;

			if (s[right] in count && window[s[right]] === count[s[right]]) {
				have++;
			}

			while (have === need) {
				if (right - left + 1 < minLen) {
					minLen = right - left + 1;
					resLeft = left;
					resRight = right;
				}
				window[s[left]]--;

				if (s[left] in count && window[s[left]] < count[s[left]]) {
					have--;
				}

				left++;
			}
		}

		return minLen === Infinity ? "" : s.slice(resLeft, resRight + 1);
	}
}
