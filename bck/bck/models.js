const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    slug: {
        type: String
    },
    url: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Url', UrlSchema);