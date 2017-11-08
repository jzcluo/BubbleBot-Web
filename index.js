const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.query);
    res.send("hello");
});

//app.listen(3000, 'aws-prod-blu-051.cloudapp.net./40.76.192.15' ()=>{console.log("listening on 3000")});
