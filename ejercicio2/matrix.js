const matrix = [[1, 2, -1], [6, 5, 4], [-9, 8, 9]];
let ascendente = 0;
let descendente = 0;

function diff(m) {
  for (var i = 0; i < m.length; i++) {
    ascendente = ascendente + m[i][2 - i];
  }
  for (var i = 0; i < m.length; i++) {
    descendente = descendente + m[i][i];
  }
  let final = Math.abs(ascendente - descendente);
  return `Resultado: ${final}`;
}

diff(matrix);
