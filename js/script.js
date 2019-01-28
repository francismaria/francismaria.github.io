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

function hideGridElements(activeElement){
    let elemsToHide = [];
    
    switch(activeElement){
        case 'about':
            elemsToHide = document.querySelectorAll('#projects-container, #social-container, #contact-container');
            break;
        case 'projects':
            elemsToHide = document.querySelectorAll('#about-container, #social-container, #contact-container');
            break;
        case 'social':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #contact-container');
            break;
        case 'contact':
            elemsToHide = document.querySelectorAll('#about-container, #projects-container, #social-container');
            break;
        default: 
            console.log("Not a valid element to hide.");
            break;
    }
    
    console.log(elemsToHide[0]);
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
                heightCounter += 10;
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

    timer = setInterval(function(){

    });
    
});

document.querySelector('#social-container').addEventListener('click', function(e){
    e.preventDefault();

    timer = setInterval(function(){

    });
    
});

document.querySelector('#contact-container').addEventListener('click', function(e){
    e.preventDefault();

    timer = setInterval(function(){

    });
    
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

