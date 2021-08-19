// export const GoogleMapsAPI = 'AIzaSyCIhmOKfurA9XKCt_4N8tvZj7so86bTtU4';
const dotenv = require('dotenv');
dotenv.config();

const config = {
    GoogleMapsAPI: process.env.REACT_APP_GOOGLEMAPS_API_KEY
}
module.exports = config;