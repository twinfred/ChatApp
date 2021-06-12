const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;
 
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
 
app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});