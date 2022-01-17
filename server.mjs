// import express from 'express';
// import cors from 'cors';
// import Gun from 'gun';

// const PORT = process.env.PORT || 8000;

// const server = express();
// server.use(Gun.serve);
// // server.use(cors())

// server.get('/', (req, res) => {
//   res.send('server is responding').end();
// })

// server.listen(PORT);

// Gun({axe: false, web: server})

// console.log(`Express and Gun listening on port: ${PORT}`)

import { createServer } from 'http';
import GUN from 'gun';

const PORT = process.env.PORT || 8000;
const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
  }
}).listen(PORT);
const gun = GUN({ axe: false, web: server });
