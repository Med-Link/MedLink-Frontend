const dotenv = require('dotenv');
dotenv.config();

const config = {
    GoogleMapsAPI: process.env.REACT_APP_GOOGLEMAPS_API_KEY
}
module.exports = config;

