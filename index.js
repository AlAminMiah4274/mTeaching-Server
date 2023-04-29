const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./Data/Courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('courses data are seen');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('mTeaching server are runnig on port', port);
});