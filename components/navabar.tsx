import Image from "next/image"
import commonShareLogo from '../public/assest/icons/commonShare-logo.svg'
import searchIcon from '../public/assest/icons/search.svg'
import Link from "next/link"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"

const Navabar = () => {
  return (
    <nav className='grid grid-cols-5 place-items-center place-content-start py-4 pl-4 border-b border-gray-light fixed z-50 bg-white w-full'>
      <Link href='/'  className="place-self-start">
        <Image src={commonShareLogo} alt="common share logo" height={30} />
      </Link>
      <form className="text-sm col-span-3 place-self-start flex justify-center items-center border border-gray-light rounded-2xl">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Companies" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Sumsang</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex relative items-center ml-[2px]">
          <Input type="text" placeholder="Search Sustainable Companies" className="w-[35rem] border-y border-r border-l-none border-gray-light px-4 py-2 focus-visible:ring-offset-0 rounded-l-none rounded-r-2xl" />
          <Image src={searchIcon} alt="search icon" height={17} className="absolute right-4" />
        </div>
      </form>
      <ul className="flex justify-between text-base font-bold cursor-pointer">
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3" id="login">
          Login
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3 mx-1" id="sign-up">
          <Link href='https://www.commonshare.com/register'> Sign up </Link>
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3 ml-1" id="explore">
          <Link href='https://www.commonshare.com/companies'>Explore</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navabar
