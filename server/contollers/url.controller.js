const UrlModel = require('../models/url.model');
const { nanoid } = require('nanoid');

exports.getUrl = async (req, res) => {
    const { slug } = req.params;

    // check if slug exists
    const foundSlug = await UrlModel.findOne({ slug });
    // If no slug exists, create one
    if (!foundSlug || foundSlug.length === 0) {
        let fullUrl = req.protocol + '://' + req.get('Host') + req.originalUrl;
        res.status(404).json({ message: "URL not found.", body: { slug, url: fullUrl } });
    } else {
        res.status(302).redirect(foundSlug.url);
    }
}