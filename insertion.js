function insertionSort(arry) {
  if (arry.length <= 0) return [];
  let sorted = [arry[0]];

  for (var n = 1; n < arry.length; n++) {
    let hasAdded = false;
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] > arry[n]) {
        hasAdded = true;
        sorted.splice(i, 0, arry[n]);
        break;
      }
    }
    if (!hasAdded) sorted.push(arry[n]);
  }
  return sorted;
}

module.exports = insertionSort;
