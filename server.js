var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(1337);

function handler (req, res) {
  fs.readFile(__dirname + '/runrunrainbowrun.htm',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('checkCoordinates', function (data) {
  
	checkCoordinates(data);
    
	console.log('Coordinates are checked');
	
  });
});

function checkCoordinates(data)
{

	console.log(data.x + ' ' + data.y + ' are OK');

}