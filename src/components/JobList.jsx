import React from 'react';

const JobList = ({list}) => {
    return (
        <div>
        <div className="h-52 bg-slate-100 rounded-lg p-4 ">
        <div className="bg-slate-200 w-14 mt-2 ml-4 rounded-md">
        <img className='p-3 mx-auto' src={list.categoryLogo} alt="" />
        </div>
        <div className="ml-4 mt-4 mr-4">
        <h2 className="text-xl font-semibold">{list.categoryName}</h2>
        <p>{list.jobsAvailable} Jobs Avaiable</p>
        </div>
      
      </div>
        </div>
    );
};

export default JobList;