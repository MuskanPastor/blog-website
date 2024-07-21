const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to serve JSON data
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
