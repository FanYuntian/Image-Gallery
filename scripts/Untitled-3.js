// JavaScript Document
function showpic(whichpic){
		var source = whichpic.getAttribute("href");
		var plackholder = document.getElementById("placeholder");
		plackholder.setAttribute("src",source);
		var text = whichpic.getAttribute("title");
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
}
