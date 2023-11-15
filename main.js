const oneToTen = document.querySelector(".oneToTen p");
let unADix = " ";
for (let i = 0; i <= 10; i++) {
  unADix = unADix + " " + i;
  oneToTen.textContent = unADix;
}

const oddMinusHundred = document.querySelector(".oddMinusHundred p");
let impairCent = " ";
for (let i = 0; i <= 100; i=i+2) {
  impairCent = impairCent + " " + i;
  oddMinusHundred.textContent = impairCent;
}

const tableSept = document.querySelector(".tableSept p");
let gardienSept = " ";
for (let i = 0; i <= 140; i=i+7) {
  gardienSept = gardienSept + " " + i;
  tableSept.textContent = gardienSept;
}