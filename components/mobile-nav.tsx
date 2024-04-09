import { CircleUserRound, Compass, LockKeyhole, Menu, Search } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, } from "@/components/ui/sheet"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'
import React from 'react'
import { Input } from './ui/input'

type ImageProp = string | StaticImageData
interface MobileNavProps {
    commonShareLogo: ImageProp
}
const MobileNav: React.FC<MobileNavProps> = ({ commonShareLogo }) => {
    const [open, setOpen] = React.useState(false)

    return (
        <nav className='flex md:hidden justify-between w-full pr-4'>
            <Link href='/' className="self-center mr-8">
                <Image src={commonShareLogo} alt="common share logo" height={30} />
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
                <Button
                    onClick={() => setOpen(!open)}
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu color="black" />
                </Button>
                <SheetContent side='top'>
                    <SheetHeader>
                        <SheetTitle>
                            <Link href='/'>
                                <Image src={commonShareLogo} priority={true} alt="common share logo" height={30} />
                            </Link>
                        </SheetTitle>
                        <SheetDescription id='SheetDescriptio'>
                            <div className="relative items-center ml-[2px]">
                                <Input type="text" placeholder="Search Sustainable Companies" className="w-full border-y border border-light-strok px-4 py-2 focus-visible:ring-offset-0 rounded-lg" autoFocus={false} />
                                <Search className="absolute right-4 top-2.5 w-[17px] h-[17px]" />
                            </div>
                            <div>
                                <ul className='w-full flex justify-around font-bold text-lg text-black mt-9 pb-9'>
                                    <li>
                                        <Link href='explore' className='flex items-center'>
                                            <Compass size={20} /><span className='ml-2 underline'>Explore</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='explore' className='flex items-center'>
                                            <LockKeyhole size={20} /><span className='ml-2 underline'>Login</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='explore' className='flex items-center'>
                                            <CircleUserRound size={20} /><span className='ml-2 underline'>Sign up</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav
