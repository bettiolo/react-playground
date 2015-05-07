let log = require('debug')('app');
let warn = require('debug')('app:warning');
let path = require('path');
let blocked = require('blocked');
let express = require('express');
let app = express();

blocked((ms) => warn('Event loop blocked for %sms', ms | 0));

app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

require('babel/register');
require('./src/react-router')(app);

app.listen(app.get('port'), () => log('Server listening on port ' + app.get('port')));
