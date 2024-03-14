
const express = require('express');
const router = require('./routes');
const port = 3000;
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})