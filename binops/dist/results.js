export class results {
  constructor() {
    this.table = document.createElement("table");
    this.table.className = "results-table";
    this.table.createTBody();
  }
  populateTableBinary(val) {
    let ndigits = val.length;
    let rowIndices = this.table.insertRow();
    let rowResults = this.table.insertRow();
    rowIndices.className = "results-indices";
    rowResults.className = "results-results";
    let k = ndigits;
    for (let i = 0; i < ndigits; i++) {
      let ind = rowIndices.insertCell();
      ind.innerText = k.toString().padStart(3, "0");
      let res = rowResults.insertCell();
      res.innerText = val[i];
      k--;
    }
  }
  populateTableDecimal(val) {
    let ndigits = val.length;
    let rowIndices = this.table.insertRow();
    let rowResults = this.table.insertRow();
    rowIndices.className = "results-indices";
    rowResults.className = "results-results";
    let k = ndigits;
    for (let i = 0; i < ndigits; i++) {
      let ind = rowIndices.insertCell();
      ind.innerText = k.toString().padStart(3, "0");
      let res = rowResults.insertCell();
      res.innerText = val[i];
      k--;
    }
  }
  getResultsBinary(val) {
    this.populateTableBinary(val);
    return this.table;
  }
  getResultsDecimal(val) {
    this.populateTableBinary(val);
    return this.table;
  }
}
