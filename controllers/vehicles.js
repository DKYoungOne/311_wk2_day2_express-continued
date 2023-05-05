const vehicles = require('../data/vehicles');

const list = (req, res) => {
        res.json(vehicles);
}

const show = (req, res) => {
    const id = req.params.id;
    const index = id-1;
    res.json(vehicles[index]);
}

const create = (req, res) => {
    const lastEntry =  vehicles.at(-1);
    const _id = lastEntry._id + 1;
    req.body._id = _id;
    req.body.postId = 1;
    vehicles.push(req.body);
    res.send('Info added.');
}

module.exports = {
    list, show, create
}