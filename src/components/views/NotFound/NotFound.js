import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import styles from './NotFound.module.scss';
import Button from '@material-ui/core/Button';

const Component = className => (
  <div className={clsx(className, styles.root,)}>
    <Grid>
      <h1 className="text-center">404 Not Found</h1>
      <Link className={styles.link} to='/'>
        <Button className={styles.btn} variant="contained" color="primary">
          Back to Homepage...
        </Button>
      </Link>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
