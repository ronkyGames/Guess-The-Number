// Get the board from the html page
const board = document.getElementById("board")
  // Clean the html  content children of board
  board.innerHTML = ""

// Define and initialize the html code to use in this board
const answer = `<form name = "guess" type="post">
                  <input id="guess" type="number" min="1"/>
                  <button id="submit" type="submit">Answer</button>
                </form>`

const resultCorrect = `<h2>
                          The answer is correct!<br/>
                          You Win.
                      </h2>`

const resultWrong = `<h2>
                          The answer is wrong!<br/>
                          You Lose.
                      </h2>`

// Define and initialize the random variables numbers1 and numbers2
let number1 = Math.floor(Math.random()*50)+1
let number2 = Math.floor(Math.random()*50)+1

// Define and initialize the variable guess that stores user input
let guess // = parseInt(prompt(`What is the result of ${ number1 } + ${ number2 }`),10)

// Check if the answer is correct and tell the information to the user
if((number1+number2) == guess){
  board.innerHTML = resultCorrect
}else{
  board.innerHTML = resultWrong
}
