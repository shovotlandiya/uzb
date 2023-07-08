import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { useTranslation } from "next-i18next";

import Container from "@/components/Container";
import NavLink from "@/components/NavLink";
import Language from "@/components/Languages/Languages";
import Swiper from "@/components/Swiper";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

const Navbar = () => {
  const [backChange, setBackChange] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 10) {
        setBackChange(true);
      } else {
        setBackChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scrool", changeNavbarColor);
  }, []);

  const { i18n, t } = useTranslation();

  return (
    <>
      <nav
        className={cn({
          ["absolute md:fixed top-0 left-0 z-40  right-0  bg-white/100   ease-in duration-300"]: true,
          [" bg-white/80"]: Boolean(backChange),
        })}
      >
        <Container className="flex flex-col md:flex-row md:items-center justify-between py-5 ">
          <div className="md:flex items-center">
            <div className="flex justify-between">
              <Link href="/">
                <Image src="/logo.svg" alt="Site Logo" width={40} height={40} />
              </Link>
              <span onClick={() => setOpen(!open)} className="md:hidden">
                burger
              </span>
            </div>
            <ul className="hidden md:flex flex-col md:flex-row md:items-center">
              <NavLink href="/muzeys" className="navItem">
                {t("navbar:muzeys")}
              </NavLink>
              <NavLink href="/genders" className="navItem">
                {t("navbar:genders")}
              </NavLink>
              <NavLink href="/jadids" className="navItem">
                {t("navbar:jadids")}
              </NavLink>
              <NavLink href="/about" className="navItem">
                {t("navbar:about")}
              </NavLink>
            </ul>
          </div>
          <Language />
        </Container>
        {/* {open && <MobileMenu className="-translate-x-full" />} */}
        <MobileMenu className={{ "-translate-x-full": open }} />
      </nav>
      {/* <Swiper /> */}
    </>
  );
};

export default Navbar;
