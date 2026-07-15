let slider = document.getElementById("slider");
let passlength = document.getElementById("PassLength");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbol = document.getElementById("Symbol");
let Btn = document.getElementById("Btn");
let passbox = document.getElementById("passbox");
let ALLUPPERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM";
let ALLLowerCase = "qwertyuiopasdfghjklzxcvbnm";
let ALLNumber = "0123456789";
let ALLsymbol = "!@#$%^&*()_+~`=|";

passlength.textContent = slider.value;
slider.addEventListener("input", () => {
  passlength.textContent = slider.value;
});

Btn.addEventListener("click", (e) => {
  passbox.value = generate();
});

function generate() {
  let genpass = "";
  let allchar = "";

  allchar += lowercase.checked ? ALLLowerCase : "";
  allchar += uppercase.checked ? ALLUPPERCASE : "";
  allchar += number.checked ? ALLNumber : "";
  allchar += symbol.checked ? ALLsymbol : "";

  let i = 1;
  while (i <= slider.value) {
    genpass += allchar.charAt(Math.floor(Math.random() * allchar.length));
    i++;
  }
  return genpass;
}
let copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  if (passbox.value != "" || passbox.value.length >= 1) {
    copy.title = "Copy Password ";
    navigator.clipboard.writeText(passbox.value);
    copy.textContent = "check";
  }
  setTimeout(() => {
    copy.title = "Password copied";
    copy.innerText = "content_copy";
  }, 3000);
});
