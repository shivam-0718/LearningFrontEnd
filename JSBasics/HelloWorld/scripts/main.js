// const myHeading1 = document.querySelector("h1"); //stores the reference of <h1> in the variable
// myHeading1.textContent = "This is my introduction about life."; // Updating the text content of <h1>

// code for changing the image as per click function
const myImage = document.querySelector("img"); //stores the reference of <img> in the variable

//toggling image based on click event
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src"); // fetching the reference of the attribute from src
  if (mySrc === "images/image.png") {
    myImage.setAttribute("src", "images/image2.png");
  } else {
    myImage.setAttribute("src", "images/image.png");
  }
});

//Setting user name and setting personalized greeting based on prompt
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my portfolio website, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to my portfolio website, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
