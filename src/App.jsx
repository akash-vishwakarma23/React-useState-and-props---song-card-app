import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
 const data = [
  {image :"https://images.unsplash.com/photo-1515010137531-66995c7f40e6?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name : "one day", artist: "elon", added: false},
  {image :"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name : "challenger", artist: "alan walker", added: false},
  {image :"https://images.unsplash.com/photo-1497616987741-7fba8102046e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name : "something", artist: "alina", added: false},
  {image :"https://images.unsplash.com/photo-1615554851544-e6249b92a492?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name : "good one", artist: "akon", added: false}
 ]
 const [songData, setSongData] = useState(data);
 const handleClick = (index)=>{
   setSongData((prev)=>{
    return prev.map((item,itemindex)=>{
      if(itemindex === index){
        return {...item, added:!item.added}
      }
      return item;  
    })
   })
 }
 
  return (
    <>
     <div className='w-full h-screen bg-zinc-300'>
      <Navbar data = {songData}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
         {songData.map((obj,index)=>{
          return <Card  data = {obj} handleClick = {handleClick} index = {index} key={index}/>
         })}
      </div>
     </div>
    </>
  )
}

export default App





// passing data via props


// import React, { useState } from 'react'
// import Card from './Components/Card'

// const App = () => {

//   const raw = [
//     {name: 'John', profession: 'painter', image : "https://images.unsplash.com/photo-1619300026534-8e8a76941138?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: "false"},
//     {name: 'rohit', profession: 'artist', image : "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: "false"},
//     {name: 'sohan', profession: 'coder', image : "https://images.unsplash.com/photo-1517530094915-500495b15ade?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: "false"},
//     {name: 'jack', profession: 'keeper', image : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: "false"}
//   ];

//   const [data,setData] = useState(raw);
//   const handleClick = (changingIndex)=>{
//     setData((prev)=>{
//       return prev.map((item,index)=>{
//         if (index === changingIndex) return {...item, friends: !item.friends}
//         return item;
//       })
//     })
//   }

//   return (
//     <>
//     <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
//     {data.map((item,index)=>(
//       <Card key={index} index ={index} handleClick = {handleClick} values = {item}/>
//     ))}
//     </div>
     
      
//     </>
//   )
// }

// export default App
