module.exports = function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, Node.js on Unit from the distributed function!")
}
