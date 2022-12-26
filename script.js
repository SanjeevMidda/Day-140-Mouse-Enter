let left = document.querySelector('.left');
let right = document.querySelector('.right');

left.addEventListener('mouseenter', addCircle);
right.addEventListener('mouseenter', addCircle);

let body = document.querySelector('body');

function addCircle(e) {
    if (this.classList == "left") {

        let newElement = document.createElement("h1");
        newElement.classList.add('circle');
        left.appendChild(newElement);


    } else if (this.classList == "right") {
        let newElement = document.createElement("h1");
        newElement.classList.add('circle');
        right.appendChild(newElement);
    }
}