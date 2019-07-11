import React from 'react';
import '../../styles/Icon.scss';
import classNames from 'classnames';


export const Icon = ({ path, className = '', onClick = () => {} }) => {
  const classes = classNames('icon', className);
  return (
    <span className={classes} onClick={onClick}>
      <img src={path} />
    </span>
  );
};
