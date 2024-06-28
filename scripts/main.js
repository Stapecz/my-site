var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute();
    if (mySrc === "images/main.jpeg") {
        myImage.setAttribute("src", "images/polka.jpeg");
    } else{
        myImage.setAttribute("src", "images/main.jpeg");
    }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("#klname")
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName + ",");
    myHeading.textContent = myName + ",";
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = storedName;
}
myButton.onclick = function () {
    setUserName();
}
