import Image from 'next/image'
import InformativeContentImage from '../../public/assest/logo/informativeContent.svg';

const InformativeContent = () => {
    return (
        <div className='container mx-auto md:px-8 lg:px-24 bg-primary py-12 relative overflow-hidden'>
            <div id="blob-informative-content" className='xs:h-[22rem] lg:h-52 xs:top-[75%] md:top-[54%] lg:top-[63%]'></div>
            <div className='grid grid-cols-1 exactly-1024:grid-cols-1 lg:grid-cols-2 gap-4 z-30'>
                <div>
                    <h1 className="font-semibold text-2xl text-white tracking-wide mb-6">
                        Empower Your Style: Navigating Sustainable Fashion with CommonShare
                    </h1>
                    <div className='text-gray-light text-lg'>
                        <p className='mb-6'>
                            At CommonShare, we understand the growing importance of making
                            eco-friendly choices in fashion, and we&apos;re here to simplify
                            the process for you.
                        </p>
                        <p>
                            Our user-friendly interface allows you to seamlessly search for 
                            sustainable apparel brands based on both location and specific 
                            sustainability claims. Whether you&apos;re passionate about supporting 
                            local businesses or prioritizing cruelty-free and eco-conscious 
                            practices, our platform is your go-to resource for discovering 
                            and connecting with brands that align with your values. 
                            Join us in reshaping the future of fashion by making informed, 
                            sustainable choices that resonate with your individual preferences 
                            and contribute to a greener, more ethical industry.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={InformativeContentImage} alt='informative content'/>
                </div>
            </div>
        </div>
    )
}

export default InformativeContent
