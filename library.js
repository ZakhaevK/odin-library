const myLibrary = [];

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
  for (game in myLibrary) {
    return game.info();
  }
}