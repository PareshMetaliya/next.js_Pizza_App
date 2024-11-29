import Image from 'next/image'
import React from 'react'

function HeroSection() {
    return (
        <header className=" bg-hero bg-cover bg-center h-auto  mt-[10vh] container">

            <div className='max-md:flex-col-reverse  flex items-center justify-between '>

                <aside className='flex items-start flex-col md:gap-6 max-md:gap-3 md:pl-10 m-2 max-md:mt-20 max-md:justify-center max-md:items-center max-md:text-center' >
                    <h1 className="h1-bold text-customBrown">Your Cravings, our <br></br><span className="text-customYellow">Command.</span> </h1>
                    <p className='paragraph-regular text-customBrown'>Savor the convenience of culinary magic!<br></br> Browse, order, and relish - <br></br>all in one seamless app</p>
                    <button className='btn  '>Explorer Menu</button>
                </aside>
                <section className='flex-between relative md:mr-3 md:mt-12  max-md:justify-center max-md:items-center max-md:text-center max-md:mt-2 '>



                    <Image
                        src={"/image/heroPizzaImage.png"}
                        alt='pizza image'
                        height={420}
                        width={420}
                        className=' z-10'
                    >

                    </Image>

                    <Image
                        src={"/image/coriender.png"}
                        alt='pizza image'
                        height={80}
                        width={80}
                        className="absolute -top-5 left-0">

                    </Image>
                   
                    <Image
                        src={"/image/garlic.png"}
                        alt='pizza image'
                        height={80}
                        width={80}
                        className="absolute top-[60px] -left-[45px]">

                    </Image>
                    <Image
                        src={"/image/tomatoCoriender.png"}
                        alt='pizza image'
                        height={150}
                        width={150}
                        className="absolute -top-10 -right-10 rotate-25">

                    </Image>
                    <Image
                        src={"/image/leaf tomato.png"}
                        alt='pizza image'
                        height={120}
                        width={120}
                        className="absolute -bottom-12 right-2">

                    </Image>



                    <Image
                        src={"/image/garlic.png"}
                        alt='pizza image'
                        height={70}
                        width={70}
                        className="absolute -bottom-[50px] right-[130px]">

                    </Image>
                    <Image
                        src={"/image/leaf-3.png"}
                        alt='pizza image'
                        height={140}
                        width={140}
                        className="absolute -bottom-[50px] -left-[30px] rotate-45">

                    </Image>
                    <Image
                        src={"/image/vector.png"}
                        alt='pizza image'
                        height={80}
                        width={80}
                        className="absolute bottom-[15px] -left-[95px] rotate-40">

                    </Image>

                </section>
            </div>

        </header>
    )
}

export default HeroSection
