const express = require('express');
const path = require('path');
const app = express();

// Getting our POSTS routes

const posts = require('./server/routes/posts');

// Using middleware
// Estaticos, ficheros js.
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/posts', posts);


// Catch all other routes request and return to it to the index

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

const port= process.env.PORT || 4600;

app.listen(4600, (req, res) => {
    console.log(`En marcha sevidor en el puerto ${port}`);

});