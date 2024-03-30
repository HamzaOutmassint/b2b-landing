import Image from "next/image"
import commonShareLogo from '../public/commonShare-logo.svg'
import Link from "next/link"

const Navabar = () => {
  return (
    <nav className='flex justify-between items-center p-4 border-b border-gray-light c'>
      <div className="flex justify-center items-center">
        <Image src={commonShareLogo} alt="common share logo" height={30} />
        <div className="text-sm">companies</div>
      </div>
      <ul className="flex justify-between text-base font-bold cursor-pointer">
        <li className="relative hover:text-primary transition ease-linear duration-150 px-3" id="login">Login</li>
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
