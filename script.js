const url = fetch('http://economia.awesomeapi.com.br/json/all/USD-BRL')

const dolar = document.querySelector('#dolar')
const real = document.querySelector('#real')
const btn = document.querySelector('#btn')

url.then((r) => {
  return r.json()
}).then((urlData) => {
  btn.addEventListener('click', mudaValor)
    function mudaValor() {
    const valor = urlData.USD.high

    dolar.value

    real.innerText = (valor * dolar.value).toFixed(2).replace(".", ",")
  }

})

