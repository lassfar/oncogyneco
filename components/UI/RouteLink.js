import DynamicIcon from "./DynamicIcon"
import Link from 'next/link';

const RouteLink = ({btnSize, title, bgColor, textColor, ringColor, iconName, addClass, link = '#'}) => {
  if (btnSize === "small") {
    return (
      <Link href={link} className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-2 ${ringColor} ring-opacity-50 px-2.5 py-1.5 ${addClass}`}>
        { iconName && <DynamicIcon iconName={iconName} iconClass={title && 'mr-1'} iconSize="1rem" /> }
        <span className="text-sm">{title}</span>
      </Link>
    )
  }
  else if (btnSize === "large") {
    return (
      <Link href={link} className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-6 py-2 ${addClass}`}>
        { iconName && <DynamicIcon iconName={iconName} iconClass={title && 'mr-2'} iconSize="2rem" /> }
        <span className="text-lg">{title}</span>
      </Link>
    )
  }
  else {
    return (
      <Link href={link} className={`flex items-center w-max ${bgColor} ${textColor} rounded focus:ring-4 ${ringColor} ring-opacity-50 px-4 py-2 ${addClass}`}>
        { iconName && <DynamicIcon iconName={iconName} iconClass={title && 'mr-2'} /> }
        {title}
      </Link>
    )
  }

}

export default RouteLink
