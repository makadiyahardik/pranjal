import React from 'react'

const InfoCard = (props) => {
  return (
    <div className="flex flex-col justify-start items-start border border-[#EAECF0] rounded-[12px] bg-white h-[176px] sm:w-[389px] w-full p-5 relative">
         <img
          className="absolute right-3 bottom-3 "
          src={props.overAllPeformance === "inGrowth" ? "../Assets/Images/UpStock.svg": "../Assets/Images/DownStock.svg" }
          alt=""
          
        />
            <div className="flex justify-between items-center w-full">
        <h1 className="text-[16px] leading-[24px] font-semibold text-[#101828]">{props.label}</h1>
        <img
          className="w-5 h-5  cursor-pointer "
          src="../Assets/Images/Dots.svg"
          alt="logo"
        />
            </div>
            <div className="flex flex-col justify-start items-start w-full mt-8">
        <h1 className="text-[46px] leading-[44px] font-semibold text-[#101828]">{props.total}</h1>
        <div className="mt-4 flex gap-1 justify-center items-center w-fulll">
<div className="flex gap-2 justify-center items-center">
<img
          className="w-5 h-5  "
          
          src={props.overAllPeformance === "inGrowth" ? "../Assets/Images/Profit.svg" : "../Assets/Images/Loss.svg"}
          alt="logo"
        />
  <p className={` text-[14px] leading-5 font-medium ${props.overAllPeformance === "inGrowth" ? "text-[#067647]":"text-[#B42318]"}`}>{props.ratio}%</p>
</div>
<div className="flex gap-2 justify-center items-center">
  <p className="text-[#475467] text-[14px] leading-5 font-medium">vs last month</p>
</div>
        </div>
       
            </div>
          </div>
  )
}

export default InfoCard