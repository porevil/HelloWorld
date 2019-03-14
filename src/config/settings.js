let WEBSOCKER_URL = 'ws://localhost:3000/websocket';
if (process.env.NODE_ENV === 'production') {
    WEBSOCKER_URL = ''; // your production server url
}

export const settings = {
  env: process.env.NODE_ENV,
  WEBSOCKER_URL,
};

export default settings;