const net = require('net');
const client = net.createConnection({ port: 8080 }, () => {
    // 'connect' 监听器。
    client.write('hello server,后端您好!\r\n');
});
//监听数据
client.on('data', (data) => {
    console.log(data.toString());
    //client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});