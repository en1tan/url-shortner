const express = require('express');
const { url } = require('inspector');
const urlModel = require('../models/url-shortner');
const router = express.Router()

router.get('/all', async (req, res) => {
    try {
        await urlModel.find({}, (err, urls) => {
            console.log(urls);
            return res.status(200).json({ success: true, data: urls });
        });
    } catch (err) {

    }
});

// Fetch corresponding url
router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
        const {url} = await urlModel.findOne({ slug });
        console.log(url);
        return res.redirect(url);
    } catch (err) {
        return res.status(500).json({ success: false, msg: `Error occured. Please try again ${err}` });
    }
});

module.exports = router;