import React from 'react'
import html from '../../public/assets/html.png'
import css from '../../public/assets/css.png'
import nodejs from '../../public/assets/nodejs.jpg'
import front from '../../public/assets/front-en.png'
import react from '../../public/assets/react.png'
import javascript from '../../public/assets/javascript.png'

const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:html
        },
        {
            id:2,
            src:css
        },
        {
            id:3,
            src:nodejs
        },
        {
            id:4,
            src:front
        },
        {
            id:5,
            src:react
        },
        {
            id:6,
            src:javascript
        },
    ]
  return (
    <div name='Portfolio' className=' bg-white
    w-full h-full'>
      <div className=' max-w-screen-lg mx-auto flex flex-col
       w-full h-full justify-center p-4'>
        <div className=' pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-700'>
                Portfolio
            </p>
            <p className='py-6'>
            Check out some of my work here.
            </p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-8 sm:px-0'>
            {portfolios.map(({id,src})=>(
                 <div key={id} className=' shadow-md shadow-gray-500 rounded-lg'>
                 <img src={src} alt="" className='rounded-md duration-200 
                 hover:scale-105 cursor-pointer' />
                 {/* <img src="css.jpg" alt="" /> */}
         
                 <div className=' flex items-center justify-center'>
                     <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo </button>
                     <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code </button>
                 </div>
                  </div>
            ))}
        
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
