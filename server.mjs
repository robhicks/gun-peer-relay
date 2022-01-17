import express from 'express';
import cors from 'cors';
import Gun from 'gun';

const server = express();
server.use(cors)

server.listen(process.env.PORT || 8000);

Gun({web: server})