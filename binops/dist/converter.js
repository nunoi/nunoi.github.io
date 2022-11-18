export class converter {
  reverseString(s) {
    return s.split("").reverse().join("");
  }
  validateDecimal(num) {
    let res = false;
    let regexp = new RegExp("^[0-9]*$");
    res = regexp.test(num);
    return res;
  }
  validateBinary(num) {
    let res = false;
    let regexp = new RegExp("^[0-1]{1,}$");
    res = regexp.test(num);
    return res;
  }
  decimalToBinary(dnum) {
    return BigInt(dnum).toString(2);
  }
  binaryTodecimal(bnum) {
    let n = BigInt("0b" + bnum);
    return n.toString();
  }
}
