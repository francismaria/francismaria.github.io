/*-------------------------------------------------------------------
                    SMARTPHONE SCREEN SCRIPT
--------------------------------------------------------------------*/
if(document.documentElement.clientWidth < 901){     
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
     * Click listener for the down-arrow image.
     * Upon its click it smoothly transitions to the interaction board element.
     */
    document.querySelector('.down-arrow-wrap').addEventListener('click', function(e){
        e.preventDefault();
        smoothDownScroll(document.querySelector('#interaction-board').clientHeight, window.pageYOffset);
    });
}
