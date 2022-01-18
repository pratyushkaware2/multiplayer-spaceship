const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path')
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));		
app.get("/backendTest", (req, res) => res.send({data: 'Test'}));

app.listen(process.env.PORT || 4000)
