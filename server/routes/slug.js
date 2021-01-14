const express = require('express');
const nanoid = require('nanoid');
const urlModel = require('../models/url-shortner');
const router = express.Router()

// Generate slug
router.post('/new', (req, res) => {
    const { url } = req.body;
    try {
        const newUrl = new urlModel({
            slug: nanoid.nanoid(7),
            url: url.toLowerCase()
        });
        newUrl.save();
        return res.status(201).json({ success: true, data: newUrl.slug });
    } catch (err) {
        return res.status(500).json({ success: true, msg: `Error occured. Please try again ${err}` });
    }
});

module.exports = router;