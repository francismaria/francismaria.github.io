/**
 * Smoothly scrolls down a page until a certain height
 * given an initial height.
 * @param {*} elemHeight the ending height
 * @param {*} actualHeight the staring height
 */
function smoothDownScroll(elemHeight, actualHeight){
    let currentHeight = actualHeight, timer;
    elemHeight -= 20;
    
    timer = setInterval(function(){
        if(currentHeight >= elemHeight){
            clearInterval(timer);
        } else {
            currentHeight += 4;
            window.scrollTo(0, currentHeight);
        }
    }, 2);
}

/**
 * Grid element animation.
 * Smoothly transitions the element to disappear of the
 * screen (to go out of bounds) in a certain direction
 * (left or right).
 * @param {*} element element to be hidden
 * @param {*} direction direction where the element will be animated (hidden)
 */
function hideSingleGridElement(element, direction){
    let widthCounter = 0;
    let maxWidth = element.parentElement.offsetWidth;

    timer = setInterval(function(){
        if(widthCounter >= maxWidth){
            clearInterval(timer);
        } else {
            widthCounter += 10;
            if(direction === 'left'){
                element.style.right = widthCounter + 'px';
            }
            else
                element.style.left = widthCounter + 'px';
        }
    }, 5);
}

/**
 *  This function hides all the elements that are to be hidden upon a 
 * click on one of the "squares" to be animated.
 *  It receives the name of the element that was clicked in order to
 * get all the other elements so they can be hidden.
 * @param {string} activeElement 
 */
function hideGridElements(activeElement){
    let elemsToHide = [];
    
    switch(activeElement){
        case 'about':
            elemsToHide = document.querySelectorAll('#projects-container, #social-container, #contact-container');
            hideSingleGridElement(elemsToHide[0], 'right'); hideSingleGridElement(elemsToHide[1], 'left'); hideSingleGridElement(elemsToHide[2], 'right');
            break;
        case 'projects':
            elemsToHide = document.querySelectorAll('#about-container, #social-container, #contact-container');
            hideSingleGridElement(elemsToHide[0], 'left'); hideSingleGridElement(elemsToHide[1], 'left'); hideSingleGridElement(elemsToHide[2], 'right');
            break;
        case 'social':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #contact-container');
            hideSingleGridElement(elemsToHide[0], 'left'); hideSingleGridElement(elemsToHide[1], 'right'); hideSingleGridElement(elemsToHide[2], 'right');
            break;
        case 'contact':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #social-container');
            hideSingleGridElement(elemsToHide[0], 'left'); hideSingleGridElement(elemsToHide[1], 'right'); hideSingleGridElement(elemsToHide[2], 'left');
            break;
        default: 
            console.log("Not a valid element to hide.");
            break;
    }
}

document.querySelector('#about-container').addEventListener('click', function(e){
    e.preventDefault();
    let elem = document.querySelector('#about-container');
    let widthCounter = 0, heightCounter = 0, marginStyle = 50;
    let maxWidth = elem.parentElement.offsetWidth - (elem.offsetWidth + marginStyle);
    let maxHeight = elem.parentElement.offsetHeight - elem.offsetHeight;
    
    timer = setInterval(function(){
        if(widthCounter >= maxWidth){
            if(heightCounter < maxHeight){
                heightCounter += 5;
                elem.style.bottom = heightCounter + 'px';
            } else
                clearInterval(timer);
        } else {
            widthCounter += 10;
            elem.style.right = widthCounter + 'px';
        }
    }, 5);

    hideGridElements("about");
});

document.querySelector('#projects-container').addEventListener('click', function(e){
    e.preventDefault();
    e.preventDefault();
    let elem = document.querySelector('#about-container');
    let widthCounter = 0, heightCounter = 0, marginStyle = 50;
    let maxWidth = elem.parentElement.offsetWidth - (elem.offsetWidth + marginStyle);
    let maxHeight = elem.parentElement.offsetHeight - elem.offsetHeight;
    
    timer = setInterval(function(){

    }, 5);

    hideGridElements("projects");
});

