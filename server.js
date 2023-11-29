const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  // res.end();

  // send html file
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });

 
  


});

// localhost is the default value for 2nd argument
server.listen(3001, 'localhost', () => {
  console.log('listening for requests on port 3001');
});