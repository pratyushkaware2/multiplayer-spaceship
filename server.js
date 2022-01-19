const express = require('express')
const app = express()
var cors = require('cors')
var path = require('path')
// app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/build')));		

app.get("/backendTest", (req, res) => res.send({data: 'Test'}));

app.listen(process.env.PORT || 4000)

var socketIO = require('socket.io')
const io = socketIO(app);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});