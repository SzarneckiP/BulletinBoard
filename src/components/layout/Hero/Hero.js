import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Hero.module.scss';

const Component = ({ className, titleText, imageSrc }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} alt='bulletin board' />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  titleText: PropTypes.string,
  imageSrc: PropTypes.string,
};


export {
  Component as Hero,
  Component as HeroComponent,
};
