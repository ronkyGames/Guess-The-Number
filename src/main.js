// Define and initialize the random variables numbers1 and numbers2
let number1 = Math.floor(Math.random()*50)+1
let number2 = Math.floor(Math.random()*50)+1

let board = document.getElementById("board")

// clear the inner html of the board
board.innerHTML = ""
// Define and initialize the variable guess that stores user input
let guess = 0

// main program

  // Add the question to the board
  let h2 = document.createElement("h2")
  h2.innerHTML = `Write the result of <br/>${number1} + ${number2}`
  h2.setAttribute("class", "guess-the-number-h1")
  board.append(h2)

  let p = document.createElement("p")
  p.innerHTML = `Answer: <span id="guess"></span>`
  p.setAttribute("class", "guess-the-number-p")
  board.append(p)

  let table = document.createElement("table")

  table.innerHTML = `
  <tr>
    <td colspan="3" id="key0" tabindex="0">0</td>
  </tr>
  <tr>
    <td id='key1' tabindex="0">1</td>
    <td id='key2' tabindex="0">2</td>
    <td id='key3' tabindex="0">3</td>
  </tr>
  <tr>
    <td id='key4' tabindex="0">4</td>
    <td id='key5' tabindex="0">5</td>
    <td id='key6' tabindex="0">6</td>
  </tr>
  <tr>
    <td id='key7' tabindex="0">7</td>
    <td id='key8' tabindex="0">8</td>
    <td id='key9' tabindex="0">9</td>
  </tr>
  <tr>
    <td colspan="3" id="submit" tabindex="0">Submit</td>
  </tr>
  `
  board.append(table)

  let key0 = document.getElementById("key0")
  key0.addEventListener("click",writeGuess,false)
  let key1 = document.getElementById("key1")
  key1.addEventListener("click",writeGuess,false)
  let key2 = document.getElementById("key2")
  key2.addEventListener("click",writeGuess,false)
  let key3 = document.getElementById("key3")
  key3.addEventListener("click",writeGuess,false)
  let key4 = document.getElementById("key4")
  key4.addEventListener("click",writeGuess,false)
  let key5 = document.getElementById("key5")
  key5.addEventListener("click",writeGuess,false)
  let key6 = document.getElementById("key6")
  key6.addEventListener("click",writeGuess,false)
  let key7 = document.getElementById("key7")
  key7.addEventListener("click",writeGuess,false)
  let key8 = document.getElementById("key8")
  key8.addEventListener("click",writeGuess,false)
  let key9 = document.getElementById("key9")
  key9.addEventListener("click",writeGuess,false)
  let submit = document.getElementById("submit")
  submit.addEventListener("click",(event)=>{
    let answer = document.getElementById("guess")
    guess = parseInt(answer.innerHTML,10)
    answer.innerHTML = ""
    //clear the content of the board to show the result
    board.innerHTML = ""
    let h2 = document.createElement("h2")
    h2.setAttribute("class", "guess-the-number-h1")
    if((number1+number2) == guess){
       h2.innerHTML = `The answer is correct. You Win!`
    }else{
       h2.innerHTML = `The answer is wrong. You lose!`
    }
    board.append(h2)
  },false)





// Functions

// Events
// key events
function writeGuess(event){
  let answer = document.getElementById("guess")
  answer.innerHTML+= event.target.innerHTML
}
