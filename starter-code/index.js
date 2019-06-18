class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    //this.list = this.lost.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    var max = this.items[this.length - 1];
    if (this.length > 0) {
      return max;
    } else throw new Error("EmptySortedList");
  }
  min() {
    var min = this.items[0];
    if (this.length > 0) {
      return min;
    } else throw new Error("EmptySortedList");
  }
  sum() {
    const red = (acc, currVal) => acc + currVal;
    if (this.items.length > 0) {
      return this.items.reduce(red);
    } else return 0;
  }
  average() {
    let sum = this.sum();
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else return sum / this.length;
  }
}

module.exports = SortedList; //node's way to export some values
