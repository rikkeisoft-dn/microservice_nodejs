const express = require('express');
const instance = express();
const PortProperties= require('./../extension/PortProperties.json');
require('./config/config.js')(instance);
require('./config/route.js')(instance);
instance.listen(PortProperties.MOVIE_SERVICE_PORT, () => {
    console.log("Server api is running on port "+PortProperties.MOVIE_SERVICE_PORT);
});