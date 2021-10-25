//import http from 'http'
const http = require('http');

/* const hostname = '127.0.0.1';
const port = 3000;

// Create server and configure the response of the server.
const server = http.createServer((req, res) => {
  
  //res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  //res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World'); 
});

// Set up the port and the hostname in that the server is running.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

// This method execute when the request is get whithout headers
http.get('http://localhost:3100/', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  console.log(contentType);
  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});

server.listen(3100);