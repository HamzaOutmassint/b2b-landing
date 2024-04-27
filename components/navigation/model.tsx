import { Button } from "../ui/button";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import Image, { StaticImageData } from "next/image"
import { X } from "lucide-react"
import Link from "next/link";

type imageProp = string | StaticImageData;

interface modelProps {
    toggleModal: () => void,
    commonShareLogoWhite: imageProp
}

const Model: React.FC<modelProps> = ({ toggleModal, commonShareLogoWhite }) => {
    return (
        <div className="h-screen w-full absolute top-0 left-0 flex justify-center items-center">
            <div className="absolute bg-black opacity-50 h-screen w-full" onClick={toggleModal}></div>
            <div className="w-[350px] md:w-[400px] flex flex-col rounded-3xl bg-white opacity-100 z-10 overflow-hidden">
                <div className="flex justify-between bg-primary py-5 px-6">
                    <Image src={commonShareLogoWhite} priority={true} alt="common share logo" className="lg:h-[30px] md:h-5 w-fit" />
                    <button className="self-center rounded-lg opacity-70 ring-offset-white transition-opacity hover:opacity-100 ring-2 ring-offset-2 focus:outline-none focus:ring-2 focus:ring-navy-blue focus:ring-offset-2 disabled:pointer-events-none" onClick={toggleModal}>
                        <X size={20} strokeWidth={1.75} />
                    </button>
                </div>
                <form className="flex flex-col gap-4 px-6 py-5">
                    <div className="">
                        <Label htmlFor="email" className="text-black ">Email Address</Label>
                        <Input type="text" className="border border-gray-light mt-1" id="email" placeholder="Email Address" />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="email" className="text-black ">Password</Label>
                        <Input type="text" className="border border-gray-light mt-1" id="email" placeholder="Password" />
                        <Link href='https://www.commonshare.com/password/reset' className="self-end text-sm mt-2 text-blue-500 hover:text-blue-600">
                            Forgot password?
                        </Link>
                    </div>
                    <Button className="bg-primary hover:bg-navy-blue">
                        Login
                    </Button>
                </form>
                <div className='px-6 pb-5 pt-3 text-center text-xs text-black'>
                    Don&apos;t have an account?
                    <Link href='https://www.commonshare.com/register' className='text-blue-500 pl-1 hover:underline'>
                        Register here.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Model
