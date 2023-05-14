// click to change photo
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/washing-maid.png') {
      myImage.setAttribute('src', 'images/dishwasher.jpeg');
    } else {
      myImage.setAttribute('src', 'images/washing-maid.png');
    }
};

// click button to change user while storage and welcome sentense
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('please input your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = "Make washing cool! " + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Make washing cool! " + storedName;
}

myButton.onclick = function() {
    setUserName();
};