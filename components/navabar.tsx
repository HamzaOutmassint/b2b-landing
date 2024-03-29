import Image from "next/image"
import commonShareLogo from '../public/commonShare-logo.svg'
import Link from "next/link"

const Navabar = () => {
  return (
    <section className='flex justify-between items-center p-4 border-b border-gray-light'>
      <div className="flex justify-center items-center">
        <Image src={commonShareLogo} alt="common share logo" height={30} />
        <div className="text-sm">companies</div>
      </div>
      <ul className="flex justify-between w-56 text-base font-bold cursor-pointer relative">
        <li className="hover:text-primary transition ease-linear duration-150" id="login">Login</li>
        <li className="hover:text-primary transition ease-linear duration-150 #sign-up"><Link href='https://www.commonshare.com/register'> Sign up </Link></li>
        <li className="hover:text-primary transition ease-linear duration-150 #explore"><Link href='https://www.commonshare.com/companies'>Explore</Link></li>
      </ul>
    </section>
  )
}

export default Navabar
