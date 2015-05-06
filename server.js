'use strict';
let log = require('debug')('app');
let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => log('Server listening on port ' + app.get('port')));
