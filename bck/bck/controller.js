const urlModel = require('./models');
const nanoid = require('nanoid');

const genUrl = async (req, res) => {
    const { url } = req.body;
    try {
        const newUrl = new urlModel({
            slug: nanoid(5),
            url: url
        });
        await newUrl.save();
        console.log(newUrl);
        return res.status(200).json({ success: true, data: newUrl.slug });
    } catch (err) {
        return res.status(500).json({ message: false, data: "Error occured" });
    }

}