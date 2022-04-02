const WebSocket = require('ws');//先安装ws
const wss = new WebSocket.Server({ port: 8081 });
wss.on('connection', function connection(ws) {
    ws.on('open', function open() {
        console.log('connected');
        ws.send('hello');
    });
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    ws.on('close', function close() {
        console.log('disconnected');
    });
});
