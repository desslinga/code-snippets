class Solution {
    public int orangesRotting(int[][] grid) {
        int[][] dirs = new int[][]{{-1,0},{1,0},{0,-1},{0,1}};
        if (grid == null || grid.length == 0) return -1;
        int m = grid.length;
        int n = grid[0].length;
        // initialize queue of rotting oranges
        Queue<int[]> queue = new LinkedList<int[]>();
        // initialize the depth matrix
        int[][] depth = new int[m][n];
        // load all the rotted oranges first.
        int timeToInfect = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i,j});
                    depth[i][j] = 0;
                }
            }
        }
        // do our bfs
        while (!queue.isEmpty()) {
            int[] coord = queue.poll();
            // loop through each dir
            for (int[] d: dirs) {
                int x = coord[0] + d[0];
                int y = coord[1] + d[1];
                // check if an orange can be infected
                if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == 1) {
                    grid[x][y] = 2;
                    depth[x][y] = depth[coord[0]][coord[1]] + 1;
                    queue.offer(new int[]{x,y});
                    timeToInfect = Math.max(depth[x][y], timeToInfect);
                }
            }
        }
        // check at the end if there are any uninfected oranges
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) return -1;
            }
        }
        return timeToInfect;
    }
}
