'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import Brands from '../brands-data';
import MissingDataIcon from '../../public/assest/icons/missing-data.svg'
import Link from 'next/link';

const BrandShowcase = () => {
  return (
    <div className='container mx-auto md:px-8 lg:px-24'>
      <div className="flex flex-col justify-center items-center xs:mt-12 md:mt-8 lg:mt-16 xl:mt-12">
        <h1 className="font-semibold text-2xl text-black tracking-wide mb-6">
          The UK&apos;s Top Sustainable Apparel Brands Showcase
        </h1>
        <p className="md:text-center exactly-1024:px-12 lg:px-52 xl:px-32 text-lg text-gray-bold">
          Explore our curated collection featuring premier sustainable clothing brands based in the United Kingdom.
          Discover fashion-forward options that emphasize eco-friendly practices and ethical sourcing,
          placing a strong emphasis on environmental responsibility and positive social impact.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 brands mt-16 pb-20">
        {
          Brands.map((ele, index) => {
            return (
              <div className="flex flex-col bg-white p-4 rounded-lg" key={index}>
                <div className='flex items-center justify-center self-center border border-gray-light rounded-full p-4 mt-4 h-[100px] w-[100px]'>
                  <Image src={ele['image-path']} alt={`${ele.name} logo`} className='h-fit' />
                </div>
                <div className='my-6 pb-4 border-b border-gray-light'>
                  <h2 className='font-bold text-lg'>{ele.name}</h2>
                  <div className='flex font-light text-[12px] text-black'>
                    <Image src={MissingDataIcon} alt='missing data icon' height={17} />
                    <span className='ml-2'> Missing data</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <Link href={ele['view-brand-link']}>
                    <Button className='w-full bg-white hover:bg-primary text-primary hover:text-white border border-primary'>
                      View
                    </Button>
                  </Link>
                  <Link href={ele['message-brand-link']}>
                    <Button className=' w-full text-white bg-primary hover:bg-navy-blue'>
                      Message
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default BrandShowcase
