const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Backend en cours d\'exécution.');
  });

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Serveur Node.js en cours d'exécution sur le port ${port}`);
});


