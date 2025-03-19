var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Shiver Methodology.html'));
});

// end of pages

app.listen(8080);
console.log('Server is listening on port 8080');