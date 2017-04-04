console.log("hello");

var userInput = document.getElementById("text-area");
var button = document.getElementById("btn");
var output = document.getElementById("cardOutput");
var btnDelete = document.getElementsByClassName("delete");

// function createCard(){
//   var newCard = "";
//   newCard += `<div class="card"> ${userInput} </div>`;
//   console.log(newCard);
//   output.innerHTML += newCard;
// }

function cardOutput(){
  var newCard = "";
  newCard +=`<div class="card">`;
  newCard +=`${userInput.value}<br />`;
  newCard +=`<button class="delete">Delete</button>`;
  newCard +=`</div>`;
  console.log("test");
  output.innerHTML += newCard;
}

function removeCard(){
  if(event.target.className === "delete"){
    event.target.parentElement.remove();
  }
  console.log("test");
}

button.addEventListener("click", cardOutput);
document.body.addEventListener("click", removeCard);
