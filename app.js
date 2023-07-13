let oldWords = new Set(['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula', 'hippopotomus', 
'armadillo', 'aardvark', 'kangaroo', 'hedgehog', 'elephant', 'albatross', 'orangutan', 'rhinoceros', 'chimpanzee',
'platypus', 'ostrich', 'barracuda', 'salamander', 'anteater', ]);
let words = [...new Set(oldWords)]

const scramBtn = document.querySelector('#word-button');
const mixedWord = document.querySelector('#scrambled-word');
const guessWord = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const scoreCounter = document.querySelector('#score')
const timer = document.getElementById('timer');
const overMessage = document.querySelector(".game-over")
const resetBtn = document.querySelector('#reset-btn')

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let timerInterval;

startTimer = () => {
    clearInterval(timerInterval);
    let second = 30;
    timerInterval = setInterval(function () {
        timer.innerHTML = (second < 10 ? '0' + second : second);
        second--;
        if (second === 0){
          gameOver()
          clearInterval(timerInterval);
          second = 30
        }
        if (second <10){
          timer.style.color='red'
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
    second = 30
    scoreCounter.textContent = score
    overMessage.style.display ="block"
}

function reset(){
  overMessage.style.display ="none";
  startTimer()

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

resetBtn.addEventListener('click', function () {
  reset()
})