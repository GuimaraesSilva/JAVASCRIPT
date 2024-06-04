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
// Exercicio DOM

// const buttonTags = document.getElementsByTagName("button");
// console.log(buttonTags);

// const buttonTags2 = document.querySelectorAll("button");
// console.log(buttonTags2);

// const containerButtons = document.querySelectorAll(".container button");
// console.log(containerButtons);

// const idTeste = document.getElementById("teste");
// console.log(idTeste);

// <-------------------------------------------->
// Exercicio DOM - ATRIBUTES

// const newDiv = document.createElement("div");
// document.body.appendChild(newDiv);

// newDiv.prepend("isto é apenas um exercício");
// newDiv.append("muito dificil");

// newDiv.setAttribute("aria-label","test-test");

// <-------------------------------------------->
// Exercicio DOM - EVENTS PSEUDO EVENTS

// const buttons = document.querySelectorAll('button');

// buttons[0].onmouseover = () => console.log("Game Over!");
// buttons[1].onmouseover = () => console.log("Game Over!");

// buttons[0].addEventListener('mouseout', () => console.log("Game Out!"));
// buttons[1].addEventListener('mouseout', () => console.log("Game Out!"));

// buttons.forEach((button) => (button.onmouseover = () => console.log("Game Over!")));

// setTimeout(() => buttons[0].setAttribute("id", "teste"), 3000);

// <-------------------------------------------->
// Exercicio OBJECT EVENT

// function captureEvent (event) {
//     console.log(event);
//     if (event.type == 'click'){
//         event.target.setAttribute('class', 'clicked')

//     }else if (event.type == 'mouseover'){
//         event.target.setAttribute('class','hover')
//     }
// }

// const buttons = document.querySelectorAll('button');
// buttons[0].addEventListener ('click', captureEvent);
// buttons[1].addEventListener ('over',captureEvent);

// // OUTRA FORMA DE FAZER O MESMO EXERCICIO

// const captureEvent = (event) => {
//     console.log(event);
  
//     if (event.type === "click") {
//       event.target.setAttribute("class", "clicked");
//     } else if (event.type === "mouseover") {
//       event.target.setAttribute("class", "hover");
//     }
//   };
  
//   const buttons = document.querySelectorAll("button");
  
//   buttons.forEach((button) => {
//     button.addEventListener("click", captureEvent);
//     button.addEventListener("mouseover", captureEvent);
//   });

// <-------------------------------------------->
// Exercicio sobre FORMDATA

// const form = document.querySelector('#fieldForm');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const nome = data.get('name');
//     const number = data.get('contact');
//     const mail = data.get('mail');

//     console.log('Name:',`${nome}`);
//     console.log('Contact:',`${number}`);
//     console.log('Email:',`${mail}`);
// })

// <-------------------------------------------->
// Exercicio sobre DOM - Manipulação de conteudo

// const divAdd = document.createElement('div');
// divAdd.innerHTML = `
// <ul>
//     <li>Exemplo 01</li>
//     <li>Exemplo02</li>
// </ul>
// <p>isto é uma div</p>`;

// document.body.appendChild(divAdd);

// const element = document.querySelector("li");
// element.insertAdjacentHTML('afterend', '<li>Exemplo 1.5</li>')

// const pRemove = document.querySelector('p');
// pRemove.remove();

// <-------------------------------------------->
// Exercicio sobre DOM - Manipulação de classes

// const spanAdd = document.createElement('span');
// spanAdd.innerHTML = `<span>isto é uma div</span>`;

// document.body.appendChild(spanAdd);

// const fraseAdd = document.querySelector('span')
// fraseAdd.addEventListener('click', () => 
// fraseAdd.classList.toggle('clicked'));


// const buttonAdd = document.createElement('button');
// document.body.appendChild(buttonAdd);

// buttonAdd.addEventListener('mouseover', () => 
// buttonAdd.classList.toggle('over'));

// buttonAdd.addEventListener('mouseout', () => 
// buttonAdd.classList.toggle('out'));

// <-------------------------------------------->
// Exercicio sobre XMLHTTPREQUEST AJAX (1)

// const request = new XMLHttpRequest();
// request.open('GET','https://dog.ceo/api/breeds/list/all');
// request.send();

// <-------------------------------------------->
// Exercicio sobre XMLHTTPREQUEST AJAX (2)

// const loadAnimesFiltered = (yearParam) => {
//   const promise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "https://api.jikan.moe/v4/top/anime");
//     request.responseType = "json";
//     request.send();

//     request.addEventListener("error", () => reject("errro!"));

//     request.addEventListener("load", () => {
//       const animesList = request.response.data;

//       const animesFiltered = animesList.filter(
//         (animeItem) => animeItem.year === yearParam
//       );

//       resolve(animesFiltered);
//     });
//   });

//   return promise;
// };

// const findAnimeByYear = async (year) => {
//   const response = await loadAnimesFiltered(year);

//   if (response.length === 0) {
//     console.log(`O ano ${year} não tem conteúdos.`);
//   } else {
//     response.map((animeItem) => console.log(animeItem.title));
//   }
// };

// <-------------------------------------------->
// Exercicio sobre FECTH

// fetch("https://api.jikan.moe/v4/top/anime")
// // .then((resposta) => resposta.json())
// // .then((response) => console.log(response.data));

// const loadAnimes = async () => {
//   const resposta = await fetch("https://api.jikan.moe/v4/top/anime")
  
//   const dadosResposta = await resposta.json();
//   const animesList = dadosResposta.data;

//   const animesFiltered = animesList.filter(
//     (animeItem) => animeItem.year === yearParam);

//   // console.log(animesFiltered.lenght === 0 ? `o ano ${year} não tem conteudos` : animesFiltered.map((animeItem) => animeItem.title));

//   // Neste caso  podemos utilizar o ternário para facilitar o código 
//   // ou então utilizamos as condições de if, else.

//   if (response.length === 0) {
//     console.log(`O ano ${year} não tem conteúdos.`);
//   } else {
//     response.map((animeItem) => console.log(animeItem.title));
//   }
// };

// <-------------------------------------------->
// Exercicio sobre Classes 

// class Car {
//   constructor(marca, modelo) {
//   this.brand = marca;
//   this.model = modelo;
//   }
//   display() {
//   return `Este é um ${this.brand} ${this.model}`;
//   }
// }
// const electric = new Car('Tesla', 'Model 3');
// const gas = new Car('Audi', 'RS6');
// console.log(electric.display());
// console.log(gas.display());

// class Suv extends Car{
//   constructor(marca, modelo, tipo){
//     super(marca,modelo);
//     this.type = tipo;
//   }
//   getType(){
//     return this.type;
//   }
// }

// const truck = new Suv('Ford','Raptor','4x4');
// console.log(truck.display());
// console.log(truck.getType());

// <-------------------------------------------->


