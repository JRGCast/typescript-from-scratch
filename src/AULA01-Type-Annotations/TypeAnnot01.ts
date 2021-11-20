/* eslint-disable */ // apenas para poder exemplificar, já que inferir os tipos já inferidos é redundante

// No TS há a inferência de tipos, isto é, na maior parte dos casos, o TS automaticamente inferirá o tipo de determinada variável.
// *Por isso a exceção é colocar desta forma, mas, quando o TS não inferir automaticamente, aí sim deve-se tipar assim*
// Infere-se o tipo logo após o nome da variável, semelhante a propriedade de um objeto, isso é o Type Annotation
// Os tipos mais comuns em que haverá a inferência: 

let string: string = 'Isto é uma string';
let number: number = 30; // inclui binário, hexadecimal e octal
let bool: boolean = true; // não contabiliza valores truthy ou falsy
let symbol: symbol = Symbol('qualquer símbolo'); // por exemplo Symbol("key")
// let bigint: bigint = 10n // feature do ecma2020/ES11, são números 'imensos'

// Arrays
// É possível inferir de duas maneiras:
// 1. Literal: onde informa-se Array<o tipo de elementos dentro do array>:
let arraynum1: Array<number> = [1, 2, 3, 4]; 
let arraystr1: Array<string> = ['a', 'b', 'c'];

// 2. Implícito: o tipo vem primeiro, seguido do que seria (no caso, um array):
let arraynum2: number[] = [3,4,5,6,7];  
let arraystr2: string[] = ['a', 'b'];


// Objetos
// Aqui vale lembrar o PropTypes.shape, do React:
let objeto1: {name: string, age: number, isAdult: boolean, extraInfo?: string} = {
 name: 'John',
 age:30,
 isAdult: true,
}; // tudo o que for declarado sem o '?' é obrigatório dentro do objeto, nos moldes do tipo informado

// Funções
function somar(x:number, y:number) {
  return x + y 
  // Se não colocar o return, o TS infere que o retorno será 'void', ou seja, undefined.
}
const resultado = somar(1 , 2) // aqui o TS já infere que o retorno da função será um number. 

// mas também é possível tipar o resultado da função, com os ':' logo após os parâmetros:
const subtract = (x:number, y:number): number => x - y;

// e também dessa forma:
const divide: (x:number, y:number) => number = (x, y) => x / y; // o tipo da função é sempre declarada antes do '=';