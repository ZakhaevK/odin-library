const myLibrary = [];

const libContainer = document.getElementById('library');

function game(title, dev, length, played) {
  this.title = title;
  this.dev = dev;
  this.length = length;
  this.played = played;
  this.info = function () {
    if (this.played) {
      return `${this.title}, developed by ${this.dev}, with a length of ${this.length} hours, have played it.`
    } else {
      return `${this.title}, developed by ${this.dev}, with a length of ${this.length} hours, currently not played.`
    }
  }
}

function addGameToLibrary(game) {
  myLibrary.push(game);
}

function displayGames() {
  for (game of myLibrary) {
    const newGame = document.createElement('div');
    newGame.className = "game";

    const titleH2 = document.createElement('h2');
    titleH2.textContent = game.title;

    const devPara = document.createElement('p');
    devPara.textContent = `Developer: ${game.dev}`;

    const lengthPara = document.createElement('p');
    lengthPara.textContent = `Length: ${game.length} hours`;

    const playedPara = document.createElement('p');
    if (game.played) {
      playedPara.textContent = 'Played: Yes';
    } else {
      playedPara.textContent = 'Played: No';
    }

    // Add to document
    newGame.appendChild(titleH2);
    newGame.appendChild(devPara);
    newGame.appendChild(lengthPara);
    newGame.appendChild(playedPara);
    libContainer.appendChild(newGame);
  }
}