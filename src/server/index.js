import bodyParser from 'body-parser';
import history from 'connect-history-api-fallback';
import { exec } from 'child_process';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.post('/api/generate', (request, response) => {
  // const { numOfCourts, numOfRounds, showProgResults, teams } = request.body;
  // This is where I will execute the python script from...

  setTimeout(() => {
    response.send({ data: request.body });
  }, 3000);
});

app.use(history());
app.use(express.static('build/web'));

app.listen(3000);