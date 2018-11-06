var bookshelf = require('./bookshelf');


var City = bookshelf.Model.extend({
	tableName: 'cities',
	state: function() {
    	return this.belongsTo(City, 'state_id');
  	}, 
  	users: function() {
    	return this.belongsToMany(City, 'city_user', 'city_id', 'user_id');
  	}

});


module.exports = City;
