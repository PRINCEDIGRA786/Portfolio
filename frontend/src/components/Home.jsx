import React, { useContext, useEffect } from 'react'
import Templates from './Templates'
import Faqs from './Faqs'
import { IoImagesSharp } from "react-icons/io5";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Portcon from '../contextapi/Portfoliocontext';
import { FaUserAlt } from 'react-icons/fa';
import {PiSignOutBold} from 'react-icons/pi'
export default function Home() {
    const context=useContext(Portcon)
    const{user,dashboard,getuser,name}=context;
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/signup')
        }
        else{
            getuser();
            dashboard();

        }
      
    },[])

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
    
    var faqs = [
        { 'question': 'What is Portfolio.com?', 'answer': "An online portfolio (may also be called a digital portfolio or e-portfolio) is an online representation of work you have created, as well as your skills and experiences. It could be a website, blog, or even a video channel." },
        { 'question': 'How much does Portfolio.com cost?', 'answer': "Portfolio on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
        { 'question': 'Where can i create my id?', 'answer': "Various professions are given above you can choose from them if not availablele you can create your by your custom profession as well by clicking on the others options mention above" },
        { 'question': 'How do i cancel my Id?', 'answer': "Portfolio is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
        { 'question': 'What can i see others on Portfolio?', 'answer': "You can search them by typing their name and their profession above in the search bar easily" }
    ]
  return (
    <>
    <div id='homepage' className='  bg-gradient-to-br
     to-[#00030dfe] from-[#0db5d6e0] p-3 border-b-2 border-white pb-5 '>
        <div className='topcard bg-[#060e27fe] md:w-[92%] lg:w-[90%] 
        md:mx-auto  rounded-lg p-4 h-[95%] shadow-black
         shadow-xl '>
            <div className='flex justify-between'>
                <div className='text-white font-extrabold md:text-xl phone:text-xs'>PORTFOLIO.com</div>
                <div className={`hamburger m-1 inline-block
                 cursor-pointer  text-end lg:hidden phone:pl-[70%]
                    pr-1 absolute pl-[81%] sm:${open}?${togglestyle}:""`} onClick={togglestyle}>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    </div>
                <div>
                    <ul className=' border-2 border-white 
                    bg-gradient-to-t from-[#13b4e4f1] to-[#0f169688] 
                    sm:bg-none sm:border-0 h-80 space-y-7 w-40 md:w-fit
                 justify-center p-4 flex-col absolute right-6 rounded-3xl
                      sm:flex md:flex-row text-white 
                       lg:translate-x-[83vw] xl:translate-x-[80vw]
                     text-sm space-x-4 md:space-x-2 lg:space-x-5 font-semibold
                       sm:space-y-0 top-3 z-50 sm:top-4 sm:right-2
                      md:text-xs lg:text-sm '
                    style={transu}>
                    <li className='pl-4 sm:pl-0  hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/')}>Home</li>
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/about')}>About</li>
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>{
                              if(user){
                                navigate('/dashboard')}
                            
                            else{
                                navigate('/form')
                            }
                    }}>Dashboard</li>
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
            <div className='py-2 text-3xl text-center 
            font-extrabold phone:text-xl text-white'>Welcome To The Portfolio.com</div>
            <div className='py-4 imagediv'>
                <img 
            src="https://www.business2community.com/wp-content/uploads/2015/03/Identity-Question-Mark5.jpg5.jpg"
                className='h-40 w-40 mx-auto brightness-50 contrast-100 grayscale rounded-full '/>
            </div>
            <div className='py-2 px-10'>
                <h1 className='text-white font-extrabold text-3xl phone:text-lg text-center pb-4'>Who Are You?</h1>
                <p className='text-sm text-white md:px-20 md:leading-7 leading-5 font-mono text-center' >"Create your own profile and let the 
                rest of world know about you and your skills,talents and show them what you can do..."</p>          
            </div>
            <div className=' text-center py-6'>
                <button className=' p-2 bg-[#14b9dae0] rounded-xl text-white font-semibold text-sm hover:bg-[#5be1fc]' onClick={()=>{
                    if(user){
                        navigate('/dashboard')
                    } 
                    else{
                        navigate('/form')
                    }    

                }
            }>Create your own profile➡️</button>
            </div>
        </div>
    </div>
        <Templates/>

    <div className='py-10 bg-[#0e5863] px-2 sm:flex'>
        <div className='px-1 '>
        <h1 className='text-xl text-white text-center lg:text-start
         lg:pl-20 font-extrabold'>Customizable and truly unique</h1>
        <p className='text-md sm:px-20 lg:leading-7 py-2 leading-6 text-slate-200 font-semibold'>How can I create my portfolio freely and unique? Your online portfolio website should reflect your creativity and originality. Rather than being limited to a standard theme, Portfoliobox allows you to use a different style for every single page. This unparalleled freedom in design options is the reason why over one million unique websites have been created on this platform.</p>
        </div>
        <div>
            <MdOutlineChangeCircle className='sm: mt-10 lg:mr-40 h-20 w-20 mx-auto text-white'/>
        </div>
    </div>
    <div className='py-10 bg-[#0e5863] px-2 sm:flex sm:flex-row pb-20' >
        <div className='px-1 '>
        <h1 className='text-xl text-white text-center lg:text-start
         lg:pl-20 font-extrabold'>Password protected galleries</h1>
        <p className='text-md sm:px-20 lg:leading-7 py-2 leading-6
         text-slate-200 font-semibold '>
            Allow your clients to view projects as they progress using password-protected galleries on your photo portfolio website. You can provide instant secure access without having to download or transfer content.</p>
        </div>
        <div>
            <IoImagesSharp className=' mt-10 sm:mt-0  lg:mr-40  h-20 w-20 mx-auto text-white'/>
        </div>
    </div>



<div className='faq px-3 pt-10 space-y-2 sm:space-y-3 cursor-pointer 
bg-gradient-to-b to-[#00030dfe] from-[#0db5d6e0] pb-14'>
<h1 className='text-white text-2xl font-extrabold text-center'> FREQUENTLY ASKED QUESTIONS</h1>

{faqs.map((element, i) => (
    <Faqs key={i} question={element.question} answer={element.answer}></Faqs>

))}


</div>
<Footer/>
        
      
    </>
  )
}
