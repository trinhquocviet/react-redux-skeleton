const IS_PRODUCTION = !!(process.env.NODE_ENV === 'production') || false;
const HTTP_TIMEOUT = process.env.REACT_APP_HTTP_TIMEOUT || 0;

const GA_TRACKING_ID = process.env.REACT_APP_GA || '';

const NOTI_AUTO_HIDE_TIME = 5000;
const NOTI_MAX_DISPLAY = 5;

export {
  IS_PRODUCTION,
  HTTP_TIMEOUT,
  GA_TRACKING_ID,
  NOTI_AUTO_HIDE_TIME,
  NOTI_MAX_DISPLAY,
};
