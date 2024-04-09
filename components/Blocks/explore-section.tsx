'use client';

import { Button } from "../ui/button";
import Link from "next/link";

const ExploreSection = () => {
    return (
        <section id="explore-section" className="container mx-auto md:px-8 lg:px-24 my-16">
            <div className="flex flex-col items-center justify-center h-full gap-8">
                <div className='text-white flex flex-col items-center justify-center gap-8'>
                    <h1 className='font-semibold text-[2rem] md:text-5xl'>Ready to Explore?</h1>
                    <h2 className="text-lg md:text-2xl text-center md:px-16 lg:px-0">
                        Join the world&apos;s fastest growing sustainable procurement platform.
                    </h2>
                </div>
                <Link href='/companies'>
                    <Button className="bg-white hover:bg-primary text-primary hover:text-white text-base">
                        Find Partners Now
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default ExploreSection