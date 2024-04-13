import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import footerContent from "./footer-category";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-4 pb-16 border-b border-gray-light">
                <h1 className="text-3xl font-bold">
                    Stay in Touch
                </h1>
                <span className="text-base text-gray-bold text-center">
                    Sign up for our global brief on all things sustainable.
                </span>
                <div className="flex gap-4">
                    <Input type="email" className="border border-gray-light md:w-96 bg-[#F8F8F8] focus-visible:ring-offset-0" placeholder="Email Address" />
                    <Button className="bg-white hover:bg-primary text-primary hover:text-white border border-primary">
                        Subscribe
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-4 pb-12 border-b border-gray-light">
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">Our Solutions</h1>
                    {
                        footerContent.solutions.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">Our Company</h1>
                    {
                        footerContent.company.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">REGULATIONS </h1>
                    {
                        footerContent.regulations.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <h1 className="font-semibold text-lg mb-4 text-primary mt-12 uppercase">Top CLOTHING MANUFACTURERS AND SUPPLIERS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 border-b border-gray-light">
                <div>
                    <h1 className="font-semibold text-lg mb-4">Garment Manufacturers</h1>
                    {
                        footerContent.manufacturers.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4">Fabric Mills by Location</h1>
                    {
                        footerContent.fabricMillsByLocation.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4">Fabric Mills by Content</h1>
                    {
                        footerContent.fabricMillsByContent.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <h1 className="font-semibold text-lg mb-4 text-primary mt-12 uppercase">Top APPAREL SUSTAINABLE BRANDS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 border-b border-gray-light">
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">By geography</h1>
                    {
                        footerContent.ByGeography.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">By end use</h1>
                    {
                        footerContent.ByEndUse.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">By content</h1>
                    {
                        footerContent.ByContent.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <h1 className="font-semibold text-lg mb-4 text-primary mt-12 uppercase">Service Providers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-12 border-b border-gray-light">
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">Expertise</h1>
                    {
                        footerContent.Expertise.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">Certifications</h1>
                    {
                        footerContent.Certifications.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">Consulting Services</h1>
                    {
                        footerContent.ConsultingServices.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex">
                    <li>
                        <Linkedin
                            color="white"
                            className="bg-primary" />
                    </li>
                    <li>
                        <Instagram
                            className="text-primary"/>
                        />
                    </li>
                    <li>
                        <Twitter
                            className="text-primary"/>
                        />
                    </li>
                </ul>
                <div>sdf</div>
                <div>df</div>
            </div>
        </footer>
    )
}
