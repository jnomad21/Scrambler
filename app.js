let oldWords = new Set(['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula', 'hippopotomus', 
'armadillo', 'aardvark', 'kangaroo', 'hedgehog', 'elephant', 'albatross', 'orangutan', 'rhinoceros', 'chimpanzee',
'platypus', 'ostrich', 'barracuda', 'salamander', 'anteater']);
let words = [...new Set(oldWords)]

const scramBtn = document.querySelector('#word-button');
const mixedWord = document.querySelector('#scrambled-word');
const guessWord = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const scoreCounter = document.querySelector('#score')
const timer = document.getElementById('timer');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


let timerInterval;



startTimer = () => {
    clearInterval(timerInterval);
    let second = 0;
    timerInterval = setInterval(function () {
        timer.innerHTML = (second < 10 ? '0' + second : second);
        second++;
        if (second > 10){
          gameOver()
        }
}, 1000)  
}

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
    newWord = word()
  } else {
    displayMessage('KEEP GUESSING, DUMB-DUMB😭');
  }
};

function gameOver(){
    score = 0
    scoreCounter.textContent = score
}


window.addEventListener('load', function () {
  newWord = word();
  startTimer()
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