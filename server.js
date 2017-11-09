const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("hello"+process.env.PORT);
});

app.listen(process.env.PORT || 3000);
