/*
	CONVERSOR DE MOEDAS EM TEMPO REAL
*/

const url = fetch('https://economia.awesomeapi.com.br/json/all')

let moedaA = document.querySelectorAll('.moedaA')
let moedaB = document.querySelectorAll('.moedaB')

//transforma em array para pegar o index da variavél
let real = Array.from(moedaB)

//Adiciona mais um lugar de resposta.
let datarefresh = document.querySelectorAll('.refresh')

let btn = document.querySelectorAll('.btn')


url.then((r) => {
	return r.json()
}).then((body) => {
	//Converte o dólar para o real
	btn[0].addEventListener('click', () => {
		let valor = body.USD.high
		let dolar = Array.from(moedaA)
		const  refresh = body.USD.create_date
		// Pega a data de atualização da API e Joga como resposta.
		real[0].innerText = (valor * dolar[0].value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
		datarefresh[0].innerHTML = `<p>última atualização:</p>${refresh}`

		//Não permite valores menor que zero
		if (dolar[0].value < 0) {
			real[0].innerText = '0'
		}
	})

	//Converte o euro para o real
	btn[1].addEventListener('click', () => {
		let valor = body.EUR.high
		let euro = Array.from(moedaA)
		// Pega a data de atualização da API e Joga como resposta.
		const refresh= body.EUR.create_date
		
		real[1].innerText = (valor * euro[1].value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
		datarefresh[1].innerHTML = `<p>última atualização:</p>${refresh}`
		//Não permite valores menor que zero
		if (euro[1].value < 0) {
			real[1].innerText = '0'
		}
	})

	//Converte o bitcoin para o real
	btn[2].addEventListener('click', () => {
		let valor = body.BTC.high
		let btc = Array.from(moedaA)
		// Pega a data de atualização da API e Joga como resposta.
		const refresh = body.BTC.create_date

		real[2].innerText = (valor * btc[2].value).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
		datarefresh[2].innerHTML = `<p>última atualização:</p>${refresh}`
		//Não permite valores menor que zero
		if (btc[2].value < 0) {
			real[2].innerText = '0'
		}
	})

})
