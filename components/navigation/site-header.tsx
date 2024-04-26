"use client";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import commonShareLogo from '../../public/assest/logo/commonShare-logo.svg';
import commonShareLogoWhite from '../../public/assest/logo/commonShare-logo-white.png';
import { useEffect, useState } from "react";
import Model from "./model";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); 
  };

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
      <MainNav 
        commonShareLogo={commonShareLogo} 
        toggleModal={toggleModal}
      />
      <MobileNav 
        commonShareLogo={commonShareLogo} 
        toggleModal={toggleModal}
      />
      {
        isModalOpen && <Model  toggleModal={toggleModal} commonShareLogoWhite={commonShareLogoWhite}/>
      }
    </header>
  )
}
export default Header