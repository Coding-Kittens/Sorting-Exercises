function selectionSort(arry) {
  for (var n = 0; n < arry.length; n++) {
    let smallestIndex = n;
    for (var i = n; i < arry.length; i++) {
      if (arry[i] < arry[smallestIndex]) {
        smallestIndex = i;
      }
    }
    if (arry[n] != arry[smallestIndex]) {
      [arry[n], arry[smallestIndex]] = [arry[smallestIndex], arry[n]];
    }
  }

  return arry;
}

module.exports = selectionSort;
