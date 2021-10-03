// get input => bill , select tip, custom tip , number of people
let bill = document.getElementById("bill");
let tip = document.querySelectorAll(".grid li");
let person = document.getElementById("person");
let customTip = document.getElementById("custom-tip");
//  get output => tip amount, total
let tipAmountFinal = document.getElementById("tip-amount");
let tipTotalFinal = document.getElementById("total");
// get button reset
const btn = document.getElementById("btn");
// get box error => zero number of people
let messageError = document.querySelector(".error-message");
// variable - select tip
let tipAmount;

selectTip();
// calculated tip amount and total tip
function calculator() {
  showErrorMessega();
  if( customTip.value === ""){
    calculatorTip();
  } else{
    calculatorCustomTip();
  }
}

//  selected tip and active one tip
function selectTip(){
  for (let i= 0; i < tip.length; i++) {
    tip[i].addEventListener("click", function(){
      customTip.value = "";
      tipAmount=this.value;
      let setClasses = !this.classList.contains('active');
      setClass(tip, 'active', 'remove');
      if (setClasses) {
        this.classList.add("active");
      }
      calculator()
    })
  }
}
// calculator custom tip
function calculatorCustomTip(){
  for (let i= 0; i < tip.length; i++) {
    tip[i].classList.remove("active");
  }
  if (bill.value > 0 && person.value > 0 && customTip.value > 0) {
    tipAmountFinal.innerText = "$" + (parseFloat(bill.value) * parseFloat(customTip.value) / 100).toPrecision(3);
    tipTotalFinal.innerText = "$" + (parseFloat(bill.value) * parseFloat(customTip.value)/100 / parseFloat(person.value)).toPrecision(3);
    btnReset();
  }
}
// calculator selected tip
function calculatorTip(){
  if (bill.value > 0 && person.value > 0 && tipAmount > 0) {
    tipAmountFinal.innerText = "$" + (parseFloat(bill.value) * tipAmount / 100).toPrecision(3);
    tipTotalFinal.innerText = "$" + (parseFloat(bill.value) * tipAmount/100 / parseFloat(person.value)).toPrecision(3);
    btnReset();
  }
}

// reset input after click button reset
function btnReset(){
  btn.classList.remove("btn-disable");
  btn.classList.add("btn-hover");
  btn.addEventListener("click",function(){
    bill.value = "";
    customTip.value = "";
    person.value = "";
    tipAmountFinal.innerText = "$0.00";
    tipTotalFinal.innerText = "$0.00";
    btn.classList.add("btn-disable");
    btn.classList.remove("btn-hover");
  })
}

// show error message and handel preview
function showErrorMessega(){
  if (person.value != 0 ){
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  if (bill.value === ""){
    tipAmountFinal.innerText = "$0.00";
    tipTotalFinal.innerText = "$0.00";
  }
}
//  function for active one selected tip
function setClass(els, className, fnName) {
  for (let index = 0; index < els.length; index++) {
    els[index].classList[fnName](className);
  }
}