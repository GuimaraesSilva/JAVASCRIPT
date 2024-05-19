// for(let n=0; n<=10; n=n+2){
//     console.log(n)
// }

// let n=0;
// while(n<=10){
//     console.log(n);
//     n=n+2;
// }

// let n=0;
// do{
//     console.log(n);
//     n = n+2;
// }while(n<=10)

// function soma(a,b){
//     const resultado = a + b;
//     return resultado;
// }

// function multiplicacao(a,b){
//     const resultado = a * b;
//     return resultado;
// }

// function gerarPessoa(nome,idade){
//     return {
//         name:nome,
//         age: idade
//     }   
// }

// const mounths=["janeiro","fevereiro","março","abril"]
// const numberMounths=[1,2,3,4]

// for(let n= 0; n<mounths.length; n++){
//     console.log(mounths[n]);
// }

// for(let i= 0; i<numberMounths.length; i++){
//     console.log(numberMounths[i]);
// }

// const textNumb=["one","second"];
// const adittion = textNumb.push("three");

// const gluing = textNumb.toString();

// const textNumb2=["four","five","six"];
// const remove1 = textNumb2.pop();
// const remove2 = textNumb2.shift();

// const finalAddition = textNumb2.push("seven");

// const together = textNumb.join("/");

// textNumb.concat(textNumb2);

// const identify ={
//     name: "Quim",
//     age: 67,
//     hobby: "drink beer",
//     address: "first bar to the left",
// }

// const keys = Object.keys(identify);
// const values = Object.values(identify);
// const entries = Object.entries(identify);

// const story ="O Quim foi ao bar e estava fechado, ficou chateado!";
// const length = story.length;
// const secondPosition = story.indexOf("Quim");
// const replace = story.replace("O","Javascript é espectacular");
// const upper = story.toUpperCase();
// const divid = replace.split("espectacular");

// const teste = "Isto é um teste"+" "+"tu vais passar";
// const final = "Isto é" + " " + 1 + " " + "string com" + " " + 2 + " " + "números";

// const date = new Date("2020-02-06");
// const week = date.getDay();
// const year = date.getFullYear();

// const upgrademounth = date.setMonth(2);
// const upgradeyear = date.setFullYear(2021);

// <-------------------------------------------->
// Exercicio Funções Anónimas

// const completeName = function(){
//     console.log("Fábio Guimarães Silva")
// };

// const sum=function(a,b){
//     return(a+b)
// };
// sum()

// <-------------------------------------------->
// Exercicio Funções Anónimas IIFE

// (function(){
//     console.log("Fábio Guimarães Silva")
// })();

// console.log(
//     (function(){
//     return("Fábio Guimarães Silva")
// })()
// );

// (function(a,b){
//     console.log(a+b)
// })(5,10);

// console.log((function(a,b){
//     return(a+b)
// })(5,20));

// <-------------------------------------------->
// Exercicio Funções Closures

// const div = 2
// function division(a){
//     return function(){
//         return a / div
//     }
// }
// const calc = division(10);
// console.log(calc())

// function div2(a){
//     return function(b){
//         return a / b
//     }
// }
// console.log(div2 (5)(10));

// <-------------------------------------------->
// Exercicio Funções Constutoras

// function Livro(titulo, autor){
//     this.title = titulo;
//     this.author = autor;
// }
// const books = new Livro("Os três mosqueteiros","Alexandre Dumas")
// const books2 = new Livro("Os três mosqueteiros","Alexandre Dumas")
// console.log(books)
// console.log(books2)

// books.title = "Os Maias";
// books.author = "Eça de Queiroz";
// console.log(books)

// books2.title = "O Conde de Monte Cristo";
// console.log(books2)

// <-------------------------------------------->
// Exercicio ES6

const estudantes = [{ id: 1, nome: 'João', idade: 20 },{
    id: 2, nome: 'Maria', idade: 22 },{ id: 3, nome:
    'Pedro', idade: 18 },{ id: 4, nome: 'Ana', idade: 21 }];

console.log(estudantes);

const found = (id => estudantes.find(estudante => estudante.id === id));
console.log(found(1));
console.log(found(2));
console.log(found(3));
console.log(found(4));

const nomesEstudantes = (id => estudantes.map(estudante => 
    `Nome do estudante: ${estudante.nome}`));
console.log(nomesEstudantes());

const estudantesMaiorIdade = (idade => estudantes.filter(estudante => 
    estudante.idade > idade));
console.log(estudantesMaiorIdade(19));

