function solution(bishop, pawn) {
  const [bCol, bRow] = bishop.split('');
  const [pCol, pRow] = pawn.split('');
  const letterIndex = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };
  return Math.abs(letterIndex[bCol] - letterIndex[pCol]) === Math.abs(bRow - pRow);
}
