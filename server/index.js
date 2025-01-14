const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4005;

// controllers
// insert controller routes here

app.use(cors());
app.use(express.json());


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));