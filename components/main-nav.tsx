import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import {Search } from "lucide-react";

type ImageProp = string | StaticImageData;
interface MainNavProps {
  commonShareLogo : ImageProp
}
const MainNav : React.FC<MainNavProps> = ({commonShareLogo}) => {
  return (
    <nav className='hidden lg:flex justify-between items-center w-full pr-2'>
      <div className='flex'>
        <Link href='/' className="self-center mr-8">
          <Image src={commonShareLogo} alt="common share logo" height={30} />
        </Link>
        <form className="text-sm col-span-3 flex self-start justify-center items-center border border-gray-light rounded-2xl">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Companies" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Sumsang</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative items-center ml-[2px]">
            <Input type="text" placeholder="Search Sustainable Companies" className="w-[28rem] border-y border-r border-l-none border-gray-light px-4 py-2 focus-visible:ring-offset-0 rounded-l-none rounded-r-2xl" />
            <Search className="absolute right-4 top-2.5 w-[17px] h-[17px]"/>
          </div>
        </form>
      </div>
      <ul className="hidden lg:flex justify-between text-base font-bold cursor-pointer col-span-2 self-center">
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3" id="login">
          Login
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3 mx-1" id="sign-up">
          <Link href='https://www.commonshare.com/register'> Sign up </Link>
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3" id="explore">
          <Link href='https://www.commonshare.com/companies'>Explore</Link>
        </li>
      </ul>
    </nav>

  )
}

export default MainNav
