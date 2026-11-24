import http from 'node:http';

const server = http.createServer((request, response) => {
  if (request.url === '/slow') {
    setTimeout(() => {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ ok: true, delayMs: 100 }));
    }, 100);
    return;
  }
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ ok: true }));
});

server.listen(4173, '127.0.0.1', () => {
  console.log('Local test server listening at http://127.0.0.1:4173');
});
