const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to dummy backend");
});

server.listen(3000, () => {
    console.log("Backend running on port 3000");
});