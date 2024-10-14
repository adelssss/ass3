const cors = require('cors');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const blogRoutes = require('./routes/blogs');
const blogModel = require('./models/blog');

const app = express();
app.use(cors()); 
app.use(express.json()); 
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

MongoClient.connect(mongoUri)
  .then((client) => {
    const db = client.db('blogdb');
    blogModel.initializeDatabase(db);
    console.log('Connected to MongoDB');

    app.use('/', blogRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));
