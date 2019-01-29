let animationRunning = false;

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
 * Hides all the elements that need to be hidden.
 * As JavaScript is a single-threaded language the _setInterval 
 * has a sequential behaviour causing delays and an asynchronous
 * effect between animations.
 * This way, this function receives an array with all the elements
 * to hide and within the setInterval function updates the position
 * of each of the elements. 
 * @param {*} elements all the elements to be hidden
 */
function hideElements(elements){
    let widthCounter = 0;
    let maxWidth = elements[0].parentElement.offsetWidth;

    timer = setInterval(function(){
        if(widthCounter >= maxWidth){
            animationRunning = false;
            clearInterval(timer);
        } else {
            widthCounter += 10;
            elements.forEach(function(element){
                //checks if the class name contains the element position
                if(element.className.indexOf('grid-elem-left') !== -1){       
                    element.style.right = widthCounter + 'px';
                } else {
                    element.style.left = widthCounter + 'px';
                }
            });
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
        case 'about-container':
            elemsToHide = document.querySelectorAll('#projects-container, #social-container, #contact-container');
            hideElements(elemsToHide);
            break;
        case 'projects-container':
            elemsToHide = document.querySelectorAll('#about-container, #social-container, #contact-container');
            hideElements(elemsToHide);
            break;
        case 'social-container':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #contact-container');
            hideElements(elemsToHide);
            break;
        case 'contact-container':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #social-container');
            hideElements(elemsToHide);
            break;
        default: 
            console.log("Not a valid element to hide.");
            break;
    }
}

/**
 * Changes the style (the positioning property) of the element.
 * @param {*} element the element to be moved
 * @param {*} direction the direction which it will move
 * @param {*} step how much will it move
 */
function moveElement(element, direction, step){
    switch(direction){
        case 'top':
            element.style.top = step + 'px';
            break;
        case 'bottom':
            element.style.bottom = step + 'px';
            break;
        case 'left':
            element.style.left = step + 'px';
            break;
        case 'right':
            element.style.right = step + 'px';
            break;
        default:
            console.log("Not a valid direction to move the element");
            break;
    }
}

/**
 * Auxiliary function which returns the horizontal direction
 * on which the element shall be animated (left or right).
 * @param {*} element element to check its horizontal position
 * in the grid.
 */
function getHorizontalMovingDirection(element){
    if(element.className.indexOf('grid-elem-left') !== -1)
        return 'right';
    return 'left';
}

/**
 * Auxiliary function which returns the vertical direction
 * on which the element shall be animated (top or bottom).
 * @param {*} element element to check its vertical position
 * in the grid.
 */
function getVerticalMovingDirection(element){
    if(element.className.indexOf('grid-elem-top') !== -1)
        return 'bottom';
    return 'top';
}

/**
 * Parses the name of the container to get the content div id.
 * @param {string} name 
 */
function parseContainerName(name){
    return name.split('-')[0] + '-content';
}

/**
 * Shows the text of the highlighted "square" section.
 * @param {string} containerName 
 */
function showTextContent(containerName){
    let element = document.getElementById(parseContainerName(containerName));

    element.style.visibility = 'visible';
    element.style.opacity = '1';
}

/**
 * Hides the text of the highlighted "square" section.
 * @param {container} containerName 
 */
function hideTextContent(containerName){
    let element = document.getElementById(parseContainerName(containerName));

    element.style.visibility = 'hidden';
    element.style.opacity = '0';
}

document.querySelectorAll('.grid-elem').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if(animationRunning) return;
        
        let widthCounter = 0, heightCounter = 0, marginStyle = 50;
        let maxWidth = element.parentElement.offsetWidth - (element.offsetWidth + marginStyle);
        let maxHeight = element.parentElement.offsetHeight - (element.offsetHeight + marginStyle);
        let horizontalDirection = getHorizontalMovingDirection(this),
            verticalDirection = getVerticalMovingDirection(this);

        animationRunning = true;
        
        // on each time step moves the element
        timer = setInterval(function(){
            if(widthCounter >= maxWidth){
                if(heightCounter < maxHeight){
                    heightCounter += 5;
                    moveElement(element, verticalDirection, heightCounter);
                } else {
                    animationRunning = false;
                    clearInterval(timer);
                }
            } else {
                widthCounter += 10;
                moveElement(element, horizontalDirection, widthCounter);
            }
        }, 10);
        
        hideGridElements(this.id);
        showTextContent(this.id);
    })
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
        hideModal(this.parentNode);
    })
})

