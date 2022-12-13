import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === 1) {
                client.send(data, { binary: isBinary });
            }
        });
    });
});