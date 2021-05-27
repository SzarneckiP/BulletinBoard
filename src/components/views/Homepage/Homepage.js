import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Hero } from '../../layout/Hero/Hero';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Hero titleText='Your Local Bulletin Board' imageSrc='https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?cs=srgb&dl=pexels-mikechie-esparagoza-1742370.jpg&fm=jpg' />
    <h2>Homepage</h2>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};


export {
  Component as Homepage,
  Component as HomepageComponent,
};
