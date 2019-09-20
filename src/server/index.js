var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname +'./../../')); //serves the index.html

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));