function getCash(atm, money) {
  var cash = [],
    centinel = false,
    currentMoney = money;

  for (var i = 0; i < atm.length && !centinel; i++) {
    var div = 0;
    var papers = 0;

    if (money > 0) {
      div = parseInt(money / atm[i].amount);

      if (div > atm[i].quantity) {
        papers = atm[i].quantity;
        atm[i].quantity -= papers;
      } else {
        papers = div;
        atm[i].quantity -= div;
      }

      cash.push({ amount: atm[i].amount, quantity: papers });
      money -= (atm[i].amount * papers);
    } else {
      centinel = true;
    }
  }
  return cash;
};
