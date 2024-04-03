import React from 'react'

const BrandShowcase = () => {
  return (
    <div className='h-screen container mx-auto md:px-8 lg:px-24'>
      <div className="flex flex-col justify-center items-center mt-4 md:mt-8 lg:mt-16 xl:mt-12">
        <h1 className="font-semibold text-2xl text-black tracking-wide xs:mb-3 md:mb-8">
          The UK’s Top Sustainable Apparel Brands Showcase 
        </h1>
        <p className="md:text-center lg:px-52 xl:px-32 text-lg text-gray-bold">
          Explore our curated collection featuring premier sustainable clothing brands based in the United Kingdom.
          Discover fashion-forward options that emphasize eco-friendly practices and ethical sourcing,
          placing a strong emphasis on environmental responsibility and positive social impact.
        </p>
      </div>
      <div>brands</div>
    </div>
  )
}

export default BrandShowcase
