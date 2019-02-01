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
 * This function hides all the elements that are to be hidden upon a 
 * click on one of the "squares" to be animated.
 * It receives the name of the element that was clicked in order to
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
 * This function shows all the elements that are hidden.
 * It receives the name of the element that was clicked in order to
 * get all the other elements so they can be shown and return to their
 * standard position.
 * @param {string} activeElement 
 */
function showGridElements(activeElement){
    let elemsToShow = [];

    switch(activeElement){
        case 'about-container':
            elemsToShow = document.querySelectorAll('#projects-container, #social-container, #contact-container');
            showElements(elemsToShow);
            break;
        case 'projects-container':
            elemsToShow = document.querySelectorAll('#about-container, #social-container, #contact-container');
            showElements(elemsToShow);
            break;
        case 'social-container':
            elemsToShow = document.querySelectorAll('#about-container, #projects-container, #contact-container');
            showElements(elemsToShow);
            break;
        case 'contact-container':
            elemsToShow = document.querySelectorAll('#about-container, #projects-container, #social-container');
            showElements(elemsToShow);
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
            element.style.top = step + '%';
            break;
        case 'bottom':
            element.style.bottom = step + '%';
            break;
        case 'left':
            element.style.left = step + '%';
            break;
        case 'right':
            element.style.right = step + '%';
            break;
        default:
            console.log("Not a valid direction to move the element");
            break;
    }
}

/**
 * Auxiliary function which returns the horizontal direction
 * on which the element shall be animated (left or right).
 * @param {*} element element to retrieve its horizontal position
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
 * @param {*} element element to retrieve its vertical position
 * in the grid.
 */
function getVerticalMovingDirection(element){
    if(element.className.indexOf('grid-elem-top') !== -1)
        return 'bottom';
    return 'top';
}

/**
 * Parses the name of the container to construct the
 * text content div id, in order to get the element to show.
 * @param {string} name name of the element to parse
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

/**
 * Auxiliary function to toggle a class on an element to
 * be possible to check wether the animation occured or not.
 * @param {*} element element to toggle the class
 * @param {string} classname name of the class to add
 */
function toggleClassName(element, classname){
    element.className += ' ' + classname;
}

/**
 * Auxiliary function to remove a class from an HTML element.
 * @param {*} element element to remove the class
 * @param {*} classname name of the class to be removed
 */
function removeClassName(element, classname){
    element.classList.remove(classname);
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

    let timer = setInterval(function(){
        if(widthCounter >= 100){
            animationRunning = false;
            clearInterval(timer);
        } else {
            widthCounter += 1;
            elements.forEach(function(element){
                moveElement(element, getHorizontalMovingDirection(element), widthCounter);
            });
        }
    }, 5);
}

/**
 * Shows all the elements that need to be shown.
 * This way, this function receives an array with all the elements
 * to show and within the setInterval function updates the position
 * of each of the elements to its original position. 
 * @param {*} elements all the elements to be show
 */
function showElements(elements){
    let widthCounter = 100;
 
    let timer = setInterval(function(){
        if(widthCounter == 0){
            animationRunning = false;
            clearInterval(timer);
        } else {
            widthCounter -= 1;
            elements.forEach(function(element){
                moveElement(element, getHorizontalMovingDirection(element), widthCounter);
            });
        }
    }, 5);
}

/**
 * This function carries the show-content animation.
 * Executes when a square is pressed upon its original position.
 * It receives the element to be animated and continuously updates
 * its position until it reaches the ending point".
 * @param {*} element element clicked to animate
 */
function showAnimation(element){
    let widthCounter = 0, heightCounter = 0;
    let horizontalDirection = getHorizontalMovingDirection(element),
        verticalDirection = getVerticalMovingDirection(element);

    animationRunning = true;

    let timer = setInterval(function(){
        if(widthCounter >= 59.5){           //percentage of the moving
            if(heightCounter < 39){
                heightCounter += 1;
                moveElement(element, verticalDirection, heightCounter);
            } else {
                animationRunning = false;
                clearInterval(timer);
            }
        } else {
            widthCounter += 0.5;
            moveElement(element, horizontalDirection, widthCounter);
        }
    }, 6);

    hideGridElements(element.id);
    showTextContent(element.id);
    toggleClassName(element, 'animated');
}

/**
 * This function carries the hide-content animation.
 * Executes when a square is pressed upon its position when content
 * is being displayed.
 * It receives the element to be animated and continuously updates
 * its position until it reaches the ending point".
 * @param {*} element element clicked to animate
 */
function hideAnimation(element){
    let horizontalDirection = getHorizontalMovingDirection(element),
        verticalDirection = getVerticalMovingDirection(element);    
    let widthCounter = 59.5, heightCounter = 40;
    
    animationRunning = true;

    let timer = setInterval(function(){
        if(widthCounter == 0){
            if(heightCounter > 0){
                heightCounter -= 1;
                moveElement(element, verticalDirection, heightCounter);
            } else {
                animationRunning = false;
                clearInterval(timer);
            }
        } else {
            widthCounter -= 0.5;
            moveElement(element, horizontalDirection, widthCounter);
        }
    }, 6);

    hideTextContent(element.id);
    showGridElements(element.id);
    removeClassName(element, 'animated');
}

/**
 * Listener for each grid element. Executes its animation.
 */
document.querySelectorAll('.grid-elem').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        if(animationRunning) return;

        if(element.className.indexOf('animated') == -1){
            showAnimation(element);
        } else {
            hideAnimation(element);
        }
    })
});

/**
 * Listener for the window resizer.
 */
window.addEventListener("resize", function(){
    console.log("resizing...")
});

/* MODALS */

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

