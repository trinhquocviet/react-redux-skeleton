/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */

import React, { Component } from 'react';
import { GA_TRACKING_ID, IS_PRODUCTION } from 'common/constants/env';
import ReactGA from 'react-ga';

const ops = {
  debug: !IS_PRODUCTION,
};

ReactGA.initialize(GA_TRACKING_ID, ops);

export default (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      ...options,
      page,
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

const eventTrack = (options = {}) => {
  ReactGA.event({
    ...options,
  });
};

export { eventTrack };
