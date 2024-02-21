import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Portcon from '../contextapi/Portfoliocontext'
import { FaUserAlt } from 'react-icons/fa';
import { PiSignOutBold } from 'react-icons/pi';
export default function About() {
    const[open,setopen]=useState(false)
    const context=useContext(Portcon);
    const{getuser,users,name}=context;
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
        useEffect(()=>{
          if(!localStorage.getItem('token')){
            navigate('/signup')
        }
          getuser();
        },[])
  return (
    <>
      <div id='aboutpage' className='  bg-gradient-to-br
     to-[#00030dfe] from-[#0db5d6e0] border-b-2 pt-2
      border-white pb-5 '>
        <div className='topcard bg-[#060e27fe] md:w-[92%] lg:w-[96%] 
        md:mx-auto  rounded-lg p-4 h-[95%] shadow-black
         shadow-xl '>
            <div className='flex justify-between pb-6'>
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
                    <li className='hover:text-purple-300 cursor-pointer'
                     onClick={()=>{
                      if(!users){
                        navigate('/form')
                      }
                      else{
                        navigate('/dashboard')
                      }


                    }
                      }>Dashboard</li>
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
            <div className='mt-2 bg-[#09252c] fold:w-[120%] text-white border-2 border-white rounded-lg shadow-lg  hover:bg-[#0b0b1c]  shadow-orange-500'>
      <img className='h-40 w-40 m-2 float-left rounded-full' src='https://www.business2community.com/wp-content/uploads/2015/03/Identity-Question-Mark5.jpg5.jpg'></img>
        <p className='p-3 pt-8 justify-normal font-light leading-8'>A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work with press, potential collaborators or employers. Much like your PDF portfolio, a portfolio website can be used when applying for jobs or internships. While it is a word which was once only used for artists, a portfolio in the modern work sense refers to any body of creative work you use to show potential clients what you can do. A graphic designer, photographer, or artist might use a portfolio, but so do writers and other content creators, web developers, app developers, and even people like piercers and tattoo artists. It often stands in place of a traditional CV, although it can also be used to augment one.

A portfolio website, obviously, is what happens when you take that body of work into online spaces. Instead of building a ‘standard’ website, most of which are single-page scrollers, you need to consider how best to show off your work through a digital medium.
        </p>
      </div>
     <div id='page' className='m-4 my-4 flex flex-col md:flex-row md:space-x-3 space-around'>
     <div className=' mx-auto md:mx-0 m-4 border-2 border-white p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg shadow-orange-500 sh rounded-2xl text-white bg-[#09252c] hover:bg-[#0b0b1c]'>
      <h2 className='text-center font-extrabold fold:text-md folld:text-xl font-Mono text-sm sm:text-2xl'> OUR VISION</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Skill Detail's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better services.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best goods available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Skill Detail's at minimum costs.</li>
      </ul>
     </div>
     <div className='mx-auto md:mx-0 m-4 border-2 border-white p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg shadow-orange-500 sh rounded-2xl
      text-white bg-[#09252c] hover:bg-[#0b0b1c]'>
      <h2 className='text-center font-extrabold font-Mono fold:text-md folld:text-xl text-sm sm:text-2xl'> OUR GOALS</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Skill Detail's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better services.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best goods available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Skill Detail's at minimum costs.</li>
      </ul>
     </div>
     <div className='mx-auto md:mx-0 m-4 border-2 border-white p-3 w-[90%] h-[30%] sm:w-[40%] shadow-lg shadow-orange-500
      sh rounded-2xl text-white bg-[#09252c] hover:bg-[#0b0b1c]'>
      <h2 className='text-center font-extrabold fold:text-md folld:text-xl font-Mono text-sm sm:text-2xl'> OUR SERVICES</h2>
      <ul className=' list-outside list-disc m-4 p-2'>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the ease of online Portfolio's .</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide the bestes Skill Detail's.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To provide better services.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the best person available.</li>
        <li className='sm:p-2 p-1 fold:text-xs text-sm folld:text-md font-medium hover:font-extrabold hover:text-yellow-50'>To ensure the good Skill Detail's .</li>
      </ul>
     </div>
     </div>
        </div>
    </div>



  
    </>
  )
}