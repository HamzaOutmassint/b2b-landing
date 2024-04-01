import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Button } from './ui/button'

type ImageProp = string | StaticImageData
interface MobileNavProps {
    commonShareLogo: ImageProp
}
const MobileNav: React.FC<MobileNavProps> = ({ commonShareLogo }) => {
    return (
        <nav className='flex md:hidden justify-between w-full pr-4'>
            <Link href='/' className="self-center mr-8">
                <Image src={commonShareLogo} alt="common share logo" height={30} />
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                        <Menu color="black" />
                    </Button>
                </SheetTrigger>
                <SheetContent side='top'>
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav
