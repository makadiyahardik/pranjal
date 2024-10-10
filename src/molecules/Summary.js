import InfoCard from '@/Components/InfoCard/InfoCard'
import React from 'react'

const Summary = (props) => {
  return (
    <div className="flex flex-col w-full justify-start ">
        <h1 className="text-[24px] font-semibold text-[#101828]">Summary</h1>
        <div className="flex flex-wrap gap-4 justify-start items-center  mt-10">
         
      

         <InfoCard label={props.customers.label}  total={props.customers.total} ratio={props.customers.ratio} overAllPeformance={props.customers.overAllPeformance}/>
         <InfoCard label={props.members.label}  total={props.members.total} ratio={props.members.ratio} overAllPeformance={props.members.overAllPeformance}/>
         <InfoCard label={props.active.label}  total={props.active.total} ratio={props.active.ratio} overAllPeformance={props.active.overAllPeformance}/>

        </div>
    </div>
  )
}

export default Summary