const net = require('net');

const server = net.createServer((socket) => {
    //socket.end('goodbye\n');
    console.log(socket);
    socket.on('data', (data) => {
        console.log(data.toString());
    })
    socket.write('前端,您好！')
}).on('error', (err) => {
    // 在这里处理错误。
    throw err;
});

// 获取任意未使用的端口。
server.listen('8080', () => {
    console.log('opened server on', server.address());
});