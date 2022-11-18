import * as bigintCryptoUtils from "../_snowpack/pkg/bigint-crypto-utils.js";
import * as Combinatorics from "../_snowpack/pkg/js-combinatorics.js";
export class operations {
  constructor() {
    this.lastUnaryResult = "";
    this.lastBinaryResult = "";
    this.lastGeneratorResult = "";
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
  generate(nbits, ones = 0) {
    let min = 0n;
    let max = BigInt(nbits);
    let res = 0n;
    let foundBits = false;
    if (ones === 0) {
      res = bigintCryptoUtils.randBetween(2n ** max - 1n, min);
    } else {
      while (!foundBits) {
        let tmp = this.constructReqBits(nbits, ones);
        let it = new Combinatorics.Permutation(tmp);
        let s = it.sample()?.join("");
        if (s != null) {
          res = BigInt("0b0" + s);
          foundBits = true;
        }
      }
    }
    this.lastGeneratorResult = res.toString(2);
    return this.lastGeneratorResult;
  }
  getLastGeneratorResult() {
    return this.lastGeneratorResult;
  }
  constructReqBits(nbits, reqBits) {
    var s = Array(nbits);
    for (let i = 0; i < s.length; i++) {
      if (reqBits > 0) {
        s[i] = "1";
        reqBits--;
      } else {
        s[i] = "0";
      }
    }
    return s.join("");
  }
}
