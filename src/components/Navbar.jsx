import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between items-center  px-40 py-5 h-14 ">

        <div className='logo font-bold text-white text-2xl'>
          <span className='text-green-500' > &lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt; </span>
          </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold'  href="#">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
     <button className='text-white bg-green-700 my-5 rounded-full ring-white ring-1 flex justify-between items-center'>
      <div>
        <img className='invert  p-1 w-10 ' src="github1-removebg-preview.png" alt="github logo" />
        
        </div> 
        <span className='font-bold px-2' >GitHub</span>
        </button>
      </div>
      
    </nav>
  );
}

export default Navbar;
