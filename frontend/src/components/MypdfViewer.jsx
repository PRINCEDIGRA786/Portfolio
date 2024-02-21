import React from 'react';
import Iframe from 'react-iframe'
import { NavLink } from 'react-router-dom';

const MyPdfViewer = (props) => {
  const pdfUrl = props.url;
  
  return (
<>
<div className='mx-auto my-3 ' >


<Iframe url={pdfUrl}
        width='100%'
        height='100%'
        scrolling='no'
        className=" phone:h-40 phone:w-40 h-52 w-52  sm:h-60 sm:w-60 shadow-xl
        shadow-black rounded-lg"
         position="relative"
         
          />
          <div className='mt-4 mx-20 phone:mx-12'>
        <NavLink to={pdfUrl}>
            <button className='text-md bg-green-500 p-2 hover:text-white rounded-md hover:bg-green-700 font-extrabold'>Open</button>
          </NavLink>
          </div>

        </div>
        
</>
  );
};

export default MyPdfViewer;
