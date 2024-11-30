import React from 'react'

interface ProductPageProps{
    params:{
        id:string;
    }
}

function productPage ({params}:ProductPageProps) {
 const {id} = params;

    return (
        <div className='flex items-center justify-center mt-20'>
            <h1>{`Product page ${id}`} </h1>
        </div>
    )
}

export default productPage

