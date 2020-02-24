const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-m1c2d.mongodb.net/aircec?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//req.querry => acessa os querry params (GET)
//req.params => acessa route params para edição ou delete (PUT, DELETE)
//req.body = acessa corpo da requisiçao (POST)


//app.use(cors({ origin: 'http://localhost:3333'}));


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
 
app.listen(3333);