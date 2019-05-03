var list = [];
function numSort() {
  list.sort(function(a,b) {
    return a - b;
  });
}
module.exports = {
  createList: function(num) {
    list.push(num);
    return list;
  },

  sortedList: function() {
    numSort();
  },

  printList: function() {
    return list;
  }

}
