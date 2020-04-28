const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreUserSchema = new Schema({
    fullname: String,
    email: String
});

module.exports = mongoose.model('PreUser', PreUserSchema);