// server.js
import path from 'path';
import express from 'express';
import router from './router.js';

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Middleware pour les fichiers statiques
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
