import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='max-w-screen-lg mx-auto flex flex-col
    justify-center w-full h-full'>
      <div>
        <div className=''>
            <p className='text-4xl font-bold inline
             border-b-4 border-black'>
             Contact
            </p>
            <p className='py-6 '>
            Submit the form below to get in touch with me
            </p>
        </div>
        <div>
            <form action='https://getform.io/f/51c00cb6-ae20-4a0b-a4fa-b7efe1471014' method='POST' className='flex flex-col mx-auto w-full md:w-1/2 '>
                <input type='text' name='name' placeholder='Enter Your name'
                className='p-2 bg-transparent border-2 rounded-md 
                 focus:outline-none'>

                </input>
                <input type='Email' name='Email' placeholder='Enter Your Email'
                className='p-2 bg-transparent border-2 rounded-md
                 focus:outline-none'>
                </input>
                <textarea name='Message'placeholder='Enter your message here!'  rows='10' className='p-2 bg-transparent
                 border-2 rounded-md focus:outline-none'> 
                </textarea>
                <button className=' text-white bg-gradient-to-b
                 from-cyan-500 to-blue-500 px-6 py-3 mx-auto my-3
                  flex items-center rounded-md hover:scale-105 duration-300'> Let's talk </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
