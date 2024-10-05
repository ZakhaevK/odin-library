// Document elements
const libContainer = document.getElementById('library');
const submitInput = document.getElementById('g-submit');
const titleInput = document.getElementById('g-title');
const devInput = document.getElementById('g-dev');
const lengthInput = document.getElementById('g-length');
const playedInput = document.getElementById('g-played');

const myLibrary = [];

class Game {
  #title;
  #dev;
  #length;
  #played;

  constructor(title, dev, length, played) {
    this.#title = title;
    this.#dev = dev;
    this.#length = length;
    this.#played = played;
  }

  static getTitle(Game) {
    return Game.#title;
  }

  static getDev(Game) {
    return Game.#dev;
  }

  static getLength(Game) {
    return Game.#length;
  }

  static getPlayed(Game) {
    return Game.#played;
  }

  static togglePlayed(Game) {
    Game.#played = !Game.#played;
  }

  static getInfo(Game) {
    if (Game.played) {
      return `${Game.title}, developed by ${Game.dev}, with a length of ${Game.length} hours, have played it.`
    } else {
      return `${Game.title}, developed by ${Game.dev}, with a length of ${Game.length} hours, currently not played.`
    }
  }
}

function addGameToLibrary(game) {
  myLibrary.push(game);
}

const exampleGame = new Game( "Warcraft III", 
  "Blizzard Entertainment",
  100,
  true);

addGameToLibrary(exampleGame);
displayGames();

function displayGames() {
  libContainer.replaceChildren("");

 myLibrary.forEach((game, index) => {
   const newGame = document.createElement('div');
   newGame.className = "game";

   const titleH2 = document.createElement('h2');
   titleH2.textContent = Game.getTitle(game);

   const devPara = document.createElement('p');
   devPara.textContent = `Developer: ${Game.getDev(game)}`;

   const lengthPara = document.createElement('p');
   lengthPara.textContent = `Length: ${Game.getLength(game)} hours`;

   const playedPara = document.createElement('p');
   playedPara.textContent = Game.getPlayed(game) ? 'Played: Yes' : 'Played: No';

   const togglepara = document.createElement('p');
   togglepara.textContent = 'Update Game Details:';

   const playButt = document.createElement('button');
   playButt.textContent = 'Played';
   playButt.addEventListener('click', () => {
     Game.togglePlayed(game);
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


