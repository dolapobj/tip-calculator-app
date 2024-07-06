// function to validate bill is >0
// function to validate tip percentage >0
// function to validate number of people > 0

//global object to store vals
const tipCalculator = {
  tipPercentage: null,
  billAmount: null,
  numberOfPeople: null,
};

//get the bill amount and validate
document.getElementById("bill").addEventListener("change", (e) => {
  const billAmt = document.getElementById("bill").value;
  const billError = document.getElementById("bill-error");
  if (!validateBill(billAmt)) {
    console.log("invalid bill");
    billError.style.display = "block";
  }
  console.log(billAmt, "BILL AMT");
  tipCalculator.billAmount = billAmt;
  checkValues();
});

//get the  tip amount and validate

document.querySelectorAll(".tip-amt").forEach((button) => {
  button.addEventListener("click", handleTip);
  checkValues();
});
document.querySelectorAll(".input-custom").forEach((input) => {
  input.addEventListener("change", handleTip);
  checkValues();
});

//get  the number of people and validate
document.getElementById("number-people").addEventListener("change", (e) => {
  const numPeople = document.getElementById("number-people").value;
  const numPeopleError = document.getElementById("number-people-error");
  if (!validatePeople(numPeople)) {
    console.log("invalid number of people");
    e.target.classList.add("error");    
    numPeopleError.style.display = "inline-block";
  } else{
    e.target.classList.remove("error");
  console.log(numPeople, "NumberofPeople AMT");
  tipCalculator.numberOfPeople = numPeople;
  checkValues();
  }
});

//display tip amount and total

//gets the tip amount, either from the button or the input field
function handleTip(event) {
  let tipPercent;
  //tip-amt is the class name for the buttons
  if (event.target.classList.contains("tip-amt")) {
    tipPercent = event.target.getAttribute("data-tip");
    console.log(`Button clicked: ${tipPercent}%`);
    tipCalculator.tipPercentage = tipPercent;
    console.log(
      tipCalculator.tipPercentage,
      "TIP PERCENTAGE AFTER BUTTON CLICKED"
    );
  } else if (event.target.classList.contains("input-custom")) {
    tipPercent = event.target.value;
    if (validateTip(tipPercent)) {
      console.log(`Custom Tip Percent: ${tipPercent}%`);
      tipCalculator.tipPercentage = tipPercent;
    } else {
      console.log("Cannot have negative percentage");
    }
  }

  checkValues();
}

function checkValues() {
  console.log("Checking Values...");
  console.log(tipCalculator, "tIP CALAC");
  const tipPercent = tipCalculator.tipPercentage;
  const billAmount = tipCalculator.billAmount;
  const numberOfPeople = tipCalculator.numberOfPeople;
  console.log(tipPercent, "TIP PERCENT");
  console.log(billAmount, "Bill amount");
  console.log(numberOfPeople, "numberOfPeoopole");
  if (tipPercent && billAmount && numberOfPeople) {
    console.log("All Values Present!");
    allValuesPopulated();
  }
}

function allValuesPopulated() {
  displayTip();
}
//displays the tip amount and the total
function displayTip() {
  const tipPercent = parseFloat(tipCalculator.tipPercentage);
  const billAmount = parseFloat(tipCalculator.billAmount);
  const numberOfPeople = parseFloat(tipCalculator.numberOfPeople);
  //calaculate tip amount and total amount
  const tipAmount = billAmount * (tipPercent / 100);
  const totalAmount = billAmount + tipAmount;
  const tipPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = totalAmount / numberOfPeople;

  //display tip amount and total amount
  document.getElementById(
    "calculated-tip-amount"
  ).innerText = `$${tipPerPerson.toFixed(2)}`;
  document.getElementById(
    "calculated-total-amount"
  ).innerText = `$${totalPerPerson.toFixed(2)}`;
}
//displays the tip aamount and total
function dispayTotal() {}

function validateBill(amt) {
  return amt > 0;
}

function validateTip(tip) {
  if (tip > 0) {
    return true;
  } else {
    return false;
  }
}

function validatePeople(numPeople) {
  return numPeople > 0;
}

//handle button click formattinng

const buttons = document.querySelectorAll(".tip-amt");
const input = document.querySelector(".input-custom");

function handleButtonClick(event) {
  buttons.forEach((button) => button.classList.remove("clicked"));
  event.target.classList.add("clicked");
}

function handleInputChange() {
  buttons.forEach((button) => button.classList.remove("clicked"));
}
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  input.addEventListener('input', handleInputChange);


  // add event listener for the reset button 

document.getElementById("reset-button").addEventListener("click", (e) => {
tipCalculator.billAmount = null;
tipCalculator.tipPercentage = null;
tipCalculator.numberOfPeople = null;

const inputs  = document.querySelectorAll("input");
inputs.forEach(input => {
    input.value = '';
document.getElementById(
    "calculated-tip-amount"
  ).innerText = '';
  document.getElementById(
    "calculated-total-amount"
  ).innerText = '';

});
//clear buttons
const buttons = document.querySelectorAll(".tip-amt");
buttons.forEach((button) => button.classList.remove("clicked"));

const numPeopleError = document.getElementById("number-people-error");
const numPeopleInput = document.getElementById("number-people");
numPeopleInput.classList.remove("error");
numPeopleError.style.visibility = "hidden";

});
