var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var ourButton = document.getElementById("our-button");
var ourList = document.getElementById("our-list");
var newItemCounter = 1;

// listening to clicks in any <li>
ourList.addEventListener("click", activateItem);

// when item <li> clicked, item <li> will replace the current h1
function activateItem(e) {
	if(e.target.nodeName == "LI"){
		ourHeadline.innerHTML = e.target.innerHTML;
		// remove and add the class "active" for the css style effect when <li> clicked
		for (i = 0; i < e.target.parentNode.children.length; i++) {
			e.target.parentNode.children[i].classList.remove("active");
		}
		e.target.classList.add("active");
	}
}

// eventListener click on the button
ourButton.addEventListener("click", createNewItem);

//add new item <li> to the list <ul> and print the text writen here, (+= adds)
function createNewItem () {
	ourList.innerHTML += "<li>Make Lemonade!! " + newItemCounter + "</li>";
	newItemCounter++;
}

