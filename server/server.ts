import * as express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => `server started on port ${port}...`);

app.get('/', (req, res) => res.send('hello'));