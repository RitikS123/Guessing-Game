let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random()*100) + 1;

let numGuesses = 0;

btn.addEventListener("click",()=>{
    guessNumber();
});

input.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        guessNumber();
    }
});

function guessNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrng.innerHTML = 'Enter input between 1 and 100';
    }
    else
    {
        numGuesses++;
        guesses.innerHTML = "No. of guesses:" + numGuesses;
        if(input.value > answer){
            wrng.innerHTML = 'Enter no. is too high:';
            input.value = "";
        }
        else if(input.value < answer){
            wrng.innerHTML = 'Enter no. is too low:'
            input.value = "";
        }
        else
        {
            wrng.innerHTML = "Congratulations! You guess the correct answer:"
            btn.disabled = true;
            setTimeout(() => {
                resetgame();
            }, 5000)
        }
    }
}



function resetgame(){
    input.value = "";
    answer = Math.floor(Math.random()*100) + 1;
    numGuesses = 0;
    wrng.innerHTML = "";
    guesses.innerHTML = 'No. of guess:0'
    btn.disabled = false;
}
