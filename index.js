// get element
let tip = document.querySelectorAll(".grid li");
let bill = document.getElementById("bill");
let person = document.getElementById("person")
let customTip = document.getElementById("custom-tip")
let tipAmountFinal = document.getElementById("tip-amount");
let tipTotalFinal = document.getElementById("total");
let tipAmount;
const btn = document.getElementById("btn");

function calculator() {
  if( customTip.value == ""){
    for (iterator of tip) {
      iterator.addEventListener("click", function(){
        tipAmount=this;
        iterator.classList.add(".grid-item:active");
        customTip.value = Number(this.value);
        console.log(this.value);
        calInput();
      })
    }
  } else{
    calInput();
  }

  function calInput(){
    tipAmountFinal.innerText = "$" + (Number(bill.value) * Number(customTip.value) / 100).toFixed(2);;
    tipTotalFinal.innerText = "$" + (Number(bill.value) * Number(customTip.value)/100 / Number(person.value)).toFixed(2);
    btnReset()
  }
  

  // reset calculator
  function btnReset(){
    btn.classList.remove("btn-disable");
    btn.classList.add("btn-hover");
    btn.addEventListener("click",function(){
      bill.value = "";
      customTip.value = "";
      person.value = 1;
      tipAmountFinal.innerText = "$0.00"
      tipTotalFinal.innerText = "$0.00"
      btn.classList.add("btn-disable");
      btn.classList.remove("btn-hover");
    })
  }
  

  // show error message
  let messageError = document.querySelector(".error-message");
  if (person.value != 0 || person.value==""){
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}