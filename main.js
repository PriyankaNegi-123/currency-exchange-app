'use strict'

const currencyOneEl = document.getElementById("currency-one");
const amountOneEl = document.getElementById("amount-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountTwoEl = document.getElementById("amount-two");
const btnSwap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

// exchange rate api app
const url = "https://v6.exchangerate-api.com/v6/fad09361c44fcb1d6db6817a/latest/"; 

function calculate(){
    const currencyOne = currencyOneEl.value;
    const currencyTwo = currencyTwoEl.value;

    fetch(url + `${currencyOne}`)
    .then(response=>response.json())
    .then(data=>{
        const rate = data.conversion_rates[currencyTwo];
        rateEl.innerText= `1 ${currencyOne} = ${rate.toFixed(2)} ${currencyTwo}`;
        amountTwoEl.value = (amountOneEl.value * rate).toFixed(2);
    });
}

currencyOneEl.addEventListener("change", calculate);
currencyTwoEl.addEventListener("change", calculate);
amountOneEl.addEventListener("change", calculate);
amountTwoEl.addEventListener("change", calculate);

btnSwap.addEventListener("click", function(){
    [currencyOneEl.value, currencyTwoEl.value]=
    [currencyTwoEl.value, currencyOneEl.value]
    calculate();
});

