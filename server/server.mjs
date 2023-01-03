import {WebSocketServer} from 'ws';
import http from "http";
import url from "url";
import path from "path";
import fs from "fs";

const baseDirectory = '../angular-app/dist/angular-app'
const webPort = 8081;
const wss = new WebSocketServer({port: 8080});

// websocket for real time display
wss.on('connection', function connection(ws) {
    console.log("Somebody connected to me.")

    ws.on('message', function message(data, isBinary) {
        console.log(`Received message, broadcasting to ${wss.clients.size - 1} clients.`);
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === 1) {
                client.send(data, {binary: isBinary});
            }
        });
    });
});

// simple http server to serve static application code.
// http.createServer(function (request, response) {
//     try {
//
//         let rurl = request.url;
//         if (rurl == "/") {
//             rurl = "/index.html";
//         }
//         const requestUrl = url.parse(rurl);
//
//         // need to use path.normalize so people can't access directories underneath baseDirectory
//         let fsPath = baseDirectory + path.normalize(requestUrl.pathname);
//         let fileStream = fs.createReadStream(fsPath);
//
//         // set strict mime type for js files
//         if (fsPath.endsWith(".js")) {
//             response.setHeader("Content-Type", "application/javascript")
//         }
//
//         fileStream.pipe(response)
//         fileStream.on('open', function () {
//             // positive answer. everything is good.
//             response.writeHead(200)
//         })
//         fileStream.on('error', function (e) {
//             // assume the file doesn't exist
//             response.writeHead(404)
//             response.end()
//         })
//     } catch (e) {
//         // end the response so browsers don't hang
//         response.writeHead(500)
//         response.end()
//         console.log(e.stack)
//     }
// }).listen(webPort)
