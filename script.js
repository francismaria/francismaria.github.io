
console.log(document.getElementById('general-container'))

document.querySelector('.link').forEach(element => {
    element.addEventListener('click', function(){
        console.log(this.id)
    }) 
});
