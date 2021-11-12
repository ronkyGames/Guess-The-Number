// Define and initialize the random variables numbers1 and numbers2
let number1 = Math.floor(Math.random()*50)+1
let number2 = Math.floor(Math.random()*50)+1

// Define and initialize the variable guess that stores user input
let guess = parseInt(prompt(`What is the result of ${ number1 } + ${ number2 }`),10)

// Check if the answer is correct and tell the information to the user
if((number1+number2) == guess){
  alert("The answer is correct. You Win!")
}else{
  alert("The answer is wrong. You lose!")
}
