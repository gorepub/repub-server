const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ express: 'Yeahhh from expresss' });
});

app.listen(port, () => console.log(`Running on localhost:${port}`));
