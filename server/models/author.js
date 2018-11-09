const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    //id: String, on a pas besion de crée lid puisque mongoDb crée un Id automatique 
    name: String,
    age: Number
});
module.exports = mongoose.model('Author', authorSchema);
