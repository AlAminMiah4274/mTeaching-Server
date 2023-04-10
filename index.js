const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('data are seen');
});

app.listen(port, () => {
    console.log('mTeaching server are runnig on port', port);
});