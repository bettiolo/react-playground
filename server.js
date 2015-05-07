let log = require('debug')('app');
let warn = require('debug')('app:warning');

log('Initialising...');
require('blocked')((ms) => warn('Event loop blocked for %sms', ms | 0));
let path = require('path');
let express = require('express');

log('Configuring Express...');
let app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

log('Registering babel transpiler...');
require('babel/register');

log('Loading React router...');
require('./src/react-router')(app);

log('Starting express...');
app.listen(app.get('port'), () => log('Express listening on port ' + app.get('port')));
