import React from 'react'

const ChatgptSection = () => {
  return (
    <div className='chatgptSection bg-black h-screen flex justify-center items-center flex-col '>
    <div className='mb-5'>
      <h1 className='text-white text-3xl font-semibold'>What’s on your mind today?</h1>
    </div>
    <div>
        <input autoFocus  className=' w-130 py-4 px-4 rounded-2xl text-white bg-gray-800' type="text" name="" id="" placeholder='Ask Anything...' />
        <i className="fa-solid fa-arrow-up text-lg cursor-pointer hover:text-white hover:bg-black hover:scale-110 transition-all duration-200 text-black bg-white p-3 rounded-lg relative right-12"></i>
    </div>
    </div>
  )
}

export default ChatgptSection
