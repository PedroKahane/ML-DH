const express = require('express');
const app = express();
const path = require('path');

app.listen(3030,() => console.log("Server on http://localhost:3030"));



app.use(express.static(path.resolve(__dirname,"../public")));


app.use(require('./routes/web'))
