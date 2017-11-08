const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("hello");
});

app.listen(process.env.PORT);
