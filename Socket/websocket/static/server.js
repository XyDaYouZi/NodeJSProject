const fs = require('fs');
const mime = require('mime');
require('http')
    .createServer((req, res) => {
        const urlString = req.url;
        if (/image/g.test(urlString)) {
            const type = mime.getType(urlString);
            console.log(type);
            fs.readFile(`.${urlString}`, (err, content) => {
                res.writeHead(200, {
                    'content-type': type
                })
                res.end(content);
            });
        } else {
            switch (urlString) {
                case '/':
                    res.end('hello');
                    break;
                case '/home':
                    fs.readFile('./home.html', (err, content) => {
                        res.end(content);
                    });
                    break;
                case '/wsclient.js':
                    fs.readFile('./wsclient.js', (err, content) => {
                        res.end(content);
                    });
                    break;
                case '/index':
                    fs.readFile('./index.html', (err, content) => {
                        res.end(content);
                    });
                    break;
                default:
                    res.end('page 404');
            };
        }

    })
    .listen(8080, () => {
        console.log('http://localhost:8080');
    })