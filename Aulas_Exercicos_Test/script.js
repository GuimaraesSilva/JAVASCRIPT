// <-------------------------------------------->
// Exercicio Estruturas de Repetição 

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

// <-------------------------------------------->
// Exercicio Funções

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

// <-------------------------------------------->
// Exercicio Arrays

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

// <-------------------------------------------->
// Exercicio Objects

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

// const estudantes = [{ id: 1, nome: 'João', idade: 20 },{
//     id: 2, nome: 'Maria', idade: 22 },{ id: 3, nome:
//     'Pedro', idade: 18 },{ id: 4, nome: 'Ana', idade: 21 }];

// console.log(estudantes);

// const found = (id => estudantes.find(estudante => estudante.id === id));
// console.log(found(1));
// console.log(found(2));
// console.log(found(3));
// console.log(found(4));

// const nomesEstudantes = ((id) => estudantes.map(estudante => 
//     `Nome do estudante: ${estudante.nome}`));
// console.log(nomesEstudantes());

// // Outra forma de fazer o exercicio.
// const nomesEstudantes = ((id) => estudantes.map(estudante => 
//     `Nome do estudante: ${estudante.nome}`));
// console.log(nomesEstudantes());

// const estudantesMaiorIdade = (idade => estudantes.filter(estudante => 
//     estudante.idade > idade));
// console.log(estudantesMaiorIdade(19));

// <-------------------------------------------->
// Exercicio ES6

// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
//   ];

//   const text = (() => companies.map(companies => 
//     `O nome desta empresa é ${companies.name}} e fundada em ${companies.start}`));
// console.log(text());

// const startAfter = () => companies.filter( company => 
//     company.start > 1987);
// console.log(startAfter());


// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const soma = ages.reduce((age, currentValue) => age + currentValue,
// 0);
// console.log(soma);


// const {name,category} = companies[0];
// const newObjectCompany = {name: name, category: category};

// const person = {
//     name: "Costas",
//     address: {
//   street: "Lalaland 12"
//     }};

// const {street} = person.address;

// // const {address} = person;
// // const {street} = address;

// // const address: {address: {street}}; 


// const result =(() => companies.map(companie => 
//     companie.start > 1996 && companie.start <= 2004 ? true:false));

// console.log(result());



// <-------------------------------------------->
// Exercicio Promises

// const soma = (a, b) => {
//     const total = a + b;
  
//     const promise = new Promise((resolve, reject) => {
//       if (total % 2 == 0) {
//         resolve("é par");
//       } else {
//         reject("é impar");
//       }
//     });
  
//     promise
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error));
//   };

// <-------------------------------------------->
// Exercicio Async/await (Promises)

// const sum = (a,b) => {
//     const total = a + b;
  
//     const promise = new Promise((resolve, reject) => {
//       if (total % 2 == 0) {
//         resolve("é par");
//       } else {
//         reject("é impar");
//       }
//     });
//     return promise;
// };

// const calculate = async(numb1,numb2) => {
//     console.log("wait for it!");
//     try{
//         const result = await sum (numb1,numb2);
//         console.log(result);  
//     }catch(e){
//         console.log(e);
//     }
// };

// const getNome = (nome) => {
//     const promiseNomes = new Promise((resolve, reject) => {
//       if (nome === "javascript") {
//         reject("Javascript é top");
//       } else {
//         resolve(`Nome: ${nome}`);
//       }
//     });
  
//     return promiseNomes;
//   };
  
//   const asyncNome = async (nome) => {
//     try {
//       const result = await getNome(nome);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
//   asyncNome("Vitor");
//   asyncNome("javascript");

// <-------------------------------------------->
