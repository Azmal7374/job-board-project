import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVideoCamera, faFile} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
const Messages = () => {
    return (
        <div className='w-full mt-10 bg-white  rounded-md shadow-lg  '>
         <div className='md:flex gap-10 justify-center'>
         <div className=' border-r-4   w-96'>
            <input className='outline-none m-4' type="text" name="" id="" placeholder='Search Users'/> 
           <hr className=' border-200 m-4' />
         
          </div>
          
         <div className=' border-r-4 border-l-2   w-full mr-32' style={{height:'910px'}}>
         <p className='bg-slate-100 text-center p-2 rounded-md  m-4'>Start a conversation with someone</p>
         <hr />
         <hr className='border ' style={{marginTop:"600px"}}/>
         
       <div className='ml-20 mr-20'>
       <div className="bg-slate-100 mt-8 w-full h-20 ">
       <textarea className='bg-slate-100 w-80 p-3 outline-none ' cols='' rows='' placeholder='Type Your message here'>
       </textarea>
       </div>
       <div className= ' bg-slate-100 flex justify-between'>
      <div className='flex gap-4  ml-20 text-purple-500'>
      <FontAwesomeIcon className='' icon={faVideoCamera}></FontAwesomeIcon>
      <FontAwesomeIcon className='' icon={faFile}></FontAwesomeIcon>
      </div>
      <div className='p-4'> 
    <Link>
    <button className='bg-purple-500 p-1 w-24 rounded-full mt-8 text-white'>Send</button>
    </Link>
      </div>
       </div>
       
       </div>
         </div>
         </div>
        </div>
    );
};

export default Messages;