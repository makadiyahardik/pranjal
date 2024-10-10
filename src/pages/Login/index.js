import React from 'react'

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
        <img
          className="w-12 h-12  mb-6"
          src="../Assets/Images/Logo.svg"
          alt="logo"
        />
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight mx-auto flex items-center justify-center tracking-tight text-[#101828] md:text-2xl dark:text-white">
          Log in to Atoms
          </h1>
          <p className="text-[#475467] text-[16px] leading-[24px] mx-auto flex items-center justify-center e">
          Connecting dots
          </p>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
            Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 h-12 border-[1px] focus:border-[#DDDDDD]  border-[#DDDDDD] ring-0 focus:ring-0 outline-none rounded-[8px] NewInputTpeV3Shodow bg-white"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 h-12 border-[1px] focus:border-[#DDDDDD]  border-[#DDDDDD] ring-0 focus:ring-0 outline-none rounded-[8px] NewInputTpeV3Shodow "
                required=""
              />
            </div>
          
            <button
              type="submit"
              className="font-semibold text-[16px] w-full bg-[#7F56D9] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 NewInputTpeV3Shodow h-12  rounded-[8px] " 
            >
              Sign in
            </button>
           
           <div className='mt-4 cursor-pointer flex w-full justify-center items-center gap-4 h-12 bg-white border border-[#D0D5DD]  ring-0 focus:ring-0 outline-none rounded-[8px] NewInputTpeV3Shodow'>
           <img
          className="w-8 h-8  "
          src="../Assets/Images/Google.svg"
          alt="logo"
        />
        <p className='text-[#344054] font-semibold text-[16px]'>Sign in with Google</p>
           </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Login