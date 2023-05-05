const contacts = require('../data/contacts');

const list = (req, res) => {
        res.json(contacts);
}

const show = (req, res) => {
    const id = req.params.id;
    const index = id-1;
    res.json(contacts[index]);
}

const create = (req, res) => {
    const lastEntry =  contacts.at(-1);
    const _id = lastEntry._id + 1;
    req.body._id = _id;
    req.body.postId = 1;
    contacts.push(req.body);
    res.send('Info added.');
}

module.exports = {
    list, show, create
}