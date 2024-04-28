"use client";

import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import commonShareLogo from '../../public/assest/logo/commonShare-logo.svg';
import commonShareLogoWhite from '../../public/assest/logo/commonShare-logo-white.png';
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicModelComponent = dynamic(()=> import('./model') , {
  ssr : false, 
  loading : () => <p>i am fetching </p>
})


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <header className="flex justify-between items-center py-4 pl-4 mr-[15px] border-b border-gray-light sticky top-0 z-50 bg-white w-full">
      {isMobileView ? (
        <MobileNav
          commonShareLogo={commonShareLogo}
          toggleModal={toggleModal}
        />
      ) : (
        <MainNav
          commonShareLogo={commonShareLogo}
          toggleModal={toggleModal}
        />
      )}
      {
        isModalOpen && <DynamicModelComponent toggleModal={toggleModal} commonShareLogoWhite={commonShareLogoWhite} />
      }
    </header>
  )
}
export default Header