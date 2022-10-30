import React from 'react';

const Button = ({
  customclass,
  variant,
  size,
  otherProps,
  children,
}) => {
  return (
    <button
      className={`${customclass} ${variant} ${size}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
