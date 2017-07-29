var express = require('express');

var app = express();

var router = require('./controller/router.js');

app.use(express.static('./public'));
app.use(express.static('./uploads'));

app.set('view engine','ejs');

app.get('/',router.getIndex);
app.get('/:albumName',router.getAlbum);

app.listen(3000);

