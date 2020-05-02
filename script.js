/*
	CONVERSOR DE MOEDAS EM TEMPO REAL
*/

const url = fetch('http://economia.awesomeapi.com.br/json/all')

let moedaA = document.querySelectorAll('.moedaA')
let moedaB = document.querySelectorAll('.moedaB')

//transforma em array para pegar o index da variavél
let real = Array.from(moedaB)

let btn = document.querySelectorAll('.btn')

url.then((r) => {
	return r.json()
}).then((body) => {
	//Converte o dólar para o real
	btn[0].addEventListener('click', () => {
		let valor = body.USD.high
		let dolar = Array.from(moedaA)
		real[0].innerText = (valor * dolar[0].value).toFixed(2).replace('.', ',')

		//Não permite valores menor que zero
		if (dolar[0].value < 0) {
			real[0].innerText = '0'
		}
	})

	//Converte o euro para o real
	btn[1].addEventListener('click', () => {
		let valor = body.EUR.high
		let euro = Array.from(moedaA)
		real[1].innerText = (valor * euro[1].value).toFixed(2).replace('.', ',')

		//Não permite valores menor que zero
		if (euro[1].value < 0) {
			real[1].innerText = '0'
		}
	})

	//Converte o bitcoin para o real
	btn[2].addEventListener('click', () => {
		let valor = body.BTC.high
		let btc = Array.from(moedaA)
		real[2].innerText = (valor * btc[2].value).toFixed(2).replace('.', ',')

		//Não permite valores menor que zero
		if (btc[2].value < 0) {
			real[2].innerText = '0'
		}
	})
})
