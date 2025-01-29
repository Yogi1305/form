import React, { useState } from 'react'

const Profile = ({data,setdata}) => {
   const handlechange=(e,item)=>{
       setdata((prev)=>({...prev,[item]:e.target.value}))
      
       
   }
  return (
    <div className=' flex flex-col' > 
       <label>Name :</label>
       <input type='text' placeholder={data.Name} className='m-2 p-2 border w-[20%] border-amber-400 rounded-lg' onChange={(e)=>handlechange(e,"Name")}></input>
       <label>Mobile :</label>
       <input type='number' placeholder='Entername' className='m-2 p-2 w-[20%] border border-amber-400 rounded-lg'onChange={(e)=>handlechange(e,"Mobile")}></input>
    </div>
  )
}

export default Profile