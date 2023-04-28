import React from 'react';

const PopularPost = ({ad}) => {
    const {image, id,cvTitle} = ad
    return (
        <div className='py-4'>
             <div className='flex gap-2'>
             <img className='w-10 h-10  border rounded-md' src={image} alt="" />
             <p className='md:text-xl text-orange-600 font-semibold'>{cvTitle}</p>
             </div>
        </div>
    );
};

export default PopularPost;