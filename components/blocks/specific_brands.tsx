'use client';

import { ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import HangerIcon from '../../public/assest/icons/hanger.svg';
import NeckLaceIcon from  '../../public/assest/icons/necklace.svg';
import TreeIcon from  '../../public/assest/icons/tree.svg';
import ClothesIcon from  '../../public/assest/icons/clothes.svg';


const SpecificBrands = () => {
  return (
    <div className="container mx-auto md:px-8 lg:px-24">
      <div className="flex flex-col justify-center items-center xs:mt-12 md:mt-8 lg:mt-16 xl:mt-12">
        <h1 className="font-semibold text-2xl text-black tracking-wide mb-6">
          Looking for a Specific Sustainable Brand?
        </h1>
        <p className="md:text-center lg:px-52 xl:px-32 text-lg text-gray-bold">
          You can also browse the best CommonShare brands and retailers in the United Kingdom by category.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-16 pb-20">
        <div className="flex flex-col">
          <div className="flex justify-center items-center border-b border-gray-light pb-8">
            <span className="specific-brands-icons p-6 rounded-lg">
              <Image src={HangerIcon} alt="hanger icon" height={35} />
            </span>
          </div>
          <h1 className="h-[84px] font-semibold text-center py-6">Ethical Fashion Leaders</h1>
          <Link href='#' className="w-fit flex items-center justify-center self-center font-semibold text-primary hover:text-navy-blue transition duration-150 ease-linear">
            <span className="mr-1">See list</span> <ChevronRight size={20}/>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center border-b border-gray-light pb-8">
            <span className="specific-brands-icons p-6 rounded-lg">
              <Image src={ClothesIcon} alt="hanger icon" height={35} />
            </span>
          </div>
          <h1 className="font-semibold text-center py-6">Outdoor and Activewear Specialists</h1>
          <Link href='#' className="w-fit flex items-center justify-center self-center font-semibold text-primary hover:text-navy-blue transition duration-150 ease-linear">
            <span className="mr-1">See list</span> <ChevronRight size={20}/>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center border-b border-gray-light pb-8">
            <span className="specific-brands-icons p-6 rounded-lg">
              <Image src={TreeIcon} alt="hanger icon" height={35} />
            </span>
          </div>
          <h1 className="font-semibold text-center py-6 px-8">Innovative Eco-Friendly Fashion</h1>
          <Link href='#' className="w-fit flex items-center justify-center self-center font-semibold text-primary hover:text-navy-blue transition duration-150 ease-linear">
            <span className="mr-1">See list</span> <ChevronRight size={20}/>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center border-b border-gray-light pb-8">
            <span className="specific-brands-icons p-6 rounded-lg">
              <Image src={NeckLaceIcon} alt="hanger icon" height={35} />
            </span>
          </div>
          <h1 className="font-semibold text-center py-6 px-8">Accessories with a Purpose</h1>
          <Link href='#' className="w-fit flex items-center justify-center self-center font-semibold text-primary hover:text-navy-blue transition duration-150 ease-linear">
            <span className="mr-1">See list</span> <ChevronRight size={20}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificBrands;
