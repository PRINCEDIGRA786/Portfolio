
import React, { useContext, useEffect, useState } from 'react'
import Portcon from '../contextapi/Portfoliocontext'
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
import AddDocumentInput from './AddDocumentInput';
import MyPdfViewer from './MypdfViewer';

export default function Dashboard() {
    const context=useContext(Portcon);
    const navigate=useNavigate();
    const{user,dashboard,getuser,name}=context;
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
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/signup')
        }
        dashboard();
        getuser();
        setTimeout(() => {
            setflag(true);
        }, 2000);
    },[])
   
  return (
    <>
    <div>
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
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/dashboard')}>Dashboard</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md' onClick={()=>navigate('/users')}>Users</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md'>
                    <div className='flex space-x-3 phone:space-x-1 group cursor-pointer  duration-500'>
                <FaUserAlt className='text-white h-5 w-5 group-hover:h-7 
                group-hover:w-7 group-hover:bg-[#585858] phone:h-3 phone:w-3
                 hover:rounded-sm '/>
                <p className='text-white text-sm font-extrabold phone:text-xs'>
                    {name}
                </p>
                <div className='bg-[#383838] opacity-90 z-50 
                 w-48 h-40 md:w-80 absolute hidden 
                 group-hover:block 
                right-[5%] top-[10%]'>
                        <div className=' bg-[#181818] z-50 text-center
                         py-4 mx-auto block border-b-4 border-slate-200'>
                           
                            <FaUserAlt className='text-white rounded-full
                             h-10 w-10 mx-auto border-2 border-white '/>
                            <p className='  text-lg font-sans text-center
                             text-white'>{name}</p>
                           
                        </div>
                        <div className='py-4 px-5 '>
                            
                            <p className='font-semibold text-md text-white flex space-x-4'
                            onClick={()=>{
                                localStorage.removeItem('token');
                                navigate('/signup')
                            }}><PiSignOutBold className='text-white h-4 w-4 mr-2 mt-1'/> Sign out</p>
                        </div>
                </div>

                    </div>
                    </li>
                </ul>
                    </div>
            </div>

          {{flag} && ( <div className=" bg-gradient-to-tr
          to-[#00030dfe] from-[#0db5d6e0] p-6 ">
                <div className="max-w-2xl mx-auto bg-gradient-to-tr
          to-[#e0e3ecb1] from-[#0db4d627] rounded-lg shadow-md p-6">
            
            <div className='mb-4 text-center'>
                <h1 className='text-2xl phone:text-xl font-extrabold'>DASHBOARD</h1>
            </div>
                    <div >
                    <img
                            className="w-36 h-36 phone:h-20 phone:w-20 rounded-full mx-auto"
                            src={user.pic}
                            alt="Profile"
                            />
                    </div>
                    <div className="flex items-center mb-4">
                       
                        <div>
                            <h1 className="text-3xl phone:text-xl text-black font-bold">{user.name}</h1>
                            <p className="text-gray-300 phone:text-xs">{user.email}</p>
                        </div>
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-[#dcd7d7] ">About Me</h2>
                        <p className="text-gray-900 phone:text-xs sm:text-md ">
                        {user.about}
                        </p>
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-[#dcd7d7]  mb-2">Experience</h2>
                     {flag && user.experience.map((element,key)=>(
                         <div key={key}>

                                    <h1 className='text-lg font-extrabold phone:text-sm'>◾{element.place}</h1>
                                    <div className=' justify-evenly flex'>
                                    <p className='font-semibold text-sm phone:text-xs'>{element.post}</p>
                                    <p className='font-semibold text-sm phone:text-xs'>{element.time}</p>
                                        </div>
                                    </div>


))
}
                    </div>
    
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-[#dcd7d7] mb-2">Education</h2>
                          {
                              flag &&
                              user.education.map((element,index)=>(
                                  <div key={index}>

                                    <h1 className='text-lg phone:text-sm font-extrabold'>◾{element.school}</h1>
                                    <div className=' justify-evenly flex'>
                                    <p className='font-semibold text-sm phone:text-xs'>{element.degree}</p>
                                    <p className='font-semibold text-sm phone:text-xs'>{element.year}</p>
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
                        <p className="text-gray-700 phone:text-xs sm:text-md">
                            {user.hobbies}
                        </p>
                    </div>
                </div>
    
        <AddDocumentInput/>
        
           
        <div className='grid grid-cols-1  md:grid-cols-2'>
           { user.documents ? 
              
           user.documents.map((element,key)=>(
          

                <MyPdfViewer url={element} key={key}/>
           
                
                )):<div className='text-sm text-center font-semibold sm:text-lg'>

                    <h1 >NO DOCUMENT ADDED</h1>
                </div>
                
                }
                </div>
        
        
            </div>)   }
</div>
</>
  )
}
