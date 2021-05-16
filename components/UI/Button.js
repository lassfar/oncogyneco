import DynamicIcon from "./DynamicIcon"

const Button = ({btnSize, title, bgColor, textColor, ringColor, iconName, addClass}) => {
  if (btnSize === "small") {
    return (
      <button className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-2 ${ringColor} ring-opacity-50 px-2.5 py-1.5 ${addClass}`}>
        <span className="text-sm">{title}</span>
        { iconName && <DynamicIcon iconName={iconName} iconClass="ml-1" iconSize="1rem" /> }
      </button>
    )
  }
  else if (btnSize === "large") {
    return (
      <button className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-6 py-2 ${addClass}`}>
        <span className="text-lg">{title}</span>
        { iconName && <DynamicIcon iconName={iconName} iconClass="ml-2" iconSize="2rem" /> }
      </button>
    )
  }
  else {
    return (
      <button className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-4 py-2 ${addClass}`}>
        {title}
        { iconName && <DynamicIcon iconName={iconName} iconClass="ml-2" /> }
      </button>
    )
  }

}

export default Button
