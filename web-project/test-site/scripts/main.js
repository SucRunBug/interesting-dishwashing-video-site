let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/washing-maid.png') {
      myImage.setAttribute('src', 'images/dishwasher.jpeg');
    } else {
      myImage.setAttribute('src', 'images/washing-maid.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('please input your name.');
    localStorage.getItem('name', myName);
    myHeading.textContent = "Make washing cool! " + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Make washing cool! " + storedName;
}

myButton.onclick = function() {
    setUserName();
}