function calculatePrice(price, discount) {
    if (discount < 0 && discount > 100) {
      return "Desconto inválido. Deve ser entre 0 e 100.";
    }

    if (discount <= 10) {
      return price * (1 - (discount / 100));
    } else if (discount > 10 && discount < 30) {
      return price * (1 - (discount / 100));
    } else {
      return price * 2;
    }
  }

  console.log(calculatePrice(100, 5)); 
  console.log(calculatePrice(100, 25)); 
  console.log(calculatePrice(100, 30));