'use client';

import Link from "next/link";
import footerContent from "./footer-category";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import NewsLetterForm from "./newsLetterForm";

export default function Footer() {
    return (
        <footer className="container mx-auto px-4">
            <NewsLetterForm />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-4 pb-12 border-b border-gray-light">
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">
                        <Link target='_blank' href='https://business.commonshare.com/'> Our Solutions</Link>
                    </h1>
                    {
                        footerContent.solutions.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">
                        <Link target='_blank' href='https://business.commonshare.com/'> Our Company </Link>
                    </h1>
                    {
                        footerContent.company.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-4 uppercase">
                       <Link target='_blank' href='https://business.commonshare.com/'> REGULATIONS </Link>
                    </h1>
                    {
                        footerContent.regulations.map((ele, index) => {
                            return (
                                <ul className="flex flex-col gap-2" key={index}>
                                    <li className="max-w-fit hover:text-primary transition duration-150 ease-linear my-1">
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
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
                                        <Link target='_blank' href={`${ele.href}`}> {ele.text} </Link>
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 exactly-1024:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pb-4">
                <ul className="flex gap-4">
                    <li>
                        <Link target='_blank' href='https://www.linkedin.com/company/commonshare' className="inline-block transition duration-150 transform -translate-y-0 hover:-translate-y-1">
                            <Linkedin className="text-primary" />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://www.instagram.com/commonshare_' className="inline-block transition duration-150 transform -translate-y-0 hover:-translate-y-1">
                            <Instagram className="text-primary" />
                        </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://twitter.com/commonshare_' className="inline-block transition duration-150 transform -translate-y-0 hover:-translate-y-1">
                            <Twitter className="text-primary" />
                        </Link>
                    </li>
                </ul>
                <div className="hidden exactly-1024:hidden lg:flex">Copyright © 2024 <Link href='https://www.commonshare.com/' className="font-semibold"> CommonShare</Link>.All rights reserved.</div>
                <ul className="flex flex-col md:flex-row gap-4 md:justify-end">
                    <li>
                        <Link target='_blank' href='https://www.commonshare.com/policies/terms' className="hover:text-primary underline md:no-underline"> Terms of Service </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://www.commonshare.com/policies/privacy' className="hover:text-primary underline md:no-underline"> Privacy Policy </Link>
                    </li>
                    <li>
                        <Link target='_blank' href='https://www.commonshare.com/policies/privacy' className="hover:text-primary underline md:no-underline"> sitemap </Link>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden exactly-1024:block block text-xs md:text-base text-center mt-8 pb-4">
                Copyright © 2024 <Link target="_blank" href='https://www.commonshare.com/' className="font-semibold"> CommonShare</Link>.All rights reserved.
            </div>
        </footer>
    )
}
