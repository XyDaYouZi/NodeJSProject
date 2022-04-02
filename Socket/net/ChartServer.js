const net = require('net');
const server = new net.createServer();
let clients = {};
let clientName = 0;
//此处的client就是socket
server.on('connection', (client) => {
    client.name = ++clientName;
    clients[client.name] = client;
    client.on('data', (msg) => {
        console.log(msg.toString());
        //自己写方法将信息广播至聊天室
        broadCast(client, msg.toString());
    })
    client.on('error', (e) => {
        console.log('client error' + e);
        client.end();
    })
    client.on('close', (data) => {
        delete clients[client.name];
        console.log(client.name + '下线了');
    })
})
server.on('error', (err) => {
    // 在这里处理错误。
    throw err;
})
server.listen('8081', () => {
    console.log('opened server on', server.address());
});
//将信息广播给所有在线的client
function broadCast(client, msg) {
    for (var key in clients) {
        clients[key].write(client.name + "说:" + msg);
    }
}