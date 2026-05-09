// import React from 'react'

const Head = ({inputtoggle , handleinputtoggle}) => {
  const handletoggle = ()=>{
    handleinputtoggle(!inputtoggle)
  }
  return (
    <div className="mainheaderSection absolute z-10 flex justify-between px-35 items-center"  >

    <img width={"19%"} src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />

    <button onClick={handletoggle} className="text-white bg-red-600 py-1 cursor-pointer px-4 border-none rounded-md">
    {inputtoggle ? "Sign In" : "Sign Up"}
    </button>
      
    </div>
  )
}

export default Head
