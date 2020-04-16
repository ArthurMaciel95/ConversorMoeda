/*
	CONVERSOR DE DÓLAR EM TEMPO REAL
*/

/*Convertendo o dólar para o real*/
const urlDolar = fetch('http://economia.awesomeapi.com.br/json/all/USD-BRL')


const dolar = document.querySelector('#dolar')
const real = document.querySelector('#real')
const btn = document.querySelector('#btn')

urlDolar.then((r) => {
  return r.json()
})
.then((bodyDolar) => {
  btn.addEventListener('click', mudaValor)
    function mudaValor() {
    const valor = bodyDolar.USD.high

    dolar.value

    real.innerText = (valor * dolar.value).toFixed(2).replace(".", ",")
  }
})

/*Convertendo o real para o dólar*/
const urlReal = fetch('http://economia.awesomeapi.com.br/json/all/USD-BRL')

const moedaReal = document.querySelector('#moedaReal')
const btnReal = document.querySelector('#btnReal')
const moedaDolar = document.querySelector('#moedaDolar')

urlReal.then((r) => {
	return r.json()
})
.then((bodyReal) => {
	function novoValor () {
		const nValor = bodyReal.USD.high

		moedaReal.value

		moedaDolar.innerText = (moedaReal.value / nValor).toFixed(2).replace(".", ",")
	}

	btnReal.addEventListener('click', novoValor)
})


/*Convertendo euro para o real*/

const urlEuro = fetch('http://economia.awesomeapi.com.br/json/all/USD-BRL,EUR-BRL,BTC-BRL')

const euro = document.querySelector('#euro')
const btnEuro = document.querySelector('#btnEuro')
const moedaEuro = document.querySelector('#moedaEuro')

urlEuro.then((r) => {
	return r.json()
})
.then((bodyEuro) => {
	function mudaEuro() {
		const nEuro = bodyEuro.EUR.high

		euro.value

		moedaEuro.innerText = (euro.value * nEuro).toFixed(2).replace(".", ",")
	}
	
	btnEuro.addEventListener('click', mudaEuro)
})

/*Converte bitcoin para o real*/

const urlBitcoin = fetch('http://economia.awesomeapi.com.br/json/all/USD-BRL,EUR-BRL,BTC-BRL')

const bitcoin = document.querySelector('#bitcoin')
const btnBit = document.querySelector('#btnBit')
const moedaBitcoin = document.querySelector('#moedaBitcoin')

urlBitcoin.then((r) => {
	return r.json()
})
.then((bodyBitcoin) => {
	function mudaBitcoin() {
		const nBitcoin = bodyBitcoin.BTC.high

		bitcoin.value

		moedaBitcoin.innerText = (bitcoin.value * nBitcoin).toFixed(2).replace(".", ",")
	}
	
	btnBit.addEventListener('click', mudaBitcoin)
})
