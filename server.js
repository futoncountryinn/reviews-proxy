const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.get('/loaderio-9e34130a1504bcf458ee72dab275d03f', (req, res) => {
  res.sendFile(__dirname + '/loaderio-9e34130a1504bcf458ee72dab275d03f.txt');
});
app.use('*', cors(), express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

