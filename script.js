// working of 'textContent' and 'innerHTML' is same
let decreasebtn = document.getElementById("decreasebtn");
let resetbtn = document.getElementById("resetbtn");
let increasebtn = document.getElementById("increasebtn");
let img = document.getElementById("tasbih");


let counter = 0;
let isChanging = false; // Variable to track if the counter is currently changing

increasebtn.onclick = () => {
  if (!isChanging) {
    // Check if the counter is currently changing
    isChanging = true; // Set to true to prevent further clicks until change is complete
    backgroundTasbih();
    setTimeout(() => {
      counter++;
      
      if (counter === 100) {
        counter = 0; // Reset the counter if it reaches 100
      }  

      document.getElementById("lableText").textContent = counter; //here innerHTML is uesed
      isChanging = false; // Set back to false to allow further clicks
    }, 400); 
  }
};

function backgroundTasbih(){
  var src = img.src;
  img.src = "";
  setTimeout(function () {
    img.src = src;
  }, 0);
}

decreasebtn.onclick = () => {
  if (!isChanging) {
    isChanging = true;
    setTimeout(() => {
      counter--;
      if (counter < 0) {
        counter = 0; // Ensure the counter doesn't go below 0
      }
      document.getElementById("lableText").innerHTML = counter;  //here innerHTML is used
      isChanging = false;
    }, 400);
  }
};

resetbtn.onclick = () => {
  if (!isChanging) {
    isChanging = true;
    setTimeout(() => {
      counter = 0;
      document.getElementById("lableText").textContent = counter; // here textContent is used
      isChanging = false;
    }, 400);
  }
};


