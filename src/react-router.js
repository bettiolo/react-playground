let React = require('react');
let reactApp = React.createFactory(require('../components/app'));

module.exports = (app) => {
  app.get('/', (req, res) => {
    let reactHtml = React.renderToString(reactApp({}));
    res.render('index.ejs', { reactOutput: reactHtml });
  });
};
