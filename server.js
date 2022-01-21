const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path')
app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));		
app.get("/backendTest", (req, res) => res.send({data: 'Test'}));

const port = process.env.PORT || 4000 
var server = app.listen(port, () => {
  console.log("Connected to port " + port);
})

var io = module.exports.io = require('socket.io')(server)


const SocketManager = require('./SocketManager')

io.on('connection', SocketManager)
