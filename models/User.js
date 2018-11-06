var bookshelf 	= require('./bookshelf');
var Address     = require('./Address');
var City     = require('./City');

var User 	= bookshelf.Model.extend({
	  tableName: 'users',

  	address: function() {
    	return this.hasOne(Address);
  	},

  	city: function() {
    	return this.belongsToMany(User, 'city_user', 'user_id', 'city_id');
  	}

});

/* Debug
User.where({id: 2}).fetch({withRelated: ['address']}).then(function(user) {
  console.log(JSON.stringify(user.related('address')));
});
*/

module.exports = User;