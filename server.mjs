import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello MY FRIEND');
  res.end();
}).listen(process.env.PORT);
