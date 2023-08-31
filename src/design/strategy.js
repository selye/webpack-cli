function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20;
  }
  return originPrice * 0.9;
}

function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30;
  }
  return originPrice * 0.8;
}

function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50;
  }
  return originPrice;
}

function freshPrice(originPrice) {
  return originPrice * 0.5;
}

// 询价方法，接受价格标签和原价为入参
function askPrice(tag, originPrice) {
  if (tag === 'pre') {
    return prePrice(originPrice);
  }
  if (tag === 'onSale') {
    return onSalePrice(originPrice);
  }
  if (tag === 'back') {
    return backPrice(originPrice);
  }
  if (tag === 'fresh') {
    return freshPrice(originPrice);
  }
}
