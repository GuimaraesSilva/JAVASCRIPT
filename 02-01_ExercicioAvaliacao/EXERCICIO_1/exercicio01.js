const paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];
console.log(paises);

for (let n = 0; n < paises.length; n++) {
    console.log(paises[n]);
}
const length = paises.length;
console.log(paises.length);

const additionStart = paises.unshift("Portugal");
console.log(paises);

const additionEnd = paises.push("Espanha");
console.log(paises);

const lastThree = paises.slice (10);
console.log(lastThree);

const onlyString = paises.join("-");
console.log(onlyString);