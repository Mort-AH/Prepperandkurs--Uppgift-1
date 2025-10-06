let vip = true;
let age = 17;

const ageInput = document.getElementById("age");
const vipCheckbox = document.getElementById("vip");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function () {
  const age = Number(ageInput.value); 
  const isVIP = vipCheckbox.checked; 

  if (isVIP) {
    alert("Welcome in my best VIP customer :)");
  } else if (age >= 18) {
    alert("Access Granted");
  } else {
    alert("Access Denied");
  }
});
