
const swap = document.getElementById('swap');
const rate = document.getElementById('rate');
const currencyone = document.getElementById('currency-one');
const currencytwo = document.getElementById('currency-two');
const amountone = document.getElementById('amount-one');
const amounttwo = document.getElementById('amount-two');


// function to be called

function calculate(){
    const currency_one = currencyone.value
    const currency_two = currencytwo.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const new_rate = data.rates[currency_two]
            rate.innerHTML = `1 ${currency_one} = ${new_rate} ${currency_two}`
            amounttwo.value = (amountone.value * new_rate)
        })
        
};

function swapEl(){
    const temp = currencyone.value
    currencyone.value = currencytwo.value
    currencytwo.value = temp
    calculate()
};


// Events Listners
currencyone.addEventListener('change', calculate);
currencytwo.addEventListener('change', calculate);
amountone.addEventListener('input', calculate);
amounttwo.addEventListener('input', calculate);
swap.addEventListener('click', swapEl);


