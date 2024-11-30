import { WhatWeServeCardProps } from '@/types/types';
import Image from 'next/image';
import React from 'react'



function WhatWeServeCard(data: WhatWeServeCardProps) {

    const { imgsrc, title, desc, desc2 } = data;
    return (
        <div className='flex flex-col justify-between gap-2 items-center h-auto'>
            <div className=' flex items-center justify-center'> <Image
                src={imgsrc}
                alt="image"
                width={130}
                height={130}
                className=''
            /></div>
            <h3 className='h3-bold text-customBrown'>{title}</h3>
            <p className='paragraph-small text-customBrown max-md:hidden text-center max-w-[270px]'>{desc} {desc2}</p>
            {/* <p className='paragraph-small text-customBrown max-md:hidden text-center'>{desc2}</p> */}

        </div>
    )
}

export default WhatWeServeCard
