const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests here
});

server.listen(80, 'your_server_ip', () => {
  console.log('Server is running...');
});
