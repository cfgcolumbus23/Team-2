const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'fr5_db'
});

// Connect to MySQL
db.connect(err => {
  if (err) { console.error('error connecting: ' + err.stack); return; }
  console.log('Connected to MySQL database as id ' + db.threadId);
});

// Define routes
app.get('/api/data', (req, res) => {
  // Query your MySQL database
  db.query('SELECT * FROM your_table', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
