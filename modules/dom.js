module.exports = {
  find: function(selector, root){
    root = root || document;
    return root.querySelector(selector);
  },
  findAll: function(selector, root){
    root = root || document;
    var nodeList = root.querySelectorAll(selector);
    return Array.prototype.slice.call(nodeList);
  }
}
