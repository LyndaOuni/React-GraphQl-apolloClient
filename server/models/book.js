const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    //id: String, on a pas besion de crée lid puisque mongoDb crée un Id automatique 
    name: String,
    genre: String,
    authorId: String

});
module.exports = mongoose.model('Book', bookSchema);
