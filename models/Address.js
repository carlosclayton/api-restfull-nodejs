var bookshelf 	= require('./bookshelf');
var Joi 		= require('joi');

//console.log(User);

var Address 		= bookshelf.Model.extend({
	tableName: 'address',
    
  	user: function() {
    	return this.belongsTo(Address, 'user_id');
  	}
});

/*
Address.where({id: 2}).fetch({withRelated: ['user']}).then(function(address) {
  console.log(JSON.stringify(address.related('user')));
});
*/

module.exports = Address;