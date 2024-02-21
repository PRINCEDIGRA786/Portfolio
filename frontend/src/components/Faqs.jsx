import React from 'react'
import { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs'
import { IoAdd } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

export default function Faqs(props) {
    
    var{question, answer}=props;
    const[tosign,settosign]=useState(
        {
          'display':'block'
        }
      )
    const[faqstate,setfaqstate]=useState(
        {
          'display':'none',
        }
      );
      const faqclick=()=>{
        if(faqstate.display=='none'){
          setfaqstate({
            'display':'block'
          })
          settosign({
            'display':'none'}
          )
        }
        else{
          setfaqstate({
            'display':'none'
          })
          settosign({
            'transform':'block'}
          )
        }
    
    
      }
  return (
    <>
       <div className=' shadow-md bg-gradient-to-b to-[#00030dfe] from-[#056276e0]
      text-slate-100 hover:text-white mx-[12%] phone:mx-1 '>
        <span className='flex justify-between duration-500 text-xl md:text-2xl p-4 h-20 phone:h-14 
         bg-[#0c4357] hover:bg-[#0e5863] '>
          <div>
        <h1 className='pl-2 phone:text-xs justify-start'>{question}</h1>
          </div>

        <div onClick={faqclick} className=' delay-1000'>
        <p className='h-7 w-7  phone:h-6 phone:w-6 font-bold sign pt-1 mr-5' >
            <IoAdd className='h-10 w-10 font-extrabold phone:h-5 phone:w-5 phone:mb-2 phone:ml-5' style={tosign}/>
            <IoCloseSharp className='h-10 w-10 font-extrabold phone:w-5 phone:h-5' style={faqstate}/>
            
            </p>
        </div>

        </span>
        <span className=' delay-1000'>
      <p style={faqstate} className='p-7 phone:text-xs phone:p-5 md:text-2xl text-xl font-semibold leading-loose'>
      {answer}
      </p>

        </span>
      </div>

    </>
  )
}
