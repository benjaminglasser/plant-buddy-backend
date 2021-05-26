module.exports = {
    index
}

function index(req, res) {
    res.status(200).json([
        { name: 'Bill', schedule: '9' },
        { name: 'Susie', schedule: '3' },
        { name: 'Leslie', schedule: '6' },
    ])
}