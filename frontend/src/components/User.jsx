
import React, {  useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import RatingStars from './Ratingstars';
import { IoStarSharp } from "react-icons/io5";
import { FaFaceGrinStars } from "react-icons/fa6";
import Portcon from '../contextapi/Portfoliocontext';

export default function User() {
    const navigate=useNavigate();
    const[user,setuser]=useState({})
    const[flag,setflag]=useState(false);
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
        }
    }
    const location=useLocation();
    const[secflag,setsecflag]=useState(false);
    const context=useContext(Portcon);
    const{name,getuser}=context;
   
    useEffect(()=>{
        const passedData = location.state ? location.state.data : null;
       getuser();
        setTimeout(() => {
            // setflag(true);
            setuser(passedData)
        }, 1000);
        setTimeout(() => {
            setsecflag(true)
        }, 2000);
    },[])
    const[rateshow,setrateshow]=useState(false)
   
  return (
    <>
  <div className=''>
    <div className='flex justify-between bg-gradient-to-tr
          to-[#00030dfe] from-[#2e7684f7] p-5 '>
                <div className='text-white font-extrabold md:text-xl cursor-pointer' onClick={()=>navigate('/')}>PORTFOLIO.com</div>
                <div className={`hamburger m-1 inline-block
                 cursor-pointer  text-end sm:hidden 
                    pr-1 absolute pl-[77%] md:pl-[60%] sm:${open}?${togglestyle}:""`} onClick={togglestyle}>
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
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/dashboard')
                    
                        }>Dashboard</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md' onClick={()=>navigate('/users')}>Users</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md'>🥷{name}</li>
                </ul>
                    </div>
            </div>

            {{flag} && (   <div className=" bg-gradient-to-tr
          to-[#00030dfe] from-[#0db5d6e0] p-6 pb-20 ">
                <div className="max-w-2xl mx-auto bg-gradient-to-tr
          to-[#e0e3ecb1] from-[#0db4d627] rounded-lg shadow-xl shadow-black p-6">
            <div className='font-extrabold flex'>
                <IoStarSharp className='text-yellow-400 h-10 w-10 '/>
                <p className='px-2 py-2'>
                    {user.stars}+
                    </p>
                </div>
            
                    <div >
                    <img
                            className="w-36 h-36 rounded-full mx-auto"
                            src={user.pic}
                            alt="Profile"
                            />
                    </div>
                    <div className="flex items-center mb-4">
                       
                        <div>
                            <h1 className="text-3xl text-purple-900 font-bold">{user.name}</h1>
                            <p className="text-gray-300">{user.email}</p>
                        </div>
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-[#dcd7d7] ">About Me</h2>
                        <p className="text-gray-900">
                        {user.about}
                        </p>
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-[#dcd7d7]  mb-2">Experience</h2>
                     { secflag && user.experience.map((element,index)=>(
                         <div key={index}>

                                    <h1 className='text-lg font-extrabold'>◾{element.place}</h1>
                                    <div className=' justify-evenly flex'>
                                    <p className='font-semibold text-sm'>{element.post}</p>
                                    <p className='font-semibold text-sm'>{element.time}</p>
                                        </div>
                                    </div>


))}

                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-[#dcd7d7] mb-2">Education</h2>
                        { secflag
                              &&   
                              user.education.map((element,index)=>(
                                  <div key={index}>

                                    <h1 className='text-lg font-extrabold'>◾{element.school}</h1>
                                    <div className=' justify-evenly flex'>
                                    <p className='font-semibold text-sm'>{element.degree}</p>
                                    <p className='font-semibold text-sm'>{element.year}</p>
                                        </div>
                                    </div>

))
}
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold  text-[#dcd7d7]  mb-2">Profession</h2>
                        <p className="text-black">{user.profession}</p>
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-[#dcd7d7] ">Hobbies</h2>
                        <p className="text-gray-700">
                            {user.hobbies}
                        </p>
                    </div>
               { !rateshow && <div className=' text-center text-[50px]' onClick={()=>{
                 setTimeout(() => {
                    setrateshow(true)
                  }, 1000);}}> <RatingStars id={user._id}  />
                <p className='text-2xl font-extrabold'>---RATE NOW---</p></div>}
                {
                    rateshow && <div className='text-center text-[50px]'>
                        <FaFaceGrinStars className='h-10 w-10 mx-auto text-purple-700'/>
                        <p className='font-extrabold text-2xl'>THANKS FOR RATING</p>
                    </div>
                }
                </div>
            </div>)}
</div>
</>
  )
}
