import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Portcon from '../contextapi/Portfoliocontext';
import RatingStars from './Ratingstars';
const UsersPage = () => {
  const[rating,setrating]=useState("")
  const [aLLusers, setaLLusers] = useState([]);
  const context=useContext(Portcon);
  const{fetchUsers,getuser,name,users,allusers}=context;
  const navigate=useNavigate();
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
  const[flag,setflag]=useState(false)

  const[search,setSearch]=useState("")

  const[profession,setprofession]=useState("")
  const handleProfession=async(profession)=>{
    if(profession==""){
      if(search=="" && rating==""){
        setaLLusers(allusers)
      }
      else{
        if(!search){
          handleRating(rating);
        }
        else{
          handleSearch(search);
        }
      }
    }
    else{
      if(search=="" && rating==""){
        var arr=allusers.filter((element)=>{
            return element.profession.includes(profession);
        })
        setaLLusers(arr)
      }
      else{
        if(!rating){

          var arr=allusers.filter((element)=>{
            return element.profession.includes(profession) && element.name.includes(search);
          })
          setaLLusers(arr)
        }
        else{

          var arr=allusers.filter((element)=>{
            return element.profession.includes(profession) && element.star==rating;
          })
          setaLLusers(arr)
        }
 } } }

 const handleRating=async(rating)=>{
  if(rating==""){
    if(search=="" && profession==""){
      setaLLusers(allusers);
    }
    else{
      if(search=="" && profession!==""){
        handleProfession();
      }
      else{
        handleSearch();
      }
    }
    
  }
  else{
    if(profession==""){
      var arr=allusers.filter((element)=>{
        return element.stars==rating && element.name.includes(search);
    })
    setaLLusers(arr);
 }
 else{
  if(search==""){
    var arr=allusers.filter((element)=>{
      return element.stars==rating && element.profession.includes(profession);
  })
  setaLLusers(arr);
}
else{
    var arr=allusers.filter((element)=>{
      return element.stars==rating ;
  })
  setaLLusers(arr);

}
 }
   
} }
  const handleSearch=async()=>{
    
    if(search!==""){
      var arr=allusers.filter(element => {
        return element.name.includes(search);    
      });
      setaLLusers(arr)
      
    }
    else{
      fetchUsers();
      setaLLusers(allusers)
    }
    
    
    
  }
  useEffect(()=>{
    handleSearch();
  },[search])
  
  useEffect(()=>{
    handleRating(rating);
  },[rating])
  useEffect(()=>{
    handleProfession(profession);
  },[profession])
  
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/signup')
  }
    getuser();
    fetchUsers();
    setaLLusers(allusers);
    setTimeout(() => {
      setflag(true)
    }, 500);
  },[] );
  return (
    <>
    <div className='bg-gradient-to-br
     to-[#00030dfe] from-[#0db5d6e0] pb-40'>

    <div className='flex justify-between bg-gradient-to-tr
          to-[#00030dfe] from-[#2e7684f7] p-5 '>
                <div className='text-white font-extrabold md:text-xl cursor-pointer' onClick={()=>navigate('/')}>PORTFOLIO.com</div>
               
                <div className={`hamburger m-1 inline-block
                 cursor-pointer  text-end xl:hidden 
                 pr-1 absolute pl-[82%] phone:pl-[70%] sm:${open}?${togglestyle}:""`}  onClick={togglestyle}>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    <div className="line h-0.5 w-5 my-1 bg-white"></div>
                    </div>
                    <div>
                    <ul className='border-2 border-white 
                    bg-gradient-to-t from-[#13b4e4f1] to-[#0f169688] 
                    sm:bg-none sm:border-0
                    justify-center p-4 flex-col absolute right-6
                    sm:flex md:flex-row text-white 
                        lg:bg-fixed xl:translate-x-[82vw]
                        text-sm space-x-4 md:space-x-2 lg:space-x-5 font-semibold
                      space-y-2 sm:space-y-0 top-3 z-50 sm:top-4 sm:right-2
                      md:text-xs lg:text-sm  '
                      style={transu}>
                    <li className='pl-4 sm:pl-0 hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/')}>Home</li>
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>navigate('/about')}>About</li>
                    <li className='hover:text-purple-300 cursor-pointer' onClick={()=>{
                      if(!users){
                        navigate('/form')
                      }
                      else{
                        navigate('/dashboard')
                      }


                    }
                      }>Dashboard</li>
                    <li className='hover:text-purple-300 cursor-pointer lg:text-md'>👤 {name}</li>
                </ul>
                    </div>
            </div>
    <div className='p-7 pb-60 md:pb-64 phone:pb-0 '>
    <div className="flex justify-center items-center py-8">
    <input type="text" className="bg-gray-800 text-slate-200
     border-2 border-gray-600 rounded-md px-4 py-2 focus:outline-none
      focus:border-blue-500 transition-all duration-300
       hover:border-blue-500 sm:w-80 placeholder:text-slate-400 hover:sm:w-96 hover:phone:w-44
        phone:w-40" placeholder='Search User....' onChange={async(e)=>{
          await setSearch(e.target.value)
          // await console.log(search)
          // handleSearch();
        }} />
  </div>

