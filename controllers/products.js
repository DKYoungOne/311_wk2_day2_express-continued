const products = require('../data/products');

const list = (req, res) => {
        res.json(products);
}

const show = (req, res) => {
    const id = req.params.id;
    const index = id-1;
    res.json(products[index]);
}

const create = (req, res) => {
    const lastEntry =  products.at(-1);
    const _id = lastEntry._id + 1;
    req.body._id = _id;
    req.body.postId = 1;
    products.push(req.body);
    res.send('Info added.');
}

module.exports = {
    list, show, create
}