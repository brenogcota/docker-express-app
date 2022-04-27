const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
	  res.send('pong');
});

app.listen(process.env.PORT, () => {
	  console.log('listening on port 3000');
});
