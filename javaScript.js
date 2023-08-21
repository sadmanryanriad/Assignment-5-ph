function getElementValueInFloatByID(elementID) {
  const element = document.getElementById(elementID);
  const elementString = element.innerText;
  return parseFloat(elementString);
}

document.getElementById('applyButton').addEventListener('click', function () {
  const couponInput = document.getElementById('couponInput');
  enteredCouponText = couponInput.value;
  if (enteredCouponText === 'SELL200') {
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const discount = (totalPrice * 0.20).toFixed(2);

    // change discount HTML element
    const discountElement = document.getElementById('discount');
    discountElement.innerText = discount;

    // change final total
    const totalElement = document.getElementById('total');
    const totalString = totalElement.innerText;
    const total = parseFloat(totalString);
    totalElement.innerText =( total - discount).toFixed(2);
  }
})



let count = 0;
function clickHandler(ID, title) {
  const price = getElementValueInFloatByID(ID);

  const totalPrice = getElementValueInFloatByID("total-price");

  const finalPrice = price + totalPrice;
  // check price is greater than 0
  if (finalPrice > 0) {
    const makePurchaseButton = document.getElementById('make-purchase');
    makePurchaseButton.removeAttribute('disabled');
  }
  // check for discount 200
  if (finalPrice >= 200) {
    const applyButton = document.getElementById('applyButton');
    applyButton.removeAttribute("disabled");
  }
  // change total price
  const totalPriceElement = document.getElementById("total-price");
  const finalPriceTwoDecimal = finalPrice.toFixed(2);
  totalPriceElement.innerText = finalPriceTwoDecimal;

  // change final total
  const totalElement = document.getElementById('total');
  const total = finalPriceTwoDecimal;
  totalElement.innerText = total;

  // get card title
  const cardTitleElement = document.getElementById(title);
  const cardTitle = cardTitleElement.innerText;

  const p = document.createElement('p');
  count++;
  p.innerHTML = `${count}. ${cardTitle}`;
  const list = document.getElementById('p-list');
  list.appendChild(p);
}




