const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.get('/api/getStatus', (req, res) => {
  res.json({
    name: "Pasha",
    status: "Eblan"
  })
});

app.listen(PORT, () => {
  console.log(`Server successfully started on ${PORT}`)
});
