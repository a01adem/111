const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like CSS) from the public directory
app.use(express.static('public'));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index'); // This will render views/index.ejs
});

app.get('/login', (req, res) => {
    res.render('login'); // This will render views/index.ejs
});

app.get('/signup', (req, res) => {
    res.render('signup'); // This will render views/index.ejs
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
