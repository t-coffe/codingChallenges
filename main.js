const oneToTen = document.querySelector(".oneToTen p");
let UNaDix = " ";
for (let i = 0; i <= 10; i++) {
  UNaDix = UNaDix + " " + i;
  oneToTen.textContent = UNaDix;
}

const oddMinusHundred = document.querySelector(".oddMinusHundred p");
let impairCent = " ";
for (let i = 1; i <= 100; i=i+2) {
  impairCent = impairCent + " " + i;
  oddMinusHundred.textContent = impairCent;
}

const tableSept = document.querySelector(".tableSept p");
let gardienSept = " ";
for (let i = 0; i <= 140; i=i+7) {
  gardienSept = gardienSept + " " + i;
  tableSept.textContent = gardienSept;
}

const tablesUNEaDix = document.querySelector(".tablesUNEaDix p");
let garDix = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    garDix = garDix + " " + j*i;
    tablesUNEaDix.textContent = garDix;
  }
}

const sommeUNaDix = document.querySelector(".sommeUNaDix p");
let plusUnAdix = 0;
for (let i = 1; i <= 10; i++) {
  plusUnAdix = plusUnAdix + i;
  sommeUNaDix.textContent = plusUnAdix;
}

const produitUNaDix = document.querySelector(".produitUNaDix p");
let foisUnAdix = 1;
for (let i = 1; i <= 10; i++) {
  foisUnAdix = foisUnAdix * i;
  produitUNaDix.textContent = foisUnAdix;
}

const celsiusToFahrenheit = document.querySelector(".celsiusToFahrenheit p");

const celToFarh = (n)=> {
  
}