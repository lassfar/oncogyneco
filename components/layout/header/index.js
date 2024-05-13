import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { CgPhone, CgMenu } from "react-icons/cg";
import Button from "./../../UI/Button";
import HeaderMobile from "./HeaderMobile";
import { EButtonVariant, EButtonSize } from "../../widgets/buttons/data";
import DynamicIcon from "../../UI/DynamicIcon";

const AppHeader = () => {
  const router = useRouter();
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(router.pathname);
  }, [router]);

  const [links] = useState([
    { link: "/", text: "Accueil", ariaLabel: "Page d'accueil" },
    {
      link: "/presentation",
      text: "Qui somme-nous",
      ariaLabel: "Page de présentation",
    },
    {
      link: "/speciality",
      text: "Notre Spécialité",
      ariaLabel: "Page des spécialités",
    },
    { link: "/news", text: "Actualités", ariaLabel: "Page des articles" },
    // { link: '/contacts', text: 'Contact' },
  ]);

  const openMenu = () => {
    let menu = document.getElementById("mobileMenu");
    // menu.classList.remove('hidden');
    menu.classList.remove("hidden");
    menu.classList.remove("animate-slide-out-menu");
    menu.classList.add("animate-slide-in-menu");
  };

  return (
    <header
      className="relative flex items-center flex-wrap xl:justify-end lg:justify-end bg-primary shadow-sm px-6 z-50"
      aria-label="Entête de Site web"
    >
      <div className="flex justify-between items-center xl:absolute lg:absolute xl:w-2/12 lg:w-2/12 w-full xl:top-0 lg:top-0 xl:left-6 lg:left-6 xl:pr-0 lg:pr-0 pr-6 z-50 bg-white border-b-4 border-fourth xl:shadow lg:shadow">
        <Image
          src="/images/logo-new.svg"
          className="object-contain bg-transparent inline-flex"
          width="250"
          height="180"
          alt="Centre d'encologie mohamed 6 Logo"
        />
        <div className="xl:hidden lg:hidden flex bottom-0 right-6">
          <a href="#" onClick={openMenu}>
            <Button
              iconName={CgMenu}
              ringColor="ring-secondary"
              addClass="bg-secondary text-white"
            />
          </a>
        </div>

        <HeaderMobile isHidden="" />
      </div>

      <nav
        role="menu"
        className="xl:flex lg:flex hidden items-center justify-center px-2"
      >
        {links.map((item, idx) => (
          <div role="menuitem" className="px-2 py-6" key={idx}>
            <Link
              href={item.link}
              className={`uppercase border-b-4 text-white hover:text-fourth-dark ${
                pathName === item.link
                  ? "border-fourth text-fourth"
                  : "border-transparent"
              } transition delay-100 rounded px-4 py-6`}
              aria-label={item.text}
            >
              {item.text}
            </Link>
          </div>
        ))}
        <Link
          href="/contact"
          className={`${EButtonVariant.secondary} ${EButtonSize.normal} ${
            pathName === "/contact" && "border-2 border-fourth"
          }`}
          role="menuitem"
          aria-label="contact"
        >
          <DynamicIcon iconName={CgPhone} iconClass={"mr-2"} />
          {"Contact"}
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
