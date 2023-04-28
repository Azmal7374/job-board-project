import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
const Settings = () => {
    return (
        <div className="w-full  bg-white rounded-md shadow-lg p-8  mr-20">
        <div className=''>
        <h1 className='text-2xl'>Account Setting</h1>
        <hr className='border mt-4 ' />
              <div className="mt-4 flex justify-between items-center">
             <div>
             <h3 className='text mt-4 font-semibold'>Feedback Emails</h3>
             <p className='text-gray-500 mt-2'>Get feedback from My CV Creator.</p>
             </div>

             <div className='mt-8 flex p-2 h-10 items-center outline-none border border-purple-300 hover:border-orange-500'>
             <select className="w-40  rounded-md my-4 h-5">
             <option className="outline-none" value="yes">Yes</option>
             <option  className="outline-none" value="no">No</option>
             </select>
             </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
              <div>
              <h3 className='text mt-4 font-semibold'>Private Account</h3>
              <p className='text-gray-500 mt-2'>When your account is private, people can not see your Cv / Resume or Cover Letter</p>
              </div>
 
              <div className='mt-8 flex p-2 h-10 items-center outline-none border border-purple-300 hover:border-orange-500'>
              <select className="w-40  rounded-md my-4 h-5">
              <option className="outline-none" value="yes">Yes</option>
              <option  className="outline-none" value="no">No</option>
              </select>
              </div>
               </div>
            
               <div className="mt-4 flex justify-between items-center">
               <div>
               <h3 className='text mt-4 font-semibold'>Email / SMS</h3>
               <p className='text-gray-500 mt-2'>Get notifications by text message and Email.</p>
               </div>
  
               <div className='mt-8 flex p-2 h-10 items-center outline-none border border-purple-300 hover:border-orange-500'>
               <select className="w-40  rounded-md my-4 h-5">
               <option className="outline-none" value="yes">Yes</option>
               <option  className="outline-none" value="no">No</option>
               </select>
               </div>
                </div>


                <div className="mt-4 flex justify-between items-center">
                <div>
                <h3 className='text mt-4 font-semibold'>Message</h3>
                <p className='text-gray-500 mt-2'>Receive an e-mail when people send you a message</p>
                </div>
   
                <div className='mt-8 flex p-2 h-10 items-center outline-none border border-purple-300 hover:border-orange-500'>
                <select className="w-40  rounded-md my-4 h-5">
                <option className="outline-none" value="yes">Yes</option>
                <option  className="outline-none" value="no">No</option>
                </select>
                </div>
                 </div>


            </div>
          <div className="flex justify-center mt-8">
          <Link to='/'>
          <button  className="bg-orange-500 p-4 hover:bg-orange-700 h-10 flex justify-center items-center text-white rounded-md"><FontAwesomeIcon className="mx-2" icon={faFloppyDisk} />Save Setting</button>
          </Link>
          </div>
            <hr className='border mt-8 ' />
            <h1 className='text-2xl mt-8 font-semibold'>Deactivate account</h1>
            <p className='text-gray-500 mt-4'>Find out how you can deactivate your account. <Link className="text-orange-500 hover:underline hover:text-purple-600">Click Here</Link> </p>
        </div>
    );
};

export default Settings;