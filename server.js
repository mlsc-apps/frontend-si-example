import http from 'http';
import app from './app.js';

let httpport = process.env.HTTP_PORT || 3000;

const httpserver = http.createServer(app);

httpserver.listen(httpport, function(err) {
        app.hostname = httpserver.address().address.replace('::', 'localhost');
        app.port = httpserver.address().port;
});
console.log(new Date() + ': http server started on port ' + httpport);
