"""
Arrays & Hashing -> Valid Sudoku
Neetcode 8 / 150
Leetcode 36

Python

Comments:
I don't think it's worth it to use hashmaps when we know there will only be 27 
lists each with a max length of 9. Timed it both ways on Leetcode: results 
inconclusive. Willing to be proved wrong.

Time: O(1) we iterate through fixed 9 by 9 grid
Space: O(1) we always create 27 lists
"""


class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        rows = [[] for _ in range(9)]
        cols = [[] for _ in range(9)]
        sections = [[] for _ in range(9)]  # indexed left to right, up to down
        rc_to_i = lambda r, c: 3 * (r // 3) + c // 3
        for r in range(9):
            for c in range(9):
                curr = board[r][c]
                if curr == ".":
                    continue
                if (
                    curr in rows[r]
                    or curr in cols[c]
                    or curr in sections[rc_to_i(r, c)]
                ):
                    return False
                rows[r].append(curr)
                cols[c].append(curr)
                sections[rc_to_i(r, c)].append(curr)
        return True
