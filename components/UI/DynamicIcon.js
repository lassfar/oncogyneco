import React from 'react'

const DynamicIcon = ({iconName, iconSize, iconClass}) => {
  return (
    React.createElement(iconName, {
      style: {
        width: iconSize || "1.5rem",
        height: iconSize || "1.5rem",
        minHeight:  iconSize || "1.5rem",
        maxHeight:  iconSize || "1.5rem"
      },
      className: iconClass,
      "aria-hidden": true,
    })
  )
}

export default DynamicIcon
