import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Search } from "lucide-react";


type ImageProp = string | StaticImageData;

interface MainNavProps {
  commonShareLogo: ImageProp,
  toggleModal: () => void
}

const MainNav: React.FC<MainNavProps> = ({ commonShareLogo, toggleModal }) => {
  return (
    <nav className='hidden md:flex justify-between items-center w-full pr-2'>
      <div className='flex'>
        <Link href='/' className="self-center mr-8">
          <Image src={commonShareLogo} priority={true} alt="common share logo" className="lg:h-[30px] md:h-5 w-fit" />
        </Link>
        <form className="lg:text-sm md:text-xs col-span-3 flex self-start justify-center items-center border border-gray-light rounded-2xl">
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
            <Input type="text" placeholder="Search Sustainable Companies" className="lg:w-[28rem] md:w-72 exactly-1024:w-80 lg:text-sm md:text-xs border-y border-r border-l-none border-gray-light lg:px-4 lg:py-2  focus-visible:ring-offset-0 rounded-l-none rounded-r-2xl" id="search-input-lg" />
            <Search className="absolute right-4 lg:top-2.5 md:top-2 w-[17px] h-[17px]" />
          </div>
        </form>
      </div>
      <ul className="flex justify-between lg:text-base md:text-xs font-bold cursor-pointer col-span-2 self-center">
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3 w-" id="login" onClick={toggleModal}>
          Login
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3 mx-1" id="sign-up">
          <Link href='https://www.commonshare.com/register'> Sign up </Link>
        </li>
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3" id="explore">
          <Link href='https://marketplace.commonshare.com/'>Explore</Link>
        </li>
      </ul>
    </nav>

  )
}

export default MainNav
