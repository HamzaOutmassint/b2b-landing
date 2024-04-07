'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Button } from '../ui/button';

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
                <Swiper navigation={{ nextEl: '.out', prevEl: '.in' , clickable: true}} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
                <div>
                    <Button className='out'>out</Button>
                    <Button className='in'>in</Button>
                </div>
            </div>
        </div>
    )
}

export default LatestNews