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

// MOUSE OVER

document.querySelectorAll('.hobbie-card.left-card').forEach(card => {
    card.addEventListener('mouseover', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-left');
        slider.style.marginLeft = '33em';
    })
})

document.querySelectorAll('.hobbie-card.right-card').forEach(card => {
    card.addEventListener('mouseover', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-right');
        slider.style.marginRight = '33em';
    })
})

// MOUSE LEAVE 

document.querySelectorAll('.hobbie-card.left-card').forEach(card => {
    card.addEventListener('mouseleave', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-left');
        slider.style.marginLeft = '8em';
    })
})

document.querySelectorAll('.hobbie-card.right-card').forEach(card => {
    card.addEventListener('mouseleave', function(e){
        e.preventDefault();
        let slider = this.parentNode.querySelector('.hobbie-card.hobbie-slider-right');
        slider.style.marginRight = '8em';
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

