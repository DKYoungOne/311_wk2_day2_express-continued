const comments = require('../data/comments');

const list = (req, res) => {
        res.json(comments);
}

const show = (req, res) => {
    const id = req.params.id;
    const index = id-1;
    res.json(comments[index]);
}

const create = (req, res) => {
    const lastEntry =  comments.at(-1);
    const _id = lastEntry._id + 1;
    req.body._id = _id;
    req.body.postId = 1;
    comments.push(req.body);
    res.send('Comment posted.');
}

module.exports = {
    list, show, create
}