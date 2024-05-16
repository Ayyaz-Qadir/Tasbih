// working of 'textContent' and 'innerHTML' is same
let decreasebtn = document.getElementById("decreasebtn");
let resetbtn = document.getElementById("resetbtn");
let increasebtn = document.getElementById("increasebtn");
let img = document.getElementById("tasbih");
let enterLength = document.getElementById("enterLength");
let submit = document.getElementById("submit");
let lengthValue = document.getElementById("lengthValue");

let counter = 0;
let tasbihLength = 100;
let isChanging = false; // Variable to track if the counter is currently changing
lengthValue.innerHTML = tasbihLength;

submit.onclick = ()=>{
  tasbihLength = enterLength.value;

  if (tasbihLength === "") {
    tasbihLength = 100; // ya 100 value set kar dy ga variable ma
  }

  tasbihLength = Number(tasbihLength);
  counter = 0;
  document.getElementById("lableText").textContent = counter;
  lengthValue.innerHTML = tasbihLength;
  // Clear the text field
  enterLength.value = "";
}

function backgroundTasbih() {
  var src = img.src;
  img.src = "";
  setTimeout(function () {
    img.src = src;
  }, 200);
}

increasebtn.onclick = () => {
  if (!isChanging) {
    // Check if the counter is currently changing
    isChanging = true; // Set to true to prevent further clicks until change is complete
    setTimeout(() => {
      
      if (counter < tasbihLength) {
        counter++;
        backgroundTasbih();
        if(counter === tasbihLength){
          counter = tasbihLength;
        }
      }  

      document.getElementById("lableText").textContent = counter; //here innerHTML is uesed
      isChanging = false; // Set back to false to allow further clicks
    }, 200); 
  }
};

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
    }, 200);
  }
};

resetbtn.onclick = () => {
  if (!isChanging) {
    isChanging = true;
    setTimeout(() => {
      counter = 0;
      document.getElementById("lableText").textContent = counter; // here textContent is used
      isChanging = false;
    }, 200);
  }
};
