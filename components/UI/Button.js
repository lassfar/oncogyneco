import DynamicIcon from "./DynamicIcon";

const Button = ({
  btnSize,
  title,
  bgColor,
  textColor,
  ringColor,
  iconName,
  addClass,
  otherProps,
}) => {
  if (btnSize === "small") {
    return (
      <button
        className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-2 ${ringColor} ring-opacity-50 px-2.5 py-1.5 ${addClass}`}
        {...otherProps}
      >
        {iconName && (
          <DynamicIcon
            iconName={iconName}
            iconClass={title && "mr-1"}
            iconSize="1rem"
          />
        )}
        <span className="text-sm">{title}</span>
      </button>
    );
  } else if (btnSize === "large") {
    return (
      <button
        className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-6 py-2 ${addClass}`}
        {...otherProps}
      >
        {iconName && (
          <DynamicIcon
            iconName={iconName}
            iconClass={title && "mr-2"}
            iconSize="2rem"
          />
        )}
        <span className="text-lg">{title}</span>
      </button>
    );
  } else {
    return (
      <button
        className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-4 py-2 ${addClass}`}
        {...otherProps}
      >
        {iconName && (
          <DynamicIcon iconName={iconName} iconClass={title && "mr-2"} />
        )}
        {title}
      </button>
    );
  }
};

export default Button;
