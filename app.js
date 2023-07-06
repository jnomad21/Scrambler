let oldWords = new Set(['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula', 'hippopotomus', 'armadillo', 'aardvark', 'kangaroo', 'hedgehog', 'elephant', 'albatross', 'orangutan', 'rhinoceros', 'chimpanzee']);
let words = [...new Set(oldWords)]
console.log(words)
const scramBtn = document.querySelector('#word-button');
const mixedWord = document.querySelector('#scrambled-word');
const guessWord = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const scoreCounter = document.querySelector('#score')

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function randWord(jumbleWord) {
  for (let i = 0; i < jumbleWord.length; i++) {
    let temp = jumbleWord[i];
    let r = Math.floor(Math.random() * jumbleWord.length);
    jumbleWord[i] = jumbleWord[r];
    jumbleWord[r] = temp;
  }
  return jumbleWord.join('');
}

const word = function () {
  let wor = words[Math.floor(Math.random() * words.length)];
  const jumbleWord = Array.from(wor);
  const scramWord = randWord(jumbleWord);
  mixedWord.textContent = scramWord;
  return wor;
};

let newWord = word();
console.log(newWord)

let score =0
scoreCounter.textContent = score

const submitResponse = function () {
  if (guessWord.value === newWord) {
    displayMessage('YOU GOT IT😎');
    guessWord.value = ""
    score++
    scoreCounter.textContent = score
    oldWords.delete(newWord)
    words = [...new Set(oldWords)]
    console.log(words)
    newWord = word()
  } else {
    displayMessage('KEEP GUESSING, DUMB-DUMB😭');
  }
};

window.addEventListener('load', function () {
  newWord = word();
});

scramBtn.addEventListener('click', function () {
  newWord = word();
});

submitBtn.addEventListener('click', function () {
  submitResponse();
});

guessWord.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    submitResponse();
  }
});