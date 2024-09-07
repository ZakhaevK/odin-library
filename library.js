// Document elements
const libContainer = document.getElementById('library');
const submitInput = document.getElementById('g-submit');
const titleInput = document.getElementById('g-title');
const devInput = document.getElementById('g-dev');
const lengthInput = document.getElementById('g-length');
const playedInput = document.getElementById('g-played');

const myLibrary = [];

const exampleGame = new Game( "Warcraft III", 
                              "Blizzard Entertainment",
                              100,
                              true);

addGameToLibrary(exampleGame);
displayGames();

function Game(title, dev, length, played) {
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
  libContainer.replaceChildren("");

 myLibrary.forEach((game, index) => {
   const newGame = document.createElement('div');
   newGame.className = "game";

   const titleH2 = document.createElement('h2');
   titleH2.textContent = game.title;

   const devPara = document.createElement('p');
   devPara.textContent = `Developer: ${game.dev}`;

   const lengthPara = document.createElement('p');
   lengthPara.textContent = `Length: ${game.length} hours`;

   const playedPara = document.createElement('p');
   playedPara.textContent = game.played ? 'Played: Yes' : 'Played: No';

   const togglepara = document.createElement('p');
   togglepara.textContent = 'Update Game Details:';

   const playButt = document.createElement('button');
   playButt.textContent = 'Played';
   playButt.addEventListener('click', () => {
     game.played = !game.played;
     displayGames();
   });

   const deleteButt = document.createElement('button');
   deleteButt.textContent = 'Delete';
   deleteButt.addEventListener('click', () => {
     myLibrary.splice(index, 1); 
     displayGames(); 
   });

   // Add elements to newGame div
   newGame.appendChild(titleH2);
   newGame.appendChild(devPara);
   newGame.appendChild(lengthPara);
   newGame.appendChild(playedPara);
   newGame.appendChild(togglepara);
   newGame.appendChild(playButt);
   newGame.appendChild(deleteButt);
   
   // Append the game to the library container
   libContainer.appendChild(newGame);
 });
}

// Event Listeners
submitInput.addEventListener('click', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const dev = devInput.value;
  const length = lengthInput.value;
  const played = playedInput.checked;

  const newGame = new Game(title, dev, length, played);

  addGameToLibrary(newGame);
  displayGames();
})


