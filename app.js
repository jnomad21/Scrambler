'use strict';

const words =['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula']
const randWord = words[Math.floor(Math.random()*words.length)]
const newWord = Array.from(randWord)
const scramBtn = document.querySelector('#word-button')
const mixedWord = document.querySelector('#scrambled-word')
const guessWord = document.querySelector('#guess')
const submitBtn =document.querySelector('#submit')
const message =document.querySelector('#message')

const shuffle = function(){
    for (let i=0; i<newWord.length; i++){
        let temp = newWord[i];
        let r = Math.floor(Math.random()*newWord.length);
        newWord[i]=newWord[r]
        newWord[r]=temp
        const scramWord = newWord.join("")
        return scramWord
    }
}

    
scramBtn.addEventListener('click', function(){
shuffle
mixedWord.textContent=shuffle()
})

submitBtn.addEventListener('click', function(){
    if(guessWord.value===randWord){
        message.classList.remove('you-win')
    }
})


 
