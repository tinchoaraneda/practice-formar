let dividir = require('./dividir')
let multiplicar = require('./multiplicar')
let sumar = require('./sumar')
let restar = require('./restar')

module.exports = {
    suma :(num1,num2) => sumar(num1,num2),
    resta :(num1,num2) => restar(num1,num2),
    multiplico :(num1,num2) => multiplicar(num1,num2),
    divido :(num1,num2) => dividir (num1,num2)

}