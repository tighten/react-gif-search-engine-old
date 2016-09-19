import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function(WrappedComponent) {
  class Auth extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        let hasLocalStorageUser = false;

        for (let key in localStorage) {
          if (key.startsWith("firebase:authUser:")) {
            hasLocalStorageUser = true;
          }
        }

        if (!hasLocalStorageUser) {
          browserHistory.push('/login');
        }
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Auth);
}
