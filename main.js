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
let sommeArray = [1,2,3];
let arraysult = sommeArray[0];
for (let i = 1; i < sommeArray.length; i++) {
  arraysult += sommeArray[i];
}
sumArray.textContent = arraysult;

const moyenne = document.querySelector(".moyenne p");
let tabM = [1,2,3];
let arraM = tabM[0];
for (let i = 1; i < tabM.length; i++) {
  arraM += tabM[i];
}
moyenne.textContent = arraM/tabM.length;

const positive = document.querySelector(".positive p");
let pos = [1,2,-4,3,4];
let arraP = [];
for (let i = 0; i < pos.length; i++) {
  if (pos[i] > 0) {
    arraP.push(pos[i]);
  }
} positive.textContent = arraP;

const max = document.querySelector(".max p");
let tab = [7,5,8,2];
let Pgrand = tab[0];
for (let i = 1; i < tab.length; i++) {
  if (tab[i] > Pgrand) {
    Pgrand = tab[i];
  }
} max.textContent = Pgrand;

const fibonacciDix = document.querySelector(".fibonacciDix p");
let stockagefibonacciDix = 0;
let avantDernierfibonacciDix = 0;
let DernierfibonacciDix = 1;
let ArrayStockageFibonicciDix = [];
for (let i = 0; i < 10; i++) {
  stockagefibonacciDix = avantDernierfibonacciDix + DernierfibonacciDix; 
  avantDernierfibonacciDix = DernierfibonacciDix;
  DernierfibonacciDix = stockagefibonacciDix ; 
  ArrayStockageFibonicciDix.push(DernierfibonacciDix);
} fibonacciDix.textContent = ArrayStockageFibonicciDix;

const fonctionFibonacci = ()=>{
  for (let i = 0; i < InputFibonacci.value; i++) {
  stockageFibonacciInput = avantDernierFibonacciInput + DernierFibonacciInput; 
  avantDernierFibonacciInput = DernierFibonacciInput;
  DernierFibonacciInput = stockageFibonacciInput ; 
  ArrayStockageFibonicciInput.push(DernierFibonacciInput);
} 
fibonaccInput.textContent = ArrayStockageFibonicciInput;
}

const fibonaccInput = document.querySelector(".fibonaccInput p");
const InputFibonacci = document.querySelector(".fibonaccInput input");
const buttonFibonacci = document.querySelector(".fibonaccInput button");
let stockageFibonacciInput = 0;
let avantDernierFibonacciInput = 0;
let DernierFibonacciInput = 1;
let ArrayStockageFibonicciInput = [];
buttonFibonacci.addEventListener('click', fonctionFibonacci);


buttonFibonacci.addEventListener('click', (n)=>{
  fibonaccInput.textContent = "";
  ArrayStockageFibonicciInput = [];
  avantDernierFibonacciInput = 0;
  DernierFibonacciInput = 1;
  for (let i = 0; i < InputFibonacci.value; i++) {
    stockageFibonacciInput = avantDernierFibonacciInput + DernierFibonacciInput; 
    avantDernierFibonacciInput = DernierFibonacciInput;
    DernierFibonacciInput = stockageFibonacciInput ; 
    ArrayStockageFibonicciInput.push(DernierFibonacciInput);
  } 
  fibonaccInput.textContent = ArrayStockageFibonicciInput;
})


const returnPrimeOrNot = document.querySelector(".prime input");
const btnReturnPrimeOrNot = document.querySelector(".prime button");

btnReturnPrimeOrNot.addEventListener("click", ()=>{
  let prime = returnPrimeOrNot.value;
  if (prime == 2 || prime == 3 || prime == 5 || prime == 7 || prime == 11 ) {
    alert("this IS a prime number !!!!");
  } else {
    if (returnPrimeOrNot.length === 0) {
    alert("please enter a correct value");
  } else if (prime % 2 === 0 || prime % 3 === 0 || prime % 5 === 0 || prime % 7 === 0 || prime % 11 === 0 ) {
    alert("this is NOT a prime number");
  } else {
    alert("this IS a prime number !!!!");
  }
  }
});