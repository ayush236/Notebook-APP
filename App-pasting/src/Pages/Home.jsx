import React, { useState } from 'react'

const Home = () => {
    const[title, settitle] =useState('');

  return (
    <div className='flex justify-center '>
        <input className=' bg-black m-7 p-5 text-amber-50 rounded-4xl'
        type='text'
        placeholder='enter title'
        value={title}
        onChange={(e)=> settitle(e.target.value)}

        />
    </div>
  )
}

export default Home