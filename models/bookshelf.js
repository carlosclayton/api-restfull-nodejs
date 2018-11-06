var knexfile = require ('../knexfile'); 	

var knex = require('knex')(knexfile.production);

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin(require('bookshelf-simplepaginate'));
//bookshelf.plugin(require('bookshelf-filteration').useDefaultFilters(true));

//bookshelf.plugin(require('bookshelf-validate',  config));
//bookshelf.plugin(require('bookshelf-validation'));
//bookshelf.plugin(require('bookshelf-jsonapi-params'));
//bookshelf.plugin('pagination');

//bookshelf.plugin(require('bookshelf-joi'));
module.exports = bookshelf;
