let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/image.jpg") {
        myImage.setAttribute("src", "images/image2.jpg");
    } else {
        myImage.setAttribute("src", "images/image.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => { setUserName(); };

const NAMEKey = "name";

function formatMsg(myName) {
    return "Mozilla 酷毙了" + (myName ? (" " + myName) : "");
}

function setUserName() {
    let myName = prompt("请输入你的名字", "");
    if (myName) {
        localStorage.setItem(NAMEKey, myName);
    }
    myHeading.textContent = formatMsg(myName);
}

let storedName = localStorage.getItem(NAMEKey);
if (!storedName || storedName === "null" || storedName.length == 0) {
    setUserName();
} else {
    let storedName = localStorage.getItem(NAMEKey);
    myHeading.textContent = formatMsg(storedName);
}