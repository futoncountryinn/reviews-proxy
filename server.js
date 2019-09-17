const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(morgan('dev'));
app.use('*', cors(), express.static(path.join(__dirname, 'public')));
app
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

