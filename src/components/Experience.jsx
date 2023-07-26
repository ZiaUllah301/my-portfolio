import React from 'react'
import one from "../../public/assets/experience1.jpg"
import two from "../../public/assets/experience2.png"
import onee from "../../public/assets/experience1.jpg"
import four from "../../public/assets/experience4.png"
import five from "../../public/assets/experience5.png"
import six from "../../public/assets/experience6.jpg"
import seven from "../../public/assets/experience7.png"
import eight from "../../public/assets/experience8.png"

const Experience = () => {
    const experience=[
        {
            id:1,
            src:one,
            title:'Html',
            style:'shadow-orange-500'
            
        },
        {
            id:2,
            src:two,
            title:'Css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:onee,
            title:'ReactJs',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:four,
            title:'NodeJs',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:five,
            title:'NextJs',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:six,
            title:'Mongodb',
            style:'shadow-gray-800'
        },
        {
            id:7,
            src:seven,
            title:'JavaScript',
            style:'shadow-gray-800'
        },
        {
            id:8,
            src:eight,
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
