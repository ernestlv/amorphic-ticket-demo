var history = require('connect-history-api-fallback');

require('amorphic').listen(__dirname, null, function(app) {
    app.use(history())
});
