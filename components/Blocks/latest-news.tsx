'use client';

import Image from 'next/image';
import { Button } from '../ui/button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import Blogs from '../blogs-data';
import Logo from '../../public/assest/logo/Images.svg';

const LatestNews = () => {
    return (
        <div className="container mx-auto md:px-8 lg:px-24">
            <div className="flex flex-col justify-center items-center xs:mt-12 md:mt-8 lg:mt-16 xl:mt-12">
                <h1 className="font-semibold text-2xl text-black tracking-wide mb-6">
                    Read more about the UK&apos;s Top Sustainable Clothing Brands
                </h1>
                <p className="md:text-center lg:px-52 xl:px-32 text-lg text-gray-bold">
                    Read articles from CommonShare&apos;s blog about the Top Sustainable Clothing Brands in the United Kingdom.
                </p>
            </div>
            <div className='h-[40rem]'>
                <Swiper
                    navigation={{ nextEl: '.next', prevEl: '.prev' }}
                    modules={[Navigation]}
                    slidesPerView={3} spaceBetween={20} loop={true}
                    className="mySwiper">
                    {
                        Blogs.map((ele, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className='flex flex-col mt-16'>
                                        <div className='relative h-[202px] flex justify-center items-center overflow-hidden group rounded-md transition duration-150 ease-linear'>
                                            <span className='bg-white rounded-full px-4 py-2 absolute top-4 left-4 text-xs font-semibold hidden group-hover:flex'>
                                                Sustainable Supply Chains
                                            </span>
                                            <Image src={ele['img-path']} alt={ele['title']} height={202} />
                                            <span className='flex items-center justify-center absolute bottom-4 left-4'>
                                                <Image src={Logo} alt='commonshare logo' height={30}/>
                                                <span className='ml-3 text-white text-base font-medium'>Community Updates</span>
                                            </span>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-2xl line-clamp-3 mt-2'>{ele.title}</h1>
                                            <p className='line-clamp-2 text-gray-bold mt-4'>{ele.body}</p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
                <div className='flex items-center justify-center mt-10'>
                    <Button className='next mr-3 bg-white hover:bg-primary text-primary hover:text-white border border-primary'><ChevronLeft size={20}/></Button>
                    <Button className='bg-white hover:bg-primary text-primary hover:text-white border border-primary'>All Updates</Button>
                    <Button className='prev ml-3 bg-white hover:bg-primary text-primary hover:text-white border border-primary'><ChevronRight size={20}/></Button>
                </div>
            </div>
        </div>
    )
}

export default LatestNews