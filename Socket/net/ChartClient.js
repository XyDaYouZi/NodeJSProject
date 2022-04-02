const net = require('net');
const readline = require("readline");
var port = 8081;
var host = '127.0.0.1';
var socket = new net.Socket();
socket.setEncoding = 'UTF-8';
socket.connect(port, host, () => {
    socket.write('hello server.')
})
socket.on('data', (msg) => {
    console.log(msg.toString());
    say();
})

socket.on('error', (err) => {
    console.log(err);
});

socket.on('close', () => {
    console.log("连接关闭")
})

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function say() {
    r1.question('请输入:\n', (inputMsg) => {
        if (inputMsg != 'bye') {
            socket.write(inputMsg + '\n');
        } else {
            socket.destroy();
            r1.close;
        }
    })
}
