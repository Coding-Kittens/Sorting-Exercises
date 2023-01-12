function bubbleSort(arry) {
  for (var n = 0; n < arry.length; n++) {
    let haveSwaped = false;
    for (var i = 0; i < arry.length - n; i++) {
      if (arry[i] > arry[i + 1]) {
        [arry[i], arry[i + 1]] = [arry[i + 1], arry[i]];
        haveSwaped = true;
      }
    }
    if (!haveSwaped) break;
  }
  return arry;
}

module.exports = bubbleSort;
