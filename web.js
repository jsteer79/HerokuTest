var   Express  = require( 'express' )
    , logfmt   = require( "logfmt" )
    , NodeRest = require( './src/NodeRest.js' )
    , app      = Express();

app.use( logfmt.requestLogger() )
   .use( Express.json() )
   .use( Express.urlencoded() )
   .use( Express.static( __dirname + '/public' ) );

NodeRest( app, 'foo' );
NodeRest( app, 'bar' );

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});