let currentWrapId = "home-wrap";

function showClickedWrap(clickedWrapId){
    event.preventDefault();

    let aboutWrap = document.getElementById(clickedWrapId);
    let currentWrap = document.getElementById(currentWrapId);

    currentWrap.style.display = "none";
    aboutWrap.style.display = "block";

    currentWrapId = clickedWrapId;
}