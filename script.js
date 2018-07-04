var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var i = 0; i < list.length; i++) {
//	var btn = document.createElement("BUTTON");
//	var t = document.createTextNode("Delete");
//	btn.appendChild(t);                             
  //  ul.appendChild(btn); 
//
   list[i].addEventListener("click", function(e){
    e.currentTarget.classList.toggle("done");
   })
 //  list[i].addEventListener("click", function(f){
   // document.getElementById('text').innerHTML = '';
  // })
 }
 for(var i = 0; i < list.length; i++) {
	var btn = document.createElement("BUTTON");
	var t = document.createTextNode("Delete");
	btn.appendChild(t);                             
    ul.appendChild(btn); 
    list[i].addEventListener("click", function(f){
    	var text=li.value;
    document.getElementById('text').innerHTML = '';
   })
}