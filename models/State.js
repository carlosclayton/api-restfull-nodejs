var bookshelf = require('./bookshelf');
var City = require('./City');

var State = bookshelf.Model.extend({
	tableName: 'states'	,
	cities: function() {
    return this.hasMany(City);
  }
});

module.exports = State;
