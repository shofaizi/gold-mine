const mine = [
  [1, 2, 2, 4, 8, 3, 5, 9, 3, 7],
  [6, 9, 8, 7, 6, 3, 1, 5, 7, 8],
  [6, 1, 0, 1, 1, 9, 2, 8, 2, 1],
  [1, 5, 4, 7, 6, 5, 0, 4, 0, 9],
  [6, 5, 3, 5, 7, 1, 7, 7, 6, 5],
  [3, 2, 7, 8, 5, 1, 9, 1, 9, 6],
  [6, 8, 4, 1, 7, 6, 2, 1, 6, 1],
  [5, 6, 1, 9, 7, 2, 2, 1, 0, 6],
  [0, 4, 9, 5, 4, 8, 8, 7, 2, 4],
  [9, 9, 0, 1, 8, 9, 5, 2, 0, 9]
];

export default mine;


/*
  If mine[position.y][position.x + 1] == mine[position.y + 1][position.x + 1]
  look ahead 1 column and find the greater value
*/
