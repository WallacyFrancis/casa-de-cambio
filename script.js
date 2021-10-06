const currencyList = document.querySelector('#currency-list');
const currencyBase = document.querySelector("#currence-base");
const inputCurrency = document.querySelector("#corrency-input");

// Função com .then()
// function fecthCurrency(currency = 'BRL') {
//   return fetch(`https://api.exchangerate.host/latest?base=${currency}`)
//     .then((response) => response.json());
// }

// Função com async await
async function fecthCurrency(currency = 'BRL') {
  const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}`);
  return response.json();
}


function clearCurrencyShare() {
  
  currencyBase.innerHTML = '';
  currencyList.innerHTML = '';
}

function appendCurrency([currency, value]) {
  const li = document.createElement('li');
  li.innerHTML = `${currency}: ${value}`;
  currencyList.appendChild(li);
}

function populateConstLisn(rates) {
  Object.entries(rates).forEach(appendCurrency);
}

// Função com .then()
// function hendlerSubmit(event) {
//   event.preventDefault()
//   clearCurrencyShare();
//   fecthCurrency(inputCurrency.value)
//     .then(({base, rates}) => {
//       currencyBase.innerHTML = `Valores referentes a 1 ${base}`;
//       Object.entries(rates).forEach(appendCurrency);
//     })
//     .catch(error => {
//       alert('Ocorreu um erro na aplicação');
//     })
// }

// Função com async await
async function hendlerSubmit(event) {
  event.preventDefault()
  clearCurrencyShare();
  try {
    const {base, rates} = await fecthCurrency(inputCurrency.value);
    currencyBase.innerHTML = `Valores referentes a 1 ${base}`;
    populateConstLisn(rates);
  } catch(error) {
    alert('Hewston! We have a problem. The forninho')
  }
  
}

function setupEventHendlers(event) {
  const searchButtom = document.querySelector("#search-buttom");
  searchButtom.addEventListener('click', hendlerSubmit)
}

window.onload = () => { setupEventHendlers() }