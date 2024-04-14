"use client";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import commonShareLogo from '../../public/assest/logo/commonShare-logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 pl-4 mr-[15px] border-b border-gray-light sticky top-0 z-50 bg-white w-full">
      <MainNav commonShareLogo={commonShareLogo}/>
      <MobileNav commonShareLogo={commonShareLogo}/>
    </header>
  )
}
export default Header