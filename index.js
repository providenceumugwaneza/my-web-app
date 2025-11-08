const http = require('http');

// Define the port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response to the client
  res.end('Hello, World! This is my first Node.js server without Express.');
});

// Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
