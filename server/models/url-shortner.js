const mongoose = require('mongoose');

const urlModel = mongoose.Schema({
    slug: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Url', urlModel);