const express = require('express');
const helmet = require('helmet');
const cors = require('cors')


const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

require('dotenv').config();

const { PORT = 3000} = process.env;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on port ${PORT}`);
});
