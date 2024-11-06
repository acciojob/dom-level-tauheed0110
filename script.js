

document.addEventListener('DOMContentLoaded', ()=>{
    const targetElement = document.getElementById('level');

    let currentElement = targetElement;
    let level = 0;

    while(currentElement){
        level++;
        currentElement = currentElement.parentElement;
    }
    alert(`The level of the element is: ${level}`);
});