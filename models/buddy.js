const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buddySchema = new Schema({
    name: String,
    schedule: Number,
    img: String,
    uid: String,
}, { timestamps: true });

module.exports = mongoose.model('Buddy', buddySchema)