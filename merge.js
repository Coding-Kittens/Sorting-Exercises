function merge(aAry, bAry) {
  let out = [];
  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < aAry.length && bPointer < bAry.length) {
    if (aAry[aPointer] < bAry[bPointer]) {
      out.push(aAry[aPointer]);
      aPointer++;
    } else if (aAry[aPointer] > bAry[bPointer]) {
      out.push(bAry[bPointer]);
      bPointer++;
    } else {
      out.push(aAry[aPointer], bAry[bPointer]);
      aPointer++;
      bPointer++;
    }
  }

  while (aPointer < aAry.length) {
    out.push(aAry[aPointer]);
    aPointer++;
  }

  while (bPointer < bAry.length) {
    out.push(bAry[bPointer]);
    bPointer++;
  }

  return out;
}

function mergeSort(arry) {
  if (arry.length <= 1) return arry;
  const mid = Math.floor(arry.length / 2);
  const left = mergeSort(arry.slice(0, mid));
  const right = mergeSort(arry.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
