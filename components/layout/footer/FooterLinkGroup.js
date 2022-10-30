

import Link from 'next/link';
import DynamicIcon from './../../UI/DynamicIcon';


const FooterLinkGroup = ({item}) => {
  return (
    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full my-8">
      <h2 className="text-xl font-medium mb-4">{item.title}</h2>
      <div className="flex flex-col">
        {item.links.map((elem, idx2) => (
          <Link href={elem.to} key={idx2*.77} className="flex flex-nowrap my-1">
            <DynamicIcon iconName={elem.icon} />
            <span className="font-light flex-auto ml-2">{ elem.text }</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterLinkGroup
