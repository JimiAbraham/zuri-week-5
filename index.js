const http = require('http');

const fs = require('fs').promises




http.createServer(async function(req, res) {

    // console.log(req.url)

    if (req.url == "/home" || req.url == "/") {


        let resp = await fs.readFile('./public/home.html');
        res.writeHead(200);
        res.write(resp);
        res.end();

    } else if (req.url == "/about") {

        let resp = await fs.readFile('./public/about.html');
        res.writeHead(200);
        res.write(resp);
        res.end();
    } else if (req.url == "/contact") {
        let resp = await fs.readFile('./public/contact.html');
        res.writeHead(200);
        res.write(resp);
        res.end();

    }


}).listen(3050);