<div className='flex  phone:flex-col mb-3 am:mb-0 phone:space-y-2 space-y-0 phone:mx-[10%] mx-0 py-3 justify-around'>
  <div>

<input list="professions" name="professions" id="browser" className="bg-gray-800
 text-slate-200
     border-2 border-gray-600 rounded-3xl px-4 py-2 focus:outline-none
      focus:border-blue-500 transition-all duration-300
       hover:border-blue-500 cursor-pointer font-extrabold  placeholder:text-slate-400 w-36 text-xs
        " placeholder='Profession'  onChange={async(e)=>{
          await setprofession(e.target.value)
        }}>
</input>
<datalist id="professions">
  <option value="Developer"/>
  <option value="Designer"/>
  <option value="Chef"/>
  <option value="Student" />
  <option value="Others"/>
</datalist>
  </div>
  <div>

<input list="rating" name="rating" id="browser" className="bg-gray-800
 text-slate-200
     border-2 border-gray-600 rounded-3xl px-4 py-2 focus:outline-none
      focus:border-blue-500 transition-all duration-300
       hover:border-blue-500 cursor-pointer font-extrabold  placeholder:text-slate-400 w-36 text-xs
        " placeholder='Rating'  onChange={async(e)=>{
          await setrating(e.target.value)
        }}>
</input>
<datalist id="rating">
  <option value="1"/>
  <option value="2"/>
  <option value="3"/>
  <option value="4" />
  <option value="5"/>
</datalist>
  </div>
</div>

 {flag &&   <div className="grid grid-cols-2 phone:grid-cols-1 md:grid-cols-3 
    lg:grid-cols-4 gap-4  sm:py-16 phone:py-5 ">
      {aLLusers.map(user => (
          <div key={user._id} className="  bg-gradient-to-tr from-[#BFF098] to-[#6FD6FF]  rounded-lg shadow-md mx-auto sm:mx-0 cursor-pointer hover:shadow-2xl
           hover:text-semibold p-10 sm:p-4"
          onClick={()=>{navigate(`/user/:${user._id}`,
           { state: { data: user } })}}>
          <img
            src={user.pic} // Replace with the actual field name for the user's image URL
            alt={user.name} // Replace with the actual field name for the user's name
            className="sm:w-40 sm:h-40 object-cover mx-auto rounded-full h-20 w-20 mb-4"
            />
          <div className='text-center'>
            <h2 className="text-lg font-semibold mx-auto">{user.name}</h2>
            <p className="text-gray-500 text-sm mx-auto">{user.profession}</p> {/* Replace with the actual field name for the user's profession */}
          </div>
          <div className='sm:flex justify-around'>
          <RatingStars initialRating={user.stars}  />
          <p className='text-xs font-extrabold pt-1 text-[#716d6d]'>Rated by: {user.ratenum}+</p>
            </div>
        </div>
      ))}
    </div>}
    </div>
      </div>
            </>
  );
};

export default UsersPage;

