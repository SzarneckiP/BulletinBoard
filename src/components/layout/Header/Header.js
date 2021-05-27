import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';

const Component = ({ className }) => (
  <header className={clsx(className, styles.root)}>
    <Grid>
      <Row between="md" middle="xs">
        <Col md={3} lg={2}>
          <Link to='/'>
            <div className={styles.logo}>
              <DashboardTwoToneIcon />
              <span className={styles.name}>Bulletin Board</span>
            </div>
          </Link>
        </Col>
        <Col>
          <nav>
            <NavLink className={styles.nounderline} to='/login' activeClassName='active'>Login</NavLink>
          </nav>
        </Col>
      </Row>
    </Grid>
  </header>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
