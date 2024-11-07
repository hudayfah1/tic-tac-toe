// const WINNING_COMBOS = [[0, 11, 22], [2, 11, 20]];
// for (let row = 0; row < 3; row++) {
//   WINNING_COMBOS.push([row * 10, row * 10 + 1, row * 10 + 2]);
// }
// for (let col = 0; col < 3; col++) {
//   WINNING_COMBOS.push([col, col + 10, col + 20]);
// }
// export const WINNING_COMBINATIONS = WINNING_COMBOS.map(combination => combination.map(square => {
//   if (square === 0) return {r: 0, c: 0}
//   const row = Number(String(square).split(''))[0];
//   const col = Number(String(square).split(''))[1];
//   return {r: row, c: col};
// }));

const WINNING_COMBINATIONS = [
    [{r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}], // Row 1
    [{r: 1, c: 0}, {r: 1, c: 1}, {r: 1, c: 2}], // Row 2
    [{r: 2, c: 0}, {r: 2, c: 1}, {r: 2, c: 2}], // Row 3
    [{r: 0, c: 0}, {r: 1, c: 0}, {r: 2, c: 0}], // Column 1
    [{r: 0, c: 1}, {r: 1, c: 1}, {r: 2, c: 1}], // Column 2
    [{r: 0, c: 2}, {r: 1, c: 2}, {r: 2, c: 2}], // Column 3
    [{r: 0, c: 0}, {r: 1, c: 1}, {r: 2, c: 2}], // Diagonal 1
    [{r: 0, c: 2}, {r: 1, c: 1}, {r: 2, c: 0}]  // Diagonal 2
  ];

export default WINNING_COMBINATIONS