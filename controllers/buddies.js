var Buddy = require('../models/buddy')

module.exports = {
    index,
    create,
    delete: deleteBuddy,
    update
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

function deleteBuddy(req, res) {
    Buddy.findByIdAndDelete(req.params.id, function () {
        index(req, res);
    })
}

function update(req, res) {
    Buddy.findByIdAndUpdate(req.params.id, req.body, function () {
        index(req, res);
    })
}