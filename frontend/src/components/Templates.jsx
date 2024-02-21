import React, { useContext } from 'react';
import { FaCode } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io5";
import { FaLandmark } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { BsFillMotherboardFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Portcon from '../contextapi/Portfoliocontext';

export default function Templates() {
    const context=useContext(Portcon);
    const{user}=context;
    const navigate=useNavigate();
    const funtoNavigate=(location,data)=>{
        if(user){
           var ans= window.confirm("Your portfolio is already created. Wana go to dashboard");
           if(ans){
            navigate('/dashboard')
           }
        }
        else{
            navigate(`/${location}`, { state: { data: data } })

        }

    }
  return (
    <>
    <div id='ful' className=' py-2 bg-gradient-to-t
     to-[#00030dfe] from-[#0db5d6e0] p-5'>
        <h1 className='text-white text-2xl py-3 text-center font-extrabold '>CHOOSE YOUR PROFESSION:
        </h1>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row  
        justify-center sm:justify-around sm:gap-5
         space-y-4 sm:space-y-0  sm:mx-0 py-5'>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <FaCode className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Developer</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3
                 font-semibold rounded-xl hover:rounded-2xl bg-[#14b9dae0]'
                 onClick={()=>funtoNavigate('form',"Developer")}
                 >Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <IoLogoDesignernews className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Designer</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3
                 font-semibold rounded-xl hover:rounded-2xl bg-[#14b9dae0]'
                 onClick={()=>funtoNavigate('form',"Designer")}>Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <FaLandmark className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Banker</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3 font-semibold rounded-xl 
                hover:rounded-2xl bg-[#14b9dae0]' 
                onClick={()=>funtoNavigate('form',"Banker")}>Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <GiTeacher className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Professor</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3 font-semibold rounded-xl
                 hover:rounded-2xl bg-[#14b9dae0]'
                 onClick={()=>funtoNavigate('form',"Professor")}>Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <FaUserDoctor className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Doctor</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3 font-semibold rounded-xl 
                hover:rounded-2xl bg-[#14b9dae0]'
                onClick={()=>funtoNavigate('form',"Doctor")}>Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <SiCodechef className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Chef</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3 font-semibold rounded-xl 
                hover:rounded-2xl bg-[#14b9dae0]'
                onClick={()=>funtoNavigate('form',"Chef")}>Register now</button>
                </div>

            </div>
            <div className='border-2 border-white  phone:w-48 bg-[#060e27fe] 
            p-5 h-60 w-60 rounded-xl text-center shadow-xl shadow-[#00030dfe]'>
                <div>
                <BsFillMotherboardFill className='text-white h-20 w-20 mx-auto'/>
                </div>
                <h2 className='text-white text-2xl font-extrabold'>Others</h2>
                <div className='mt-5'>
                <button className=' hover:bg-[#54eee6] text-white p-3 font-semibold rounded-xl 
                hover:rounded-2xl bg-[#14b9dae0]'
                onClick={()=>funtoNavigate('form',"")}>Register now</button>
                </div>

            </div>
        </div>
    </div>
      
    </>
  )
}
