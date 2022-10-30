
import DynamicIcon from './DynamicIcon';

const IconBtn = ({ iconName, btnColor, iconColor, ringColor, addClass, otherProps }) => {
  return (
    <button
      {...otherProps}
      type="button"
      className={`w-12 h-12 flex items-center justify-center rounded-full bg-${btnColor} focus:ring-2 ring-${ringColor} ring-opacity-50 cursor-pointer ${addClass}`}
    >
      <DynamicIcon iconName={iconName} iconClass={`text-${iconColor}`} />
    </button>
  )
}

export default IconBtn
