var button = document.getElementById("btn");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var input = document.getElementById("inputBox")
var change = ""

button.addEventListener("click", changeBG);
div1.addEventListener("click", divOne);
div2.addEventListener("click", divTwo);
div3.addEventListener("click", divThree);

function divOne() {
  showInput(div1)
}
function divTwo() {
  showInput(div2)
}
function divThree() {
  showInput(div3)
}


function showInput(id) {
  id.style.border = "2px solid red"
  input.style.visibility = "visible"
  change = id
}

function changeBG() {
  var inputV = getInputValue()
  change.style.backgroundColor = inputV
  change.style.border = "none"
  input.style.visibility = "hidden"
}

function getInputValue() {
  var inputValue = document.getElementById("colorInput").value;
  return inputValue;
}