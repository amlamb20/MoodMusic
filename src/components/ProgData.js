const progs = [
  [1, 2, 3, 4],
  [1, 3, 2, 1],
  [1, 4, 5, 4],
  [1, 5, 4, 4],
  [4, 5, 4, 5],
  [1, 5, 1, 5],
  [1, 4, 1, 4],
];

const keys = [
  ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
  //["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
  ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
];

let keyPosition = new Map();
keyPosition.set("C", 0);
keyPosition.set("D", 2);
keyPosition.set("E", 4);
keyPosition.set("F", 5);
keyPosition.set("G", 7);
keyPosition.set("A", 9);
keyPosition.set("B", 11);

export default ProgData;
