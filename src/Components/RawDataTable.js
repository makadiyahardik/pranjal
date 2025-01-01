import SortingArrow from '@/Components/SortingArrow/SortingArrow';
import { useState, useEffect } from 'react';

export default function RawDataTable(props) {
  

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
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
  const sortedData = [...props.data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
    return 0;
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(sortedData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="lg:max-w-[1280px] w-full flex flex-col justify-start items-center mx-auto mt-5">
      

      <div className="overflow-x-auto customeScrollbar  w-full mx-auto">
        <table className=" w-full border-collapse border border-gray-200 rounded-[40px] ">
          <thead>
            <tr className="bg-white">
              {props.TableHeads.map((item,index)=>{
                return(
                  <th
                  className="px-4 py-4 cursor-pointer font-semibold text-[12px] leading-[18px] text-[#475467] whitespace-nowrap text-center"
                  onClick={() => handleSort(item.key)}
                key={index}>
                  <div className="flex gap-2 justify-center items-center">
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
                className={`border border-b-1 hover:bg-[#D4EAFF] ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.rank}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.symbol}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.tradingDate}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.previous}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.open}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.high}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.low}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.close}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.vwap}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.tradedQty.toLocaleString()}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.deliveredQty.toLocaleString()}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.turnover.toLocaleString()}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.deliveryPercent}
                </td>
                <td
                  className={` px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828] ${
                    row.movePercent.startsWith('-')
                      ? 'bg-[#FF3636] bg-opacity-50'
                      : 'bg-[#26A641] bg-opacity-50'
                  }`}
                >
                  {row.movePercent}
                </td>
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.freeFloatPercent}
                </td>
               
                <td className=" px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]">
                  {row.numTrades.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="flex justify-between mt-4 w-full">
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={prevPage}
            className="NewInputTpeV3Shodow border border-[#D0D5DD] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] w-auto font-semibold px-4 py-2 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="NewInputTpeV3Shodow border border-[#D0D5DD] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] w-auto px-4 font-semibold disabled:opacity-50"
            disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
        <span>
          Page {currentPage} of {Math.ceil(sortedData.length / itemsPerPage)}
        </span>
      </div>
    </div>
  );
}
