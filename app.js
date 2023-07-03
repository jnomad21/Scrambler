'use strict';

const words =['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula', 'hippopotomus', 'armadillo', 'aardvark', 'kangaroo', 'hedgehog', 'elephant', 'albatross', 'orangutan', 'rhinoceros', 'chimpanzee']

const scramBtn = document.querySelector('#word-button')
const mixedWord = document.querySelector('#scrambled-word')
const guessWord = document.querySelector('#guess')
const submitBtn =document.querySelector('#submit')
const displayMessage=function(message){
    document.querySelector('.message').textContent = message
}
const word=function(){
    const wor = words[Math.floor(Math.random()*words.length)];
    return wor
}
const newWord=word()

const randWord = function(){
    const mixedWord = Array.from(newWord)
    for (let i=0; i<mixedWord.length; i++){
        let temp = mixedWord[i];
        let r = Math.floor(Math.random()*mixedWord.length);
        mixedWord[i]=mixedWord[r]
        mixedWord[r]=temp
        const scramWord = mixedWord.join("")
        if(scramWord !== newWord)
        return scramWord
    }
}
const submitResponse = function(){
    if(guessWord.value===newWord){
        displayMessage("YOU GOT IT😎")
    }else{
        displayMessage("BETTER LUCK NEXT TIME, DUMB DUMB😭")
    }
}
// event listeners
window.addEventListener('load', function(){
    randWord()
    mixedWord.textContent=randWord() 
})

scramBtn.addEventListener('click', function(){
randWord()
mixedWord.textContent=randWord()
})

submitBtn.addEventListener('click', function(){
    submitResponse()
})

guessWord.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
    submitResponse()
}
})

 
