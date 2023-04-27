import React, { useState } from 'react';
import feedback2 from '../../assets/feedback2.png'
import './Feedback.css'
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector-1.png';
import ReactQuill from 'react-quill';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar : [
        [{header:[1,2,3,4,5,6,false]}],
        [{ font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            {list: 'ordered'},
            {list: 'bullet'},
            {list: '-1'},
            {list: '+1'},
        ],
        ["link", "image", "video"],


    ],
}
const Feedback = () => {
    const [value, setValue] = useState('');
 
    return (
       <div>
       <div className=" bg-slate-100 flex justify-between items-center">
       <div>
       <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
       </div>
          <div>
          
          <div>
          <h1 className="mx-auto text-center text-2xl font-bold">Feedback</h1>
          <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
          </div>
          
           <div className='flex items-center gap-4 mt-3 mb-12'>
           <Link to= '/' className="text-gray-500 hover:text-orange-500">Profile</Link>
         <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
           <p className="text-orange-500">Feedback</p>
           </div>
           </div>
         <div>
         <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
         </div>
       </div>
       <div className="bg-white rounded-lg mt-4 p-4 shadow-lg">
              
       <div>
       <h1 className="text-gray-500 text-2xl"> Thank you for your FeedBack
       </h1>
       <hr className=" mt-4" />
       <img className='w-32 mx-auto mt-4' src={feedback2} alt="" />
       <p className="text-gray-500 mt-4 text-center">
       Should you have face any issue or have any suggestions for us, feel free to contact us, we will get back <br /> to you as soon as we can!</p>
       <h1 className="text-black font-bold text-2xl mt-4">Postive Feedback</h1>
       <label className="my-2 block text-orange-500 font-bold" htmlFor="subject">
       Subject
      </label>
      <input
      type="text"
      name="location" 
      placeholder="Subject"
      id='subject'
      className="w-full p-2 block h-12 border border-purple-400 hover:border-orange-600 outline-none"
    />
    <label className="my-2 block text-orange-500 font-bold" htmlFor="subject">
    Message
   </label>

   <div className=' h-96'>
   <div className=' '>
   <div className=' '>
   <ReactQuill theme="snow" value={value} onChange={() => setValue(e.target.value)}
   className='h-80  border-gray-300'
   placeholder='Compose Message
   '
   modules={modules}
   />
   </div>
   <div className='preview'>
       {value}
   </div>
   </div>
    
   </div>
       </div>
       <div className='text-end'>
       <button  className="h-10 mt-4  p-2   bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 text-center">Send Message</button>
       </div>
       </div>
       </div>
    );
};

export default Feedback;