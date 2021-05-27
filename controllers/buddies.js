var Buddy = require('../models/buddy')

module.exports = {
    index,
    create
}

function index(req, res) {
    Buddy.find({}, function (err, buddies) {
        res.status(200).json(buddies)
    })
}

function create(req, res) {
    Buddy.create(req.body, function (err, buddy) {
        res.status(201).json(buddy)
    })
}