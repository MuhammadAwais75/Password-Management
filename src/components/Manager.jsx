import React, { useEffect, useRef, useState } from 'react';
import { FaCopy, FaEdit } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
  const [form,setform] =useState({site:"", username:"", password:"",});
  const [passwordArray,setpasswordArray] = useState([]);
  

useEffect(()=>{
  let passwords = localStorage.getItem("password");
  if(passwords){
    setpasswordArray(JSON.parse(passwords)); // passwords name sa local storage ma kuch ha tab ap ky karo ga us ko load kar lo ga or useState wala passwordarray ko papolate kar lo ga warna ap kuch ni karo ga
      // jab ham start kar raha ha to hamara passworarry load ho raha ha 
  }
},[])
  const ref = useRef();
  const passwordref = useRef();



  const showpassword = () => {
    // alert("show the password")
    passwordref.current.type="text"
    if(ref.current.src.includes("eyecross-removebg-preview.png")){
      passwordref.current.type="text"
      ref.current.src="eye1-removebg-preview.png"

    }else{
      passwordref.current.type="password"
    ref.current.src= "eyecross-removebg-preview.png"
    }

  }


  const savePassword = () =>{
    setpasswordArray([...passwordArray, {...form, id: uuidv4()}])
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,form]))
    console.log(passwordArray);
    setform({site:"", username:"", password:""})

    // toast('Password save !', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    //   });
  }

  const deletePassword = (id) =>{
    console.log("Deleting password with id", id)
    let c = confirm("Do you realy want to delete this password?")
    if(c){
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))

    toast('Password Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    }  
  }
  const editPassword = (id) =>{
    console.log("Editing password with id", id)
    setform(passwordArray.filter(i=>i.id===id)[0])
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
  
  }


  const handleChange = (e) =>{
    setform({...form,[e.target.name]:e.target.value})  // pahla form ko saprid karo  or [e.target.name] key la ka us ma : e.target.vallue ko set kar do
  }
  
  const copyText = (text)=>{
    // toast('Copyed to Clipboard!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
    navigator.clipboard.writeText(text)
  }





  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= "Bounce"
/>
{/* Same as */}
<ToastContainer />
    <div className="absolute inset-0 -z-10 h-full w-full
     bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
     linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px]
         rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

        <div className='p-2 md:p-0 md:mycontainer min-h-[88.2vh] bg-green-50' >
          <h1  className='text-4xl font-bold text-center'>
            <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
            </h1>
          <p  className='text-green-700 text-lg text-center'>Your own Password Manager </p>

<div className='text-black flex  flex-col p-4 gap-8  '>

    <input value={form.site} onChange={handleChange}  placeholder='Enter website URL' className='rounded-full border border-green-500 text-black p-4 py-1' type="text" name='site' id='site' />

    <div  className='flex flex-col md:flex-row w-full justify-between gap-8'>
        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 text-black p-4 py-1 w-full' type="text" name='username' id='username' />

        <div className='relative ' >
        <input ref={passwordref} value={form.password} onChange={handleChange}  placeholder='Enter Password' className='rounded-full border border-green-500 text-black p-4 py-1 w-full' type="password" name='password' id='password'  />

        <span className='absolute right-[4px] top-[5px] cursor-pointer' onClick={showpassword} >
          <img ref={ref} className='p-1'   src="eye1-removebg-preview.png" width={32} alt="eye" />
        </span>

        </div>
    </div>
<div className='flex justify-center'>
    <button onClick={savePassword} className='flex justify-center items-center rounded-full bg-green-500 hover:bg-green-400 px-4 gap-2 py-2 w-fit border-2 border-green-800'>
    <lord-icon
    src="https://cdn.lordicon.com/jgnvfzqg.json"
    trigger="hover">
    </lord-icon>

    <span className='text-xl font-medium'>Save</span>
    </button>
    </div>

    </div>
    <div className='passwords' >
      <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>

      {passwordArray.length === 0 && <div>No password to show</div> }

      {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">

   <thead className='bg-green-800 text-white'>
    <tr>
       <th className='py-2'> Site </th>
       <th className='py-2'> username </th>
       <th className='py-2'> password </th>
       <th className='py-2'> Actions </th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
    {passwordArray.map((item,index)=>{
    return <tr key={index}>

       <td className=' border-white py-2 text-center '> 
        <div className='flex justify-center items-center gap-1'>
        <a href={item.site} target="_blank">{item.site}</a>
        <div className='cursor-pointer size-7 pt-2'onClick={()=>{copyText(item.setItem)}} >
        <FaCopy className='' />
        </div>
        </div>
         </td>

       <td className=' border-white py-2 text-center '> 
        <div className='flex justify-center items-center gap-1'  >
        <span>{item.username} </span>
       <div className='cursor-pointer size-7 pt-2' onClick={()=>{copyText(item.username)}} >
        <FaCopy className='' />
        </div>
        </div>
       </td>

       <td className=' border-white py-2 text-center'> 
        <div className='flex justify-center items-center gap-1'>
        <span>{item.password} </span>
       <div className='cursor-pointer size-7 pt-2' onClick={()=>{copyText(item.password)}} >
        <FaCopy className='' />
        </div>
        </div>
         </td>
         
         <td className='justify-center py-2 border-white text-center'>

          <div className='flex justify-center items-center gap-2'>

          <span className='cursor-pointer text-xl' onClick={()=>{editPassword(item.id)}} > <FaEdit/> </span>
          <span className='cursor-pointer' onClick={()=>{deletePassword(item.id)}} >
          <lord-icon
    src="https://cdn.lordicon.com/wpyrrmcq.json"
    trigger="hover"
    style={{"width":"23px" ,"height":"22px"}}>
</lord-icon>
          </span>

          </div>
         </td>
         

    </tr>})}
   
  </tbody>
</table> }

    </div>
    </div>
    </>
  );
}

export default Manager;
