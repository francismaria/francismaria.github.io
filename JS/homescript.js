let currentWrapId = "home-wrap";

function fadeOutCurrentWrap(){

	let currentWrap = document.querySelector("#"+currentWrapId);

	currentWrap.style.opacity = "0";
	currentWrap.style.visibility = 'hidden';
}

function fillWrap(wrap){

	wrap.style.opacity = "1";
	wrap.style.visibility = "visible";
}

function checkClickedWrap(wrapID){

	event.preventDefault();

	if(wrapID === currentWrapId)
		return false;

	return true;
} 

function increaseAnchorFont(id){

	if(currentWrapId !== "home-wrap"){
		let anchorToDecrease = currentWrapId.split("-")[0];
		document.getElementById(anchorToDecrease+"-anchor").style.fontSize = "initial";
	}
	document.getElementById(id).style.fontSize = "1.5em";
}

document.querySelector("#about-anchor").addEventListener("click", function(){
	
	if(!checkClickedWrap("about-anchor"))
		return;

	increaseAnchorFont("about-anchor");
	fadeOutCurrentWrap();
	currentWrapId = "about-wrap";
	fillWrap(document.getElementById("about-wrap"));
});

document.querySelector("#projects-anchor").addEventListener("click", function(){

	if(!checkClickedWrap("projects-anchor"))
		return;

	increaseAnchorFont("projects-anchor");
	fadeOutCurrentWrap();
	currentWrapId = "projects-wrap";
	fillWrap(document.getElementById("projects-wrap"));
});

document.querySelector("#social-anchor").addEventListener("click", function(){
	
	if(!checkClickedWrap("social-anchor"))
		return;
	
	increaseAnchorFont("social-anchor");
	fadeOutCurrentWrap();
	currentWrapId = "social-wrap";
	fillWrap(document.getElementById("social-wrap"));
});

document.querySelector("#contact-anchor").addEventListener("click", function(){

	if(!checkClickedWrap("contact-anchor"))
		return;

	increaseAnchorFont("contact-anchor");
	fadeOutCurrentWrap();
	currentWrapId = "contact-wrap";
	fillWrap(document.getElementById("contact-wrap"));
});

document.querySelector(".projects-choice-wrap:first-child").addEventListener("click", function(){
	console.log("current projects");
});

document.querySelector(".projects-choice-wrap:last-child").addEventListener("click", function(){
	console.log("past projects");
});

