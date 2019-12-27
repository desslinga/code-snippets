class TicTacToe {
    int[] rows;
    int[] cols;
    int diagonal, antidiagonal;
    int[][] board;
    int n;
    /** Initialize your data structure here. */
    public TicTacToe(int n) {
        rows = new int[n];
        cols = new int[n];
        diagonal = 0;
        antidiagonal = 0;
        board = new int[n][n];
        this.n = n;
    }
    
    /** Player {player} makes a move at ({row}, {col}).
        @param row The row of the board.
        @param col The column of the board.
        @param player The player, can be either 1 or 2.
        @return The current winning condition, can be either:
                0: No one wins.
                1: Player 1 wins.
                2: Player 2 wins. */
    public int move(int row, int col, int player) {
        // i will still assume that you can make an invalid move
        if (board[row][col] != 0) return 0; // invalid move
        // adding the number tiles at the changed row
        rows[row] += (player == 1 ? 1 : -1);
        // check if row wins
        if (rows[row] == n) return 1;
        if (rows[row] == -n) return 2;
        // check if col wins
        cols[col] += (player == 1 ? 1 : -1);
        if (cols[col] == n) return 1;
        if (cols[col] == -n) return 2;
        // adding the number tiles at the changed diagonal (if any)
        if (row == col) diagonal += (player == 1 ? 1 : -1);
        if (diagonal == n) return 1;
        if (diagonal == -n) return 2;
        if (row == n - col - 1) antidiagonal += (player == 1 ? 1 : -1);
        if (antidiagonal == n) return 1;
        if (antidiagonal == -n) return 2;
        System.out.println(antidiagonal);
        return 0;
    }
    
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * TicTacToe obj = new TicTacToe(n);
 * int param_1 = obj.move(row,col,player);
 */
