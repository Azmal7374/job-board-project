import React from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from 'react-router-dom';
import SectorList from './SectorList';
import { useState } from 'react';

const Sectors = () => {
    const sectors = useLoaderData()

    const [show, setShow] = useState(true)
    return (
        <div className="my-container">
        <div className=" bg-slate-100 flex justify-between items-center">
        <div>
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
        </div>
           <div>
           
           <div>
           <h1 className="mx-auto text-center text-2xl font-bold">Job Sectors</h1>
           <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
           </div>
           
            <div className='flex items-center gap-4 mt-3 mb-12'>
            <Link to= '/home' className="text-gray-500 hover:text-orange-500">Home</Link>
          <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
            <p className="text-orange-500">Job Sectors</p>
            </div>
            </div>
          <div>
          <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
          </div>
        </div>

        <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            show ?
            sectors.slice(0,20).map(sector => <SectorList key={sector.id} sector={sector}></SectorList>)
            :
            sectors.map(sector => <SectorList key={sector.id} sector={sector}></SectorList>)
        }
       
        </div>
      <div className="text-center">
      {
        show && <button onClick={() =>setShow(false)} className="mt-10 w-32 h-12 p-4   bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 ">
         More Data
       </button>
     }
      </div>
        </div>
    );
};

export default Sectors;