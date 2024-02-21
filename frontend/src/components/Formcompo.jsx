// FormComponent.js

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Portcon from '../contextapi/Portfoliocontext';

const FormComponent = () => {
  const context=useContext(Portcon);
  const{createPortfolio,name,getuser}=context;
  // const [image, setImage] = useState(null);
  const [education, setEducation] = useState([{ school: '', degree: '', year: '' }]);
  const [experience, setExperience] = useState([{ place: '', post: '', time: '' }]);
  const handleAddEducation = () => {
    setEducation([...education, { school: '', degree: '', year: '' }]);
  };
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };
  
  const handleAddExperience = () => {
    setExperience([...experience, { place: '', post: '', time: '' }]);
  };
  const handleExperienceChange = (index, field, value) => {
    const updateExperience = [...experience];
    updateExperience[index][field] = value;
    setExperience(updateExperience);
  };
  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };
  const[open,setopen]=useState(false)
    const[transu,settransu]=useState({
        translate:'-70rem 0rem',
      })
      const togglestyle = () => {
        if (transu.translate=='-70rem 0rem') {
            settransu({
              translate:'-0rem 3rem',
            })
            setopen(true)
        }
        else {
            settransu({
              translate:'-70rem 0rem',
                    })
            setopen(false)
        }}
        const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about:'',
    hobbies:'',
    profession:''
  });
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== '');
  };

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };
  const [showEForm, setEForm] = useState(false);

  const handleShowEForm = (e) => {
    e.preventDefault();
    setEForm(true);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [image, setImage] = useState(null);
  const handleSubmit =async (e) => {
    e.preventDefault();
    await createPortfolio(formData.name,formData.email,image,formData.about,formData.profession,formData.hobbies,education,experience);
    navigate('/');
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append('file', image);
    imageData.append('upload_preset', 'portfolio');
    imageData.append('cloud_name',"portfoli");

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/portfoli/image/upload', {
        method: 'POST',
        body: imageData,
      });

      const data = await response.json();
      // console.log('Image uploaded:', data.secure_url)
      await setImage(data.secure_url)
      alert("Uploaded ----")

      // Now, you can store data.secure_url in your MongoDB collection
    } catch (error) {
      console.error('Error uploading image:', error);
    }}

    const location=useLocation();
 

    useEffect(()=>{
      getuser();
      const passedData = location.state ? location.state.data : null;
      setTimeout(() => {
         
          passedData?setFormData({...formData,profession:passedData}):setFormData({...formData,profession:""});
      }, 1000);
    },[])
  return (
    <>
     <div className='topcard bg-[#060e27fe] 
        md:mx-auto   p-4 h-[95%] shadow-black
         shadow-xl '>
            <div className='flex justify-between pb-4'>
                <div className='text-white font-extrabold md:text-xl'>PORTFOLIO.com</div>
                <div className={`hamburger m-1 inline-block
                 cursor-pointer  text-end sm:hidden 
                    pr-1 absolute pl-[82%] sm:${open}?${togglestyle}:""`} onClick={togglestyle}>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    </div>
                <div>
                    <ul className=' border-2 border-white 
                    bg-gradient-to-t from-[#13b4e4f1] to-[#0f169688] 
                    sm:bg-none sm:border-0
                 justify-center p-4 flex-col absolute right-6
                      sm:flex sm:flex-row text-white 
                      sm:translate-x-[140vw] md:translate-x-[105vw] lg:translate-x-[80vw]
                     text-sm space-x-4 md:space-x-2 lg:space-x-5 font-semibold
                      space-y-2 sm:space-y-0 top-3 z-50 sm:top-4 sm:right-2
                      md:text-xs lg:text-sm '
                    style={transu}>
                    <li className='pl-4 sm:pl-0 hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/')}>Home</li>
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/about')}>About</li>
                    <li className='hover:text-purple-300 cursor-pointer'>Login</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md'>👤 {name}</li>
                </ul>
                    </div>
            </div>
    <div className="container  p-4  ">
      <form className=" mx-auto 
      bg-gradient-to-br w-[70vw] lg:w-[80%] phone:w-52 sm:w-[60%]
     to-[#00030dfe] from-[#0db5d6e0] p-8 rounded-md shadow-md">
       <div className='my-4'>
        <h1 className=' font-extrabold my-2 text-slate-600'>Choose your profile pic:</h1>
        {/* <img src='https://www.business2community.com/wp-content/uploads/2015/03/Identity-Question-Mark5.jpg5.jpg' 
        className='h-40 w-40 mx-auto rounded-full z-50'/> */}
        <div className='flex space-x-3'>

        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
          // className='h-40 w-40 rounded-full absolute top-40 left-40  '
        />
        <button className='p-2 bg-green-400 text-xs font-extrabold' onClick={handleImageUpload}>Upload</button>
        </div>
      </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md bg-[#336e8888] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md bg-[#336e8888] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="about" className="block text-gray-700 text-sm font-bold mb-2">
            About
          </label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-full border rounded-md bg-[#336e8888] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write about yourself"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profession" className="block text-gray-700 text-sm font-bold mb-2">
            Profession
          </label>
          <textarea
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full border rounded-md bg-[#336e8888] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={"for e.g. Teacher"}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hobbies" className="block text-gray-700 text-sm font-bold mb-2">
            Hobbies
          </label>
          <textarea
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your Hobbies"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="education" className="block text-gray-700 text-sm font-bold mb-2">
            Education
          </label>
          <button className='h-10 w-20 text-xs text-white font-extrabold 
          p-2 rounded-3xl bg-green-700' onClick={handleShowForm}>Add Item</button>
           {showForm && education.map((edu, index) =>(
        <div className='absolute bottom-[-100px]  h-[50%] w-[60%] lg:w-[50%] border-2
         border-black rounded-lg
          bg-white p-6'>
          {/* Your form elements go here */}
          <label htmlFor="school" className="block text-gray-900 text-sm font-bold mb-2">
            School
          </label>
            <input type="text" name="school" className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold" 
            placeholder="School"
            value={edu.school}
            onChange={(e) => handleEducationChange( index,'school', e.target.value)}
            
            />
          <br />
          <label htmlFor="degree" className="block text-gray-900 text-sm font-bold mb-2">
            Degree
          </label>
            <input type="text" name="degree"  className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold"
            
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index,'degree', e.target.value)}
            
            
            />
          <br />
          <label htmlFor="year" className="block text-gray-900 text-sm font-bold mb-2">
            Year
          </label>
            <input type="text" name="year" className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold" 
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleEducationChange(index,'year', e.target.value)}
            
            />
          <br />
          <div className='text-center my-4 space-x-[40%]'>
          <button type="done" className=' bg-[#14c6c6ed] p-2  
          text-sm font-extrabold rounded-2xl' 
          onClick={()=>{handleAddEducation();setShowForm(false)}}>Done</button>
          <button type="close" className=' bg-[#14c6c6ed] p-2  text-sm font-extrabold rounded-2xl' onClick={()=>{setShowForm(false)}}>Close</button>
          </div>  
        </div>
      ))}
      {
        education.map((element,key)=>(
          

       element.year &&  <div className='py-2 px-3 lg:px-5 ' key={key}>
            <h1 className='font-extrabold text-sm md:text-md lg:text-xl'>{element.school}</h1>
            <div className=' justify-around lg:space-x-5 lg:justify-normal flex text-xs lg:text-sm font-semibold'>
            <p className='lg:font-extrabold'>
              {element.degree}
            </p>
           <p className='lg:block hidden text-md font-extrabold'>|</p>
            <p  className='lg:font-extrabold text-slate-500'>
              {element.year}
            </p>
            </div>
            </div>
            
        ))
      }
        </div>
      <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700 text-sm font-bold mb-2">
            Experience
          </label>
          <button className='h-10 w-20 text-xs text-white font-extrabold 
          p-2 rounded-3xl bg-green-700' onClick={handleShowEForm}>Add Item</button>
           {showEForm && experience.map((edu, index) =>(
        <div className='absolute bottom-[-130px]  h-[50%] w-[60%] lg:w-[50%] border-2
         border-black rounded-lg
          bg-white p-6' key={index}>
          {/* Your form elements go here */}
          <label htmlFor="place" className="block text-gray-900 text-sm font-bold mb-2">
            Institute
          </label>
            <input type="text" name="place" className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold" 
            placeholder="Institute"
            value={edu.place}
            onChange={(e) => handleExperienceChange( index,'place', e.target.value)}
            
            />
          <br />
          <label htmlFor="post" className="block text-gray-900 text-sm font-bold mb-2">
            Post
          </label>
            <input type="text" name="post"  className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold"
            
            placeholder="Post"
            value={edu.post}
            onChange={(e) => handleExperienceChange(index,'post', e.target.value)}
            
            
            />
          <br />
          <label htmlFor="time" className="block text-gray-900 text-sm font-bold mb-2">
            Time
          </label>
            <input type="text" name="time" className="w-full border rounded-md bg-[#336e8888] py-2 
            px-3 leading-tight focus:outline-none focus:shadow-outline placeholder:text-black text-xs font-extrabold" 
            placeholder="Time"
            value={edu.time}
            onChange={(e) => handleExperienceChange(index,'time', e.target.value)}
            
            />
          <br />
          <div className='text-center my-4 space-x-[40%]'>
          <button type="done" className=' bg-[#14c6c6ed] p-2 
           text-sm font-extrabold rounded-2xl' 
           onClick={(e)=>{ e.preventDefault();
            handleAddExperience();
           setEForm(false)}}>Done</button>
          <button type="close" className=' bg-[#14c6c6ed] p-2  text-sm font-extrabold rounded-2xl' onClick={()=>{setEForm(false)}}>Close</button>
          </div>  
        </div>
      ))}
      {
        experience.map((element,key)=>(
          

       element.time &&  <div className='py-3 px-3 lg:px-5 ' key={key}>
            <h1 className='font-extrabold text-sm md:text-md lg:text-xl'>{element.place}</h1>
            <div className=' justify-around lg:space-x-5 lg:justify-normal flex text-xs lg:text-sm font-semibold'>
            <p className='lg:font-extrabold'>
              {element.post}
            </p>
           <p className='lg:block hidden text-md font-extrabold'>|</p>
            <p  className='lg:font-extrabold text-slate-500'>
              {element.time}
            </p>
            </div>
            </div>
            
        ))
      }
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-blue-300 hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
             
    </div>
    </>
  );
};

export default FormComponent;
