const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end("hello");
});

app.listen(process.env.PORT || 1337);