document.querySelector('#social-container').addEventListener('click', function(e){
    e.preventDefault();
    e.preventDefault();
    let elem = document.querySelector('#about-container');
    let widthCounter = 0, heightCounter = 0, marginStyle = 50;
    let maxWidth = elem.parentElement.offsetWidth - (elem.offsetWidth + marginStyle);
    let maxHeight = elem.parentElement.offsetHeight - elem.offsetHeight;
    
    timer = setInterval(function(){

    }, 5);

    hideGridElements("social");
});

document.querySelector('#contact-container').addEventListener('click', function(e){
    e.preventDefault();

    timer = setInterval(function(){

    }, 5);

    hideGridElements("contact");
});


/*
document.querySelectorAll('.slide-down-btn a[href^="#"], #main-board nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothDownScroll(document.querySelector(this.getAttribute("href")).offsetTop, window.pageYOffset);
    })
});

            /* HOBBIES SECTION  

// MOUSE OVER

document.querySelectorAll('.hobbie-card.left-card').forEach(card => {
    card.addEventListener('mouseover', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-left');
        slider.style.marginLeft = '50%';
    })
})

document.querySelectorAll('.hobbie-card.right-card').forEach(card => {
    card.addEventListener('mouseover', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-right');
        slider.style.marginRight = '50%';
    })
})

// MOUSE LEAVE 

document.querySelectorAll('.hobbie-card.left-card').forEach(card => {
    card.addEventListener('mouseleave', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-left');
        slider.style.marginLeft = '12%';
    })
})

document.querySelectorAll('.hobbie-card.right-card').forEach(card => {
    card.addEventListener('mouseleave', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-right');
        slider.style.marginRight = '12%';
    })
})


//sliders-buttons

document.querySelectorAll('.slide-btn-container.left-img-slider').forEach(slider => {
    slider.addEventListener('click', function(e){
        e.preventDefault();
        let slideContainer = this.parentNode;
        //console.log(window.getComputedStyle(slideContainer).getPropertyValue('margin-left'));
        slideContainer.style.marginLeft = '33em';
    })
})

document.querySelectorAll('.slide-btn-container.right-img-slider').forEach(slider => {
    slider.addEventListener('click', function(e){
        e.preventDefault();
        let slideContainer = this.parentNode;
        slideContainer.style.marginRight = '33em';
    })
})
*/

        /* PROJECTS SECTION */
/*
function decreaseContainer(container) {
    document.body.style.backgroundColor = 'transparent';
    document.body.style.opacity = '1'
    document.body.style.zIndex = '0'

    container.parentNode.style.height = '50%';

    container.style.width = '50%';
    container.style.zIndex = 0;
    container.style.opacity = '1'
}

function increaseContainer(container) {
    /*document.body.style.backgroundColor = 'black';
    document.body.style.opacity = '0.5'
    document.body.style.zIndex = '0'

    container.style.height = '80%';
    container.style.width = '90%';
    container.style.zIndex = 4;
    container.style.opacity = '1'
}

document.querySelectorAll('.show-more-btn').forEach(card => {
    card.addEventListener('click', function(e){
        e.preventDefault();
    
    let container = this.parentNode;
    
    if(container.style.height === '80%')
        decreaseContainer(container)
    else
        increaseContainer(container)
    })
})*/


function showModal(modal) {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.transition = 'visibility 0.4s linear 0s, opacity 0.25s 0s, transform 0.25s'
}

function hideModal(modal) {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
}

document.querySelectorAll('.show-more-btn').forEach(card => {
    card.addEventListener('click', function(e){
        e.preventDefault();

        let modal = this.parentNode.parentNode.querySelector('.project-modal');
       
        window.onclick = function(e) {
            if (e.target == modal) {
                hideModal(modal)
            }
        }

        if(modal.style.visibility == 'visible')
            hideModal(modal)
        else
            showModal(modal)
    })
})

document.querySelectorAll('.exit-modal-btn').forEach(exitBtn => {
    exitBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log('clicked okok')
        hideModal(this.parentNode);
    })
})

