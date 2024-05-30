
(function() {
    console.log("Isto foi demasiado rápido!");
})();


function formField(fieldName){
  return function (resultGenerater){
    console.log(`${fieldName}: ${resultGenerater}`);
  };
}
const nameField = formField("Nome");
nameField("Vitor");

function Product(brand, value){
  this.backpack = brand;
  this.cost = value;
};
const product = new Product("Herschell", 110);
console.log(product);

product.cost = "2.5";
const convertCost = parseInt(product.cost);
console.log(convertCost);

