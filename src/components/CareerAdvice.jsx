import React from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
const CareerAdvice = () => {
    return (
        <div>
        <div className="my-container bg-slate-100 flex items-center">
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
           <h1 className="mx-auto text-center text-2xl font-bold">Carrier Advice</h1>
           <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
       </div>
        </div>
    );
};

export default CareerAdvice;