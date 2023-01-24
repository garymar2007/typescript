var Shopper = require('./Shopper');

var scout = new Shopper('scout Banks');
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;
