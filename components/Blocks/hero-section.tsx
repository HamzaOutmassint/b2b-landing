'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Button } from "../ui/button";
import { Slash } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-[380px] bg-primary overflow-hidden xs:pb-10 md:pb-0">
            <div id="blob-hero-section" className="top-[63%] h-52"></div>
            <div className="relative container mx-auto md:px-8 lg:px-24 z-20">
                <div className=" top-0 lg:left-32 pt-4 md:pt-8 lg:pt-12">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-light hover:text-white">
                                    Marketplace
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash color="white" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white font-bold hidden md:block">
                                    UK Top Sustainable Clothing Brands
                                </BreadcrumbPage>
                                <BreadcrumbPage className="text-white font-bold block md:hidden">
                                    Top UK Sustainable Brands
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-16 xl:mt-10">
                    <h1 className="font-semibold text-3xl text-white tracking-wide mb-6">
                        The UK’s Top Sustainable Apparel Brands
                    </h1>
                    <p className="md:text-center exactly-1024:px-12 lg:px-52 xl:px-32 text-lg text-gray-light">
                        Discover our showcase of leading sustainable clothing brands in the United Kingdom.
                        Explore stylish options that prioritize environmental responsibility and societal impact,
                        with a focus on eco-friendly practices and ethical sourcing.
                    </p>
                </div>
                <div className="xs:mt-7 md:mt-8 flex md:justify-center">
                    <Button className="mr-4 text-base text-primary bg-white hover:bg-white hover:text-navy-blue">
                        Browse Now
                    </Button>
                    <Button className="mr-4 text-base text-white bg-primary hover:bg-navy-blue">
                        Talk to an expert
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection