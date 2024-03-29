import Button from "./../../UI/Button";
import * as bsIcon from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const NewsCard = ({ item }) => {
  return (
    <div className="flex flex-col xl:w-64 lg:w-64 md:w-64 sm:w-56 w-full flex-auto justify-between rounded-3xl bg-white transition-all delay-500 ease-linear shadow-md hover:shadow-xl mx-4 mb-8"
      role="listitem"
      aria-label={`${item.title}.`}
    >
      <div className="relative h-64 w-full bg-cover bg-center bg-no-repeat">
        <Image
          src={item.image}
          className="w-full h-full object-contain rounded-t-3xl"
          width="250"
          height="250"
          alt={`${item.title}.`}
        />
      </div>
      <div className="w-full flex-col px-4 my-4">
        <h3 className="text-2xl font-bold text-primary uppercase mb-4">
          {item.title || "--"}
        </h3>
        <article className="mb-6">
          {item.desc ? item.desc.substring(0, 100).concat("...") : "--"}
        </article>
        <Link href="/news">
          <Button
            btnSize="small"
            title="Lire l'article"
            bgColor="bg-primary"
            textColor="text-white"
            ringColor="ring-primary"
            iconName={bsIcon.BsFileText}
            addClass="ml-auto mt-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
