document.addEventListener('DOMContentLoaded', function() {
  const cells = document.getElementsByClassName('cell');
  const resetButton = document.getElementById('reset-btn');
  let currentPlayer = 'X';
  let gameEnded = false;

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
      if (!gameEnded && cells[i].innerHTML === '') {
        cells[i].innerHTML = currentPlayer;
        cells[i].classList.add(currentPlayer);
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
  }

  resetButton.addEventListener('click', function() {
    resetGame();
  });

  function checkWin() {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        cells[a].innerHTML === cells[b].innerHTML &&
        cells[a].
