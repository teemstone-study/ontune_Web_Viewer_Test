let Socket;

console.log('workerInit');
	Socket = new WebSocket('ws://192.168.0.24:3001/ws');
	Socket.addEventListener('open', function (event) {
		console.log("It's open");
		sendDataKey(2);
	});
	
	Socket.addEventListener('message', function (event) {
		postMessage(event.data);
	});
	self.onmessage = function(e) {
		sendDataKey(e.data);
	};
	console.log('UpdateEnd worker');
function sendDataKey(key) {
        var datakey = {
            code: 0x00000001,
            key: key,
          };
          Socket.send(JSON.stringify(datakey));
    }
