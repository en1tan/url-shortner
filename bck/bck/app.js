const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Add cors
app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);


app.listen(3000).on('listening', () => {
    console.log(`Server running on 3000`);
})