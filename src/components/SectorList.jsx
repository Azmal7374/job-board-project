import React from 'react';
import { Link } from 'react-router-dom';

const SectorList = ({sector}) => {
    const {sector_title} = sector;
    return (
        <div className=''>
          <Link to='/home'>
          <div className='bg-white w-full h-12 md:h-14 lg:h-12  p-2 rounded-md'>
          <p className='text-xl font-bold'>{sector_title}</p>
         </div>
          </Link>
        </div>
    );
};

export default SectorList;