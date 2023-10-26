const http = require('http');
const { PORT = 8000 } = process.env;
const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');
const checkFile = require('./helpers/validate')

function onRequest(req, res) {
  const url = req.url;
  let pageUrl;

  if (url === '/') {
    pageUrl = path.join(PUBLIC_DIRECTORY, 'index.html');
  } else if (url === '/cars') {
    pageUrl = path.join(PUBLIC_DIRECTORY, 'cari-mobil.html');
  } else {
    pageUrl = path.join(PUBLIC_DIRECTORY, url);
  }

  checkFile(res, pageUrl);
}

const server = http.createServer(onRequest);

server.listen(PORT, 'localhost', () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
});