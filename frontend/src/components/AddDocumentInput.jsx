import React, { useContext, useState } from 'react';
import Portcon from '../contextapi/Portfoliocontext';

const AddDocumentInput = () => {
    const context=useContext(Portcon);
    const{documentAdd}=context;
    const[document,setdocument]=useState("");
    const[docArray,setdocArray]=useState([]);
    const handleImageChange =async (e) => {
        const file = e.target.files[0];
         setdocument(file);
        // await console.log("The document is:",document)
      };
    
      const handleImageUpload = async (e) => {
        e.preventDefault();
        const Docupload= new FormData();
        Docupload.append('file', document);
        Docupload.append('upload_preset', 'portfolio');
        Docupload.append('cloud_name',"portfoli");
    
        try {
          const response = await fetch('https://api.cloudinary.com/v1_1/portfoli/upload', {
            method: 'POST',
            body: Docupload,
          });
    
          const data = await response.json();
          await docArray.push(data.secure_url);
          alert("Uploaded ----")
          console.log(data.secure_url)
          await documentAdd(docArray);
          await setdocument("");
          await window.location.reload();
    
          // Now, you can store data.secure_url in your MongoDB collection
        } catch (error) {
          console.error('Error uploading image:', error);
        }}


  return (
<>
<div className='sm:text-2xl sm:ml-36 ml-28 text-md phone:ml-2 phone:text-sm  font-extrabold my-6 md:mx-[26%] lg:mx-[38%] 
xl:mx-[40%]'>
    ADD DOCUMENTS
</div>
<div className='flex mx-28 sm:mx-40 phone:mx-6 flex-col space-y-3 my-2
 md:mx-[25%] lg:mx-[35%] '>

  
      <div className="w-40 h-40 phone:h-36 phone:w-36  sm:w-96 sm:h-60 bg-gray-200 flex 
      items-center justify-center cursor-pointer">
       <label htmlFor="documentInput" className="relative overflow-hidden">
      <div className="w-40 h-40 bg-gray-200 flex items-center justify-center cursor-pointer">
        <input
          type="file"
          id="documentInput"
          accept=".pdf, .doc, .docx"  // Specify the allowed file formats
          onChange={handleImageChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-10 w-10 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </div>
    </label>
      </div>
            
    <div className='mx-12 sm:mx-40' >

        <button className='p-2 mx-auto hover:bg-green-500
         bg-green-400 text-xs font-extrabold' 
         onClick={handleImageUpload}>Upload</button>
    </div>
        </div>
        
        </>
  );
};

export default AddDocumentInput;
