var button = document.getElementById("btn");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

button.addEventListener("click", changeBG);
div1.addEventListener("click", showInput);
div2.addEventListener("click", showInput);
div3.addEventListener("click", showInput);

function showInput() {

}

function changeBG() {

}

function hideInput() {
    
}
function getInputValue() {
  var inputValue = document.getElementById("colorInput").value;
  return inputValue;
}