import React from 'react';
import { Link } from 'react-router-dom';

const CareeerCategories = ({ct}) => {
    const {sector_title} = ct
    return (
        <div className='py-2'>
        <div className='flex items-center gap-2'>
        <div className=' bg-orange-500 w-2 h-2 border  border-orange-500'>
        
        </div>
        <div>
       <Link>
       <p className='font-semibold text-black hover:text-orange-500'>{sector_title}</p>
       </Link>
        </div>
        </div>
    </div>
    );
};

export default CareeerCategories;