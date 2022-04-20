const express = require('express');
const cors    = require('cors');
const path    = require('path');

const mainRoute   = require('./routes/mainRoute');
const apiRoute = require('./routes/apiRoute');

const app = express();

app.enable('view cache');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.static('public'));

app.use('/', mainRoute);
app.use('/api', apiRoute);

const PORT = process.env.PORT || 5001;

try {
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
} catch(e) {
    console.log('Ошибка сервера', e);
}
