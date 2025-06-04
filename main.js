// variáveis para selecionar/mapearam os elementos HTML
const convertButton = document.querySelector(".convert-button");
const selectCurrencyToConvert = document.querySelector(".select-to-convert");
const selectConvertedCurrency = document.querySelector(".select-converted");

// função converter moeda
function convertingCurrency() {
  // variáveis para selecionar/mapearam os elementos HTML
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const valueToConvert = document.querySelector(".value-to-convert");
  const convertedValue = document.querySelector(".converted-value");

  const currencyValue = {
    real: 1,
    dolar: 5.68,
    euro: 6.5,
    libra: 7.71,
    dolarCanadense: 4.14,
    bitcoin: 603.116,
  };

  // variáveis para armazenar as moedas de origem e destino
  const sourceCurrency = selectCurrencyToConvert.value;
  const destinationCurrency = selectConvertedCurrency.value;

  // variáveis para armazenar os valores das moedas de origem e destino
  const currencyOriginValue = currencyValue[sourceCurrency];
  const currencyDestinationValue = currencyValue[destinationCurrency];

  // variável que faz o cálculo da conversão das moedas
  const convertedValues =
    (inputCurrencyValue * currencyOriginValue) / currencyDestinationValue;

  // formação do valor da moeda a ser convertida
  valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: filterCurrencyCode(sourceCurrency),
  }).format(inputCurrencyValue);

  // formação do valor da moeda convertida
  convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: filterCurrencyCode(destinationCurrency),
  }).format(convertedValues);
}

// função para filtrar o código das moedas
function filterCurrencyCode(moeda) {
  const currencyCode = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR",
    libra: "GBP",
    dolarCanadense: "CAD",
    bitcoin: "BTC",
  };

  return currencyCode[moeda]; // retorna o código da moeda
}

// função mudar nome e imagem da moeda a ser convertida
function changeCurrencyToConvert() {
  const nameCurrencyToConvert = document.querySelector(".currency-to-convert");
  const imgCurrencyToConvert = document.getElementById("img-to-convert");

  if (selectCurrencyToConvert.value == "real") {
    nameCurrencyToConvert.innerHTML = "Real Brasileiro";
    imgCurrencyToConvert.src = "./assets/img-real.png";
  }

  if (selectCurrencyToConvert.value == "dolar") {
    nameCurrencyToConvert.innerHTML = "Dólar Américano";
    imgCurrencyToConvert.src = "./assets/img-dolar.png";
  }

  if (selectCurrencyToConvert.value == "euro") {
    nameCurrencyToConvert.innerHTML = "Euro";
    imgCurrencyToConvert.src = "./assets/img-euro.png";
  }

  if (selectCurrencyToConvert.value == "libra") {
    nameCurrencyToConvert.innerHTML = "Libra Esterlina";
    imgCurrencyToConvert.src = "./assets/img-libra.png";
  }

  if (selectCurrencyToConvert.value == "dolarCanadense") {
    nameCurrencyToConvert.innerHTML = "Dólar Canadense";
    imgCurrencyToConvert.src = "./assets/img-dolar-canadense.png";
  }

  if (selectCurrencyToConvert.value == "bitcoin") {
    nameCurrencyToConvert.innerHTML = "Bitcoin";
    imgCurrencyToConvert.src = "./assets/img-bitcoin.png";
  }

  convertingCurrency(); // chama a função para converter a moeda
}

// função mudar nome e imagem da moeda convertida
function changeCurrencyConverted() {
  const nameCurrencyConverted = document.querySelector(".converted-currency");
  const imgCurrencyConverted = document.getElementById("converted-img");

  if (selectConvertedCurrency.value == "dolar") {
    nameCurrencyConverted.innerHTML = "Dólar Américano";
    imgCurrencyConverted.src = "./assets/img-dolar.png";
  }

  if (selectConvertedCurrency.value == "real") {
    nameCurrencyConverted.innerHTML = "Real Brasileiro";
    imgCurrencyConverted.src = "./assets/img-real.png";
  }

  if (selectConvertedCurrency.value == "euro") {
    nameCurrencyConverted.innerHTML = "Euro";
    imgCurrencyConverted.src = "./assets/img-euro.png";
  }

  if (selectConvertedCurrency.value == "libra") {
    nameCurrencyConverted.innerHTML = "Libra Esterlina";
    imgCurrencyConverted.src = "./assets/img-libra.png";
  }

  if (selectConvertedCurrency.value == "dolarCanadense") {
    nameCurrencyConverted.innerHTML = "Dolar Canadense";
    imgCurrencyConverted.src = "./assets/img-dolar-canadense.png";
  }

  if (selectConvertedCurrency.value == "bitcoin") {
    nameCurrencyConverted.innerHTML = "Bitcoin";
    imgCurrencyConverted.src = "./assets/img-bitcoin.png";
  }

  convertingCurrency(); // chama a função para converter a moeda
}

// eventos de click e change
convertButton.addEventListener("click", convertingCurrency);
selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvert);
selectConvertedCurrency.addEventListener("change", changeCurrencyConverted);
