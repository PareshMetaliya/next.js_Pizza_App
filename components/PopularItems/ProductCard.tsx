

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Pizza {
    _id: string,
    name: string,
    description: string,
    imageSrc: string,
}

interface ProductCardProps {
    pizza: Pizza; // Type the pizza prop with the Pizza interface
}

function ProductCard({ pizza }: ProductCardProps) {

    const {
        _id, name, description, imageSrc
    } = pizza;




    return (
        <div className='flex flex-col w-full  h-full gap-2 items-center justify-evenly p-2 pb-2 overflow-hidden shadow-lg '>
            <Image
                src={imageSrc}
                alt='pizza image'
                height={160}
                width={160}
                className=''
            //     data-aos="zoom-in"
            // data-aos-delay="950"
            />
            <h2 className='h3-bold'>{name}</h2>
            <p className='paragraph-small text-customBrown text-xs overflow-hidden text-center'>{description}</p>
           
           <Link href={`/menu/${_id}` } className='btn'> Order Now</Link>

        </div>
    )
}

export default ProductCard
