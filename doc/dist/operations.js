export class operations {
  constructor() {
    this.lastUnaryResult = "";
    this.lastBinaryResult = "";
  }
  not(num) {
    let arr = new Array(num.length).fill("1");
    let n2 = BigInt("0b0" + arr.join(""));
    let n1 = BigInt("0b0" + num);
    let res = n1 ^ n2;
    this.lastUnaryResult = res.toString(2);
    return this.lastUnaryResult;
  }
  shiftLeft(num) {
    let n1 = BigInt("0b0" + num);
    let res = n1 << BigInt(1);
    this.lastUnaryResult = res.toString(2);
    return this.lastUnaryResult;
  }
  shiftRight(num) {
    let n1 = BigInt("0b0" + num);
    let res = n1 >> BigInt(1);
    this.lastUnaryResult = res.toString(2);
    return this.lastUnaryResult;
  }
  getLastUnaryResult() {
    return this.lastUnaryResult;
  }
  and(num1, num2) {
    let n1 = BigInt("0b0" + num1);
    let n2 = BigInt("0b0" + num2);
    let res = n1 & n2;
    this.lastBinaryResult = res.toString(2);
    return this.lastBinaryResult;
  }
  or(num1, num2) {
    let n1 = BigInt("0b0" + num1);
    let n2 = BigInt("0b0" + num2);
    let res = n1 | n2;
    this.lastBinaryResult = res.toString(2);
    return this.lastBinaryResult;
  }
  xor(num1, num2) {
    let n1 = BigInt("0b0" + num1);
    let n2 = BigInt("0b0" + num2);
    let res = n1 ^ n2;
    this.lastBinaryResult = res.toString(2);
    return this.lastBinaryResult;
  }
  andNot(num1, num2) {
    let n1 = BigInt("0b0" + num1);
    let n2 = BigInt("0b0" + num2);
    let res = n1 & ~n2;
    this.lastBinaryResult = res.toString(2);
    return this.lastBinaryResult;
  }
  getLastBinaryResult() {
    return this.lastBinaryResult;
  }
}
