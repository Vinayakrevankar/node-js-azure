const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('OK'));
app.get('/api/hello', (req, res) => res.json({ msg: 'hello from azure' }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));