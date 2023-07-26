import React from 'react'

const Experience = () => {
    const experience=[
        {
            id:1,
            src:'experience1.jpg',
            title:'Html',
            style:'shadow-orange-500'
            
        },
        {
            id:2,
            src:'experience2.png',
            title:'Css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:'experience3.png',
            title:'ReactJs',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:'experience4.png',
            title:'NodeJs',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:'experience5.png',
            title:'NextJs',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:'experience6.jpg',
            title:'Mongodb',
            style:'shadow-gray-800'
        },
        {
            id:7,
            src:'experience7.png',
            title:'JavaScript',
            style:'shadow-gray-800'
        },
        {
            id:8,
            src:'experience8.png',
            title:'GitHub',
            style:'shadow-pink-400'
        },
    ]
  return (
    <div name='Experience' className=' bg-white w-full h-full'>
      <div className=' max-w-screen-lg mx-auto flex flex-col
       justify-center w-full h-full '>
        <div>
            <p className=' text-4xl font-bold border-b-4
             border-gray-900 p-2 inline mb-6'>
                Experience
            </p>
            <p className='py-6 mt-6'>
            These are the Technologies I've worked with
            </p>
        </div>
        <div className=' grid grid-cols-2 md:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0'>
             {experience.map(({id,src,title,style})=>(
                <div key={id} className={` shadow-md hover:scale-105 duration-500
                py-2 rounded-lg ${style}`}>
                    <img src={src} className='w-20 mx-auto'>
                    </img>
                    <p className='mt-6 '>{title}</p>
                </div>
        ))}
            
        </div>
      </div>
    </div>
  )
}

export default Experience;
