const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3030,function() {
     console.log("Servidor corriendo en puerto 3030");
})


app.use(express.static(path.resolve(__dirname,"../public")));


app.use(require('./routes/web'))
