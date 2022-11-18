import {converter} from "./converter.js";
import {results} from "./results.js";
import {operations} from "./operations.js";
const conv = new converter();
const ops = new operations();
const b2dInput = document.getElementById("b2d-input");
const d2bInput = document.getElementById("d2b-input");
const btnBin2Dec = document.getElementById("bin2dec");
const btnDec2Bin = document.getElementById("dec2bin");
const btnCopyBin2Dec = document.getElementById("copy-bin2dec");
const btnCopyDec2Bin = document.getElementById("copy-dec2bin");
const btnClipboardBin2Dec = document.getElementById("clipboard-bin2dec");
const btnClipboardDec2Bin = document.getElementById("clipboard-dec2bin");
const numDigitsBin = document.getElementById("res-digits-bin");
const numDigitsDec = document.getElementById("res-digits-dec");
const resultsDecTable = document.getElementById("res-table-dec");
const resultsBinTable = document.getElementById("res-table-bin");
const unaryInput = document.getElementById("unary-input");
const btnUnaCopyFromD2B = document.getElementById("una-copy-from-d2b");
const btnUnaSL = document.getElementById("op-sl");
const btnUnaSR = document.getElementById("op-sr");
const btnUnaNot = document.getElementById("op-not");
const numDigitsUnary = document.getElementById("res-digits-unary");
const resultsUnaryTable = document.getElementById("res-table-unary");
const btnCopyUnary = document.getElementById("copy-unary");
const btnClipboardUnary = document.getElementById("clipboard-unary");
const binaryInput1 = document.getElementById("binary-input1");
const binaryInput2 = document.getElementById("binary-input2");
const btnBinCopyFromD2B = document.getElementById("bin-copy-from-d2b");
const btnBinAnd = document.getElementById("op-and");
const btnBinOr = document.getElementById("op-or");
const btnBinXor = document.getElementById("op-xor");
const btnBinAndNot = document.getElementById("op-and-not");
const numDigitsBinary1 = document.getElementById("res-digits-binary1");
const numDigitsBinary2 = document.getElementById("res-digits-binary2");
const resultsBinaryTable = document.getElementById("res-table-binary");
const btnClipboardBinary = document.getElementById("clipboard-binary");
const btnBinCopy = document.getElementById("copy-binary");
const generatorInput = document.getElementById("generator-input");
const generatorBitsOne = document.getElementById("generator-bits1-input");
const btnGenerate = document.getElementById("generator");
const resultsGeneratorTable = document.getElementById("res-table-generator");
const btnCopyGenerate = document.getElementById("clipboard-generator");
btnGenerate?.addEventListener("click", handleGenerate);
btnCopyGenerate?.addEventListener("click", handleClipboardGenerate);
generatorInput?.addEventListener("input", validateBits);
generatorBitsOne?.addEventListener("input", validateBits);
b2dInput.setAttribute("value", "0");
d2bInput.setAttribute("value", "0");
btnBin2Dec?.addEventListener("click", handleB2D);
btnDec2Bin?.addEventListener("click", handleD2B);
btnCopyBin2Dec?.addEventListener("click", handleCopyB2D);
btnCopyDec2Bin?.addEventListener("click", handleCopyD2B);
btnClipboardBin2Dec?.addEventListener("click", handleClipboardB2D);
btnClipboardDec2Bin?.addEventListener("click", handleClipboardD2B);
b2dInput?.addEventListener("input", validateB2D);
d2bInput?.addEventListener("input", validateD2B);
unaryInput.setAttribute("value", "0");
btnUnaCopyFromD2B?.addEventListener("click", handleUnaCopyFromD2B);
btnUnaSL?.addEventListener("click", unaryShiftLeft);
btnUnaSR?.addEventListener("click", unaryShiftRight);
btnUnaNot?.addEventListener("click", unaryNot);
unaryInput?.addEventListener("input", validateUnary);
btnClipboardUnary?.addEventListener("click", handleClipboardUnary);
btnCopyUnary?.addEventListener("click", handleCopyUnary);
binaryInput1.setAttribute("value", "0");
binaryInput2.setAttribute("value", "0");
btnBinCopyFromD2B?.addEventListener("click", handleBinCopyFromD2B);
btnBinAnd?.addEventListener("click", binaryAnd);
btnBinOr?.addEventListener("click", binaryOr);
btnBinXor?.addEventListener("click", binaryXor);
btnBinAndNot?.addEventListener("click", binaryAndNot);
binaryInput1?.addEventListener("input", validateBinary1);
binaryInput2?.addEventListener("input", validateBinary2);
btnClipboardBinary?.addEventListener("click", handleClipboardBinary);
btnBinCopy?.addEventListener("click", handleCopyBinary);
handleB2D();
handleD2B();
unaryShiftRight();
binaryAnd();
handleGenerate();
function validateB2D() {
  var binValue = b2dInput.value;
  if (conv.validateBinary(binValue)) {
    let digits = b2dInput.value.length;
    numDigitsBin.textContent = digits.toString();
    b2dInput.style.backgroundColor = "#fff";
    btnBin2Dec.classList.remove("disabled");
  } else {
    numDigitsBin.textContent = "invalid!";
    b2dInput.style.backgroundColor = "#f94144ff";
    btnBin2Dec.classList.add("disabled");
  }
}
function validateD2B() {
  var binValue = d2bInput.value;
  if (conv.validateDecimal(binValue)) {
    let digits = d2bInput.value.length;
    numDigitsDec.textContent = digits.toString();
    d2bInput.style.backgroundColor = "#fff";
    btnDec2Bin.classList.remove("disabled");
  } else {
    numDigitsDec.textContent = "invalid!";
    d2bInput.style.backgroundColor = "#f94144ff";
    btnDec2Bin.classList.add("disabled");
  }
}
function validateUnary() {
  var binValue = unaryInput.value;
  if (conv.validateBinary(binValue)) {
    let digits = unaryInput.value.length;
    numDigitsUnary.textContent = digits.toString();
    unaryInput.style.backgroundColor = "#fff";
    btnUnaCopyFromD2B.classList.remove("disabled");
    btnUnaSL.classList.remove("disabled");
    btnUnaSR.classList.remove("disabled");
    btnUnaNot.classList.remove("disabled");
  } else {
    numDigitsUnary.textContent = "invalid!";
    unaryInput.style.backgroundColor = "#f94144ff";
    btnUnaCopyFromD2B.classList.add("disabled");
    btnUnaSL.classList.add("disabled");
    btnUnaSR.classList.add("disabled");
    btnUnaNot.classList.add("disabled");
  }
}
function validateBinary1() {
  var binValue = binaryInput1.value;
  if (conv.validateBinary(binValue)) {
    let digits = binaryInput1.value.length;
    numDigitsBinary1.textContent = digits.toString();
    binaryInput1.style.backgroundColor = "#fff";
    btnBinCopyFromD2B.classList.remove("disabled");
    btnBinAnd.classList.remove("disabled");
    btnBinOr.classList.remove("disabled");
    btnBinXor.classList.remove("disabled");
    btnBinAndNot.classList.remove("disabled");
  } else {
    numDigitsBinary1.textContent = "invalid!";
    binaryInput1.style.backgroundColor = "#f94144ff";
    btnBinCopyFromD2B.classList.add("disabled");
    btnBinAnd.classList.add("disabled");
    btnBinOr.classList.add("disabled");
    btnBinXor.classList.add("disabled");
    btnBinAndNot.classList.add("disabled");
  }
}
function validateBinary2() {
  var binValue = binaryInput2.value;
  if (conv.validateBinary(binValue)) {
    let digits = binaryInput2.value.length;
    numDigitsBinary2.textContent = digits.toString();
    binaryInput2.style.backgroundColor = "#fff";
    btnBinCopyFromD2B.classList.remove("disabled");
    btnBinAnd.classList.remove("disabled");
    btnBinOr.classList.remove("disabled");
    btnBinXor.classList.remove("disabled");
    btnBinAndNot.classList.remove("disabled");
  } else {
    numDigitsBinary2.textContent = "invalid!";
    binaryInput2.style.backgroundColor = "#f94144ff";
    btnBinCopyFromD2B.classList.add("disabled");
    btnBinAnd.classList.add("disabled");
    btnBinOr.classList.add("disabled");
    btnBinXor.classList.add("disabled");
    btnBinAndNot.classList.add("disabled");
  }
}
function handleB2D() {
  if (btnBin2Dec.classList.contains("disabled")) {
    return;
  }
  let children = resultsDecTable.childNodes;
  children.forEach(function(item) {
    resultsDecTable.removeChild(item);
  });
  var binValue = b2dInput.value;
  let res = conv.binaryTodecimal(binValue);
  let table = new results().getResultsDecimal(res);
  resultsDecTable.appendChild(table);
}
function handleD2B() {
  if (btnDec2Bin.classList.contains("disabled")) {
    return;
  }
  let children = resultsBinTable.childNodes;
  children.forEach(function(item) {
    resultsBinTable.removeChild(item);
  });
  var binValue = d2bInput.value;
  let res = conv.decimalToBinary(binValue);
  let table = new results().getResultsBinary(res);
  resultsBinTable.appendChild(table);
}
function handleCopyB2D() {
  var binValue = b2dInput.value;
  let res = conv.binaryTodecimal(binValue);
  d2bInput.value = res;
  validateD2B();
}
function handleCopyD2B() {
  var binValue = d2bInput.value;
  let res = conv.decimalToBinary(binValue);
  b2dInput.value = res;
  validateB2D();
}
function handleClipboardB2D() {
  var binValue = b2dInput.value;
  let res = conv.binaryTodecimal(binValue);
  copyToClipboard(res);
}
function handleClipboardD2B() {
  var binValue = d2bInput.value;
  let res = conv.decimalToBinary(binValue);
  copyToClipboard(res);
}
function copyToClipboard(s) {
  navigator.clipboard.writeText(s);
}
function unaryNot() {
  if (btnUnaNot.classList.contains("disabled")) {
    return;
  }
  let children = resultsUnaryTable.childNodes;
  children.forEach(function(item) {
    resultsUnaryTable.removeChild(item);
  });
  var binValue = unaryInput.value;
  let res = ops.not(binValue);
  let table = new results().getResultsBinary(res);
  resultsUnaryTable.appendChild(table);
}
function unaryShiftLeft() {
  if (btnUnaSL.classList.contains("disabled")) {
    return;
  }
  let children = resultsUnaryTable.childNodes;
  children.forEach(function(item) {
    resultsUnaryTable.removeChild(item);
  });
  var binValue = unaryInput.value;
  let res = ops.shiftLeft(binValue);
  let table = new results().getResultsBinary(res);
  resultsUnaryTable.appendChild(table);
}
function unaryShiftRight() {
  if (btnUnaSL.classList.contains("disabled")) {
    return;
  }
  let children = resultsUnaryTable.childNodes;
  children.forEach(function(item) {
    resultsUnaryTable.removeChild(item);
  });
  var binValue = unaryInput.value;
  let res = ops.shiftRight(binValue);
  let table = new results().getResultsBinary(res);
  resultsUnaryTable.appendChild(table);
}
function handleClipboardUnary() {
  let res = ops.getLastUnaryResult();
  copyToClipboard(res);
}
function handleCopyUnary() {
  let res = ops.getLastUnaryResult();
  binaryInput1.value = res;
  validateBinary1();
}
function handleUnaCopyFromD2B() {
  var binValue = d2bInput.value;
  let res = conv.decimalToBinary(binValue);
  unaryInput.value = res;
  validateUnary();
}
function binaryAnd() {
  if (btnBinAnd.classList.contains("disabled")) {
    return;
  }
  let children = resultsBinaryTable.childNodes;
  children.forEach(function(item) {
    resultsBinaryTable.removeChild(item);
  });
  var binValue1 = binaryInput1.value;
  var binValue2 = binaryInput2.value;
  let res = ops.and(binValue1, binValue2);
  let table = new results().getResultsBinary(res);
  resultsBinaryTable.appendChild(table);
}
function binaryOr() {
  if (btnBinOr.classList.contains("disabled")) {
    return;
  }
  let children = resultsBinaryTable.childNodes;
  children.forEach(function(item) {
    resultsBinaryTable.removeChild(item);
  });
  var binValue1 = binaryInput1.value;
  var binValue2 = binaryInput2.value;
  let res = ops.or(binValue1, binValue2);
  let table = new results().getResultsBinary(res);
  resultsBinaryTable.appendChild(table);
}
function binaryXor() {
  if (btnBinXor.classList.contains("disabled")) {
    return;
  }
  let children = resultsBinaryTable.childNodes;
  children.forEach(function(item) {
    resultsBinaryTable.removeChild(item);
  });
  var binValue1 = binaryInput1.value;
  var binValue2 = binaryInput2.value;
  let res = ops.xor(binValue1, binValue2);
  let table = new results().getResultsBinary(res);
  resultsBinaryTable.appendChild(table);
}
function binaryAndNot() {
  if (btnBinXor.classList.contains("disabled")) {
    return;
  }
  let children = resultsBinaryTable.childNodes;
  children.forEach(function(item) {
    resultsBinaryTable.removeChild(item);
  });
  var binValue1 = binaryInput1.value;
  var binValue2 = binaryInput2.value;
  let res = ops.andNot(binValue1, binValue2);
  let table = new results().getResultsBinary(res);
  resultsBinaryTable.appendChild(table);
}
function handleBinCopyFromD2B() {
  var binValue = d2bInput.value;
  let res = conv.decimalToBinary(binValue);
  binaryInput1.value = res;
  validateBinary1();
}
function handleCopyBinary() {
  let res = ops.getLastBinaryResult();
  unaryInput.value = res;
  validateUnary();
}
function handleClipboardBinary() {
  let res = ops.getLastBinaryResult();
  copyToClipboard(res);
}
function handleGenerate() {
  let children = resultsGeneratorTable.childNodes;
  children.forEach(function(item) {
    resultsGeneratorTable.removeChild(item);
  });
  var nbits = parseInt(generatorInput.value);
  let bitsOne = parseInt(generatorBitsOne.value);
  let res = "";
  res = ops.generate(nbits, bitsOne);
  let table = new results().getResultsBinary(res);
  resultsGeneratorTable.appendChild(table);
}
function handleClipboardGenerate() {
  let res = ops.getLastGeneratorResult();
  copyToClipboard(res);
}
function validateBits() {
  var bits = parseInt(generatorInput.value);
  var ones = parseInt(generatorBitsOne.value);
  if (ones > bits) {
    ones = bits;
    generatorBitsOne.value = ones.toString();
  }
}
