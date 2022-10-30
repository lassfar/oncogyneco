import Link from "next/link";
import { CgMore } from "react-icons/cg";
import DynamicIcon from "../../UI/DynamicIcon";
import { EButtonVariant, EButtonSize } from "../../widgets/buttons/data";

const SpecialityCard = ({ item }) => {
  return (
    <div
      role="listitem"
      aria-label={item.title}
      className="h-96 w-full bg-cover bg-no-repeat"
      aria-roledescription={`${item.title}.`}
      style={{
        backgroundImage: `url('${item.imgUrl}')`,
        backgroundPosition: "center 80%",
      }}
    >
      <div
        className="flex flex-col w-full h-full justify-end text-white bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm hover:backdrop-blur-0 hover:bg-opacity-40 transition-all delay-100 ease-in-out p-6"
      >
        <h3 className="text-2xl font-bold uppercase mb-6">{item.title}</h3>
        <p className="mb-6 lg:w-2/3 w-full">{item.desc}</p>
        <Link
          href="/speciality"
          className={`${EButtonSize.small} ${EButtonVariant.secondary}`}
          aria-label={`Lire l'article sur ${item.title}.`}
        >
          <DynamicIcon iconName={CgMore} iconSize={"1rem"} iconClass="mr-1.5" />
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default SpecialityCard;
