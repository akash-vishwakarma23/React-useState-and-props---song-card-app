import React from 'react'

function Card({data,handleClick,index}) {

    const {image, name, artist, added } = data;
    
  return (
    <div className='w-60 p-4 bg-zinc-100 rounded flex gap-4 pb-8 relative'>
      <div className='w-20 h-20 bg-red-300 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className=''>
        <h3 className='text-xl leading-none font-semibold '>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`px-2 py-1 ${added ? "bg-teal-700" : "bg-orange-600"} whitespace-nowrap text-xs text-white rounded-full absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added ? "Added" : "Add To Favourites"}</button>
      
    </div>  
  )
}

export default Card





// pasing data via props


// import React from 'react'

// function Card({values,index,handleClick}) {
//   const {image, name , profession,friends} = values;
//   return (
   
//        <div className='w-52 bg-white rounded-md overflow-hidden '>
//         <div className='w-full h-32 bg-sky-200'>
//           <img className='w-full h-full object-cover' src={image} alt="" />
//         </div>
//         <div className='w-full p-3'>
//           <h3 className='text-xl font-semibold'>{name}</h3>
//           <h5 className='text-xs'>{profession}</h5>
//           <button onClick={()=>handleClick(index)} className={`px-2 py-1 mt-4 text-white ${friends ? "bg-green-600" : "bg-blue-500"} rounded-md text-xs font-semibold`}>{friends === true ? "friends" : "Add friends"}</button>
//         </div>
//        </div>
    
//   )
// }

// export default Card




// swip image with click button

// import React, { useState } from 'react'
// import { FaLongArrowAltRight } from "react-icons/fa";

// export const Card = () => {
//     const [val,setVal] = useState(false);
//   return (
//    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
//     <div className='relative w-72 h-44 bg-zinc-500 flex  rounded-md overflow-hidden'>
//         <img className={`shrink-0 transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full w-full object-cover`} src="https://images.unsplash.com/photo-1718197493441-7e51e04476f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <img className={`shrink-0 transition-transform duration-500 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} h-full w-full object-cover`} src="https://images.unsplash.com/photo-1713970700051-556d05c59fce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//         <span onClick={()=>setVal(()=>!val)} className='absolute h-8 w-8 flex items-center justify-center bottom-[7%] left-1/2  -translate-x -[-50%]  bg-[#dadada8b] text-zinc-100 rounded-full'>
//         <FaLongArrowAltRight size={".7em"} />
//         </span>
//     </div>
//    </div>
//   )
// }
