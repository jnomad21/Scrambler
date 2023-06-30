'use strict';

const words =['crocodile', 'alligator', 'giraffe', 'octopus', 'tarantula', 'hippopotomus', 'armadillo', 'aardvark', 'kangaroo']

const scramBtn = document.querySelector('#word-button')
const mixedWord = document.querySelector('#scrambled-word')
const guessWord = document.querySelector('#guess')
const submitBtn =document.querySelector('#submit')
const displayMessage=function(message){
    document.querySelector('.message').textContent = message

}
const randWord = function(){
    const word=words[Math.floor(Math.random()*words.length)];
    const mixedWord = Array.from(word)
    for (let i=0; i<mixedWord.length; i++){
        let temp = mixedWord[i];
        let r = Math.floor(Math.random()*mixedWord.length);
        mixedWord[i]=mixedWord[r]
        mixedWord[r]=temp
        const scramWord = mixedWord.join("")
        return scramWord
    }
}

    
scramBtn.addEventListener('click', function(){
randWord()
mixedWord.textContent=randWord()
})

submitBtn.addEventListener('click', function(){
    if(guessWord.value===randWord){
        displayMessage("YOU GOT IT😎")
    }else{
        displayMessage("BETTER LUCK NEXT TIME, DUMB DUMB😭")
    }
})


 
