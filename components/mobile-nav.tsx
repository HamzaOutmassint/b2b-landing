import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const MobileNav = () => {
    return (
        <nav>
            <Button className="sm:block md:hidden bg-white active:bg-gray-light hover:bg-white rounded-full">
                <Menu color="black" />
            </Button>
        </nav>
    )
}

export default MobileNav
