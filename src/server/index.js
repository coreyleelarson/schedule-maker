import bodyParser from 'body-parser';
import history from 'connect-history-api-fallback';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.post('/api/generate', (request, response) => {
  const { numOfCourts, numOfRounds, showProgResults, teams } = request.body;
  console.log('request body', request.body);
  response.send({ numOfCourts, numOfRounds, showProgResults, teams });
});

app.use(history());
app.use(express.static('build/web'));

app.listen(3000);