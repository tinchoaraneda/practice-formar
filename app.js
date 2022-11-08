const { Console } = require('console')
let argv = require('process')
let (suma,resta,multiplico,divido) = require('./calculadora')
let num1 = argv+[3]
let num2 = argv+[4]

switch(argv[2]){
    case 'sumar': 
    if (isNaN(num1)||isNaN(num2)) {
        console.log("Es necesario dos valores para realizar la suma");
    } else{
        console.log(suma(num1,num2));
    } break;
    case 'restar':
        console.log(resta(num1,num2))
    break;
    case 'dividir':
        console.log(divido(num1,num2))
    break;
    case 'multiplicar':
        console.log(multiplico(num1,num2))
    break;
    case undefined:
        console.log('Las operaciones que tenemos por el momento son las siguientes\n-Sumar\n-Restar\n-Dividir\n-Multiplicar');
    break;
    
    default:
        console.log('No se encuentra la operacion solicitada');
       break;
        }

