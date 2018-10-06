let currentWrapId = "home-wrap";

function fadeOutCurrentWrap(){

	let currentWrap = document.querySelector("#"+currentWrapId);

	currentWrap.style.transition = 'all 0.5s linear';
	currentWrap.style.opacity = "0";
	currentWrap.style.visibility = 'hidden';
}

function fillWrap(wrap){

	wrap.style.transition = 'all 0.5s linear';
	wrap.style.opacity = "1";
	wrap.style.visibility = "visible";
}

function checkClickedWrap(wrapID){

	event.preventDefault();

	if(wrapID === currentWrapId)
		return false;

	return true;
} 

document.querySelector("#about-anchor").addEventListener("click", function(){
	
	if(!checkClickedWrap("about-anchor"))
		return;

	fadeOutCurrentWrap();
	currentWrapId = "about-wrap";
	fillWrap(document.getElementById("about-wrap"));
});

document.querySelector("#projects-anchor").addEventListener("click", function(){

	if(!checkClickedWrap("projects-anchor"))
		return;

	fadeOutCurrentWrap();
	currentWrapId = "projects-wrap";
	fillWrap(document.getElementById("projects-wrap"));
});

document.querySelector("#social-anchor").addEventListener("click", function(){
	
	if(!checkClickedWrap("social-anchor"))
		return;
	
	fadeOutCurrentWrap();
	currentWrapId = "social-wrap";
	fillWrap(document.getElementById("social-wrap"));
});

document.querySelector("#contact-anchor").addEventListener("click", function(){

	if(!checkClickedWrap("contact-anchor"))
		return;

	fadeOutCurrentWrap();
	currentWrapId = "contact-wrap";
	fillWrap(document.getElementById("contact-wrap"));
});