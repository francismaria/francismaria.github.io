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

document.querySelectorAll('.slide-down-btn a[href^="#"], #main-board nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        smoothDownScroll(document.querySelector(this.getAttribute("href")).offsetTop, window.pageYOffset);
    })
});

            /* HOBBIES SECTION  */

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

/*
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

    container.style.width = '50%';
    container.style.zIndex = 0;
    container.style.opacity = '1'
}

function increaseContainer(container) {
    document.body.style.backgroundColor = 'black';
    document.body.style.opacity = '0.5'
    document.body.style.zIndex = '0'

    container.style.height = '80%';
    container.style.width = '90%';
    container.style.zIndex = 4;
    container.style.opacity = '1'\
    \\\\\\
    /*
        if(container.style.height === '80%')
            decreaseContainer(container)
        else
            increaseContainer(container)
}
*/
document.querySelectorAll('.show-more-btn').forEach(card => {
    card.addEventListener('click', function(e){
        e.preventDefault();

        let modal = this.parentNode.parentNode.querySelector('.project-modal');
       
        window.onclick = function(e) {
            if (e.target == modal) {
                modal.style.display = "none";
            }
        }
        modal.style.display = 'block'
    })
})


