"use client";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import commonShareLogo from '../public/assest/commonShare-logo.svg';
import { StaticImageData } from "next/image";

type ImageProp = ( string | StaticImageData );
interface HeaderProps {
  commonShareLogo : ImageProp
};

const Header : React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between items-center py-4 pl-4 mr-[15px] border-b border-gray-light sticky top-0 z-50 bg-white w-full">
      <MainNav commonShareLogo={commonShareLogo}/>
      <MobileNav commonShareLogo={commonShareLogo}/>
    </header>
  )
}
export default Header