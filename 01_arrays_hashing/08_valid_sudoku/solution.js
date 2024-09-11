/*
Arrays & Hashing -> Valid Sudoku
Neetcode 8 / 150
Leetcode 36

JavaScript

Comments:
I don't think it's worth it to use hashmaps when we know there will only be 27 
lists each with a max length of 9. Timed it both ways on Leetcode: results 
inconclusive. Willing to be proved wrong.

Time: O(1) we iterate through fixed 9 by 9 grid
Space: O(1) we always create 27 lists
*/

class Solution {
	/**
	 * @param {character[][]} board
	 * @return {boolean}
	 */
	isValidSudoku(board) {
		const rows = Array.from({ length: 9 }, () => []);
		const cols = Array.from({ length: 9 }, () => []);
		const sections = Array.from({ length: 9 }, () => []);
		const rcToI = (r, c) => 3 * Math.floor(r / 3) + Math.floor(c / 3);
		for (let r = 0; r < 9; r++) {
			for (let c = 0; c < 9; c++) {
				const curr = board[r][c];
				if (curr === ".") {
					continue;
				}
				if (
					rows[r].includes(curr) ||
					cols[c].includes(curr) ||
					sections[rcToI(r, c)].includes(curr)
				) {
					return false;
				}
				rows[r].push(curr);
				cols[c].push(curr);
				sections[rcToI(r, c)].push(curr);
			}
		}
		return true;
	}
}
