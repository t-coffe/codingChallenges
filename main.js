const oneToTen = document.querySelector(".oneToTen p");
let UNaDix = " ";
for (let i = 1; i <= 10; i++) {
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

const sumEven = document.querySelector(".sumEven p");
let sommePaire =0;
for (let i = 10; i <= 30; i=i+2) {
  sommePaire = sommePaire + i;
  sumEven.textContent = sommePaire;
}

const celsiusToFahrenheit = document.querySelector(".celVal");
const fahrenheitToCelsius = document.querySelector(".fahrVal");
const pCels = document.querySelector(".content");
let chiffreC ;
let valuC ; 
let chiffreF ;
let valuF ; 
const reset = "";
celsiusToFahrenheit.addEventListener('input', ()=>{
  pCels.textContent = reset;
  valuC = celsiusToFahrenheit.value ;
  chiffreC = valuC*9/5 + 32 ;
  pCels.textContent = chiffreC;
});
fahrenheitToCelsius.addEventListener('input', ()=>{
  pCels.textContent = reset;
  valuF = fahrenheitToCelsius.value ;
  chiffreF = valuF-32 * 5/9 ;
  pCels.textContent = chiffreF;
});

const sumArray = document.querySelector(".sumArray p");
let sommeArray = ["1","2","3"];
for (let i = 1; i < sommeArray; i++) {
  sommeArray = sommeArray + sommeArray[i];
  sumArray.textContent = sommeArray;
}