const fs = require('fs');
const path = require('path');

const typeMap = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

function checkFile(res, pageUrl) {
  if (fs.existsSync(pageUrl)) {
    const extension = path.extname(pageUrl);
    const fileType = typeMap[extension];

    if (fileType.startsWith("image")) {
      // For image files
      const streamFile = fs.createReadStream(pageUrl);
      res.setHeader("Content-Type", fileType);
      res.writeHead(200);
      streamFile.pipe(res);
    } else {
      // For text-based files
      const fileRead = fs.readFileSync(pageUrl, "utf-8");
      res.setHeader("Content-Type", fileType);
      res.writeHead(200);
      res.end(fileRead);
    }
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
}

module.exports = checkFile;
