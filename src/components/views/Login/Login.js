import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Login.module.scss';

import { Link } from 'react-router-dom';


const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Login</h2>
    <p>Please authorize before using this site</p>
    <Link className={clsx(styles.loginBtn, styles.loginBtnGoogle)} to="https://google.com">
      Login with Google
    </Link>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Login,
  // Container as Login,
  Component as LoginComponent,
};
