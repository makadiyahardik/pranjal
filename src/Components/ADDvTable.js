import SortingArrow from '@/Components/SortingArrow/SortingArrow';
import { useState, useEffect } from 'react';

export default function ADDvTable(props) {
  

  const [data, setData] = useState(props.data);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig?.key === key && sortConfig?.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ key, direction });
    setData(sortedData);
  };

  return (
    <div className="lg:max-w-[1280px] w-full flex flex-col justify-start items-center mx-auto NewInputTpeV3Shodow ">
      

      <div className="overflow-x-auto customeScrollbar p-4 w-full mx-auto  ">
        <table className="min-w-full table-auto border-collapse ">
          <thead>
            <tr className="bg-white">
              {props.TableHeads.map((item,index)=>{
                return(
                  <th
                  className="px-4 py-4 cursor-pointer font-semibold text-[12px] leading-[18px] text-[#475467] whitespace-nowrap text-center items-center justify-center"
                  onClick={() => handleSort(item.key)}
                key={index}>
                  <div className="flex  justify-center items-center">
                    <p>{item.label}</p>
                    <SortingArrow
                      isSorted={sortConfig?.key === item.key}
                      direction={
                        sortConfig?.key === item.key
                          ? sortConfig?.direction
                          : 'descending'
                      }
                    />
                  </div>
                </th>
                )
              })}
             

             
          
             
             
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-[#D4EAFF] border border-b-1 bg-gray-100"
              >
                <td className="text-center items-center justify-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.rank}
                </td>
                <td className="text-center items-center justify-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.monthyear}
                </td>
                <td className="text-center items-center justify-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.tradedQty}
                </td>
                <td className="text-center items-center justify-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.vwap}
                </td>
                <td
                  className={`text-center items-center justify-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828] ${
                    row.movePercent.startsWith('-')
                      ? 'bg-[#FF3636] bg-opacity-50'
                      : 'bg-[#26A641] bg-opacity-50'
                  }`}
                >
                  {row.movePercent}
                </td>
               
               
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
