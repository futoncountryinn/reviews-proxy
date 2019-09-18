const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.get('/loaderio-553d004fe17f1afcb7139ccac98d8ba6', (req, res) => {
  res.sendFile(__dirname + '/loaderio-553d004fe17f1afcb7139ccac98d8ba6.txt');
});
app.use('*', cors(), express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

