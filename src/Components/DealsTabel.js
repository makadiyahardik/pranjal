import React, { useState } from 'react';
import SortingArrow from './SortingArrow/SortingArrow';

const DealsTabel = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig?.key === key && sortConfig?.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
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
    <div className="lg:max-w-[1280px] w-full mx-auto ">
      <table className=" w-full border-collapse border border-gray-200 rounded-[40px]">
        <thead>
          <tr>
            {props.TableHeads.map((item, index) => (
              <th
                key={index}
                className="px-4 py-4 cursor-pointer font-semibold text-[12px] leading-[18px] text-[#475467] whitespace-nowrap text-center items-center justify-center"
                onClick={() => handleSort(item.key)}
              >
                <div className="flex justify-center items-center">
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
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border border-b-1">
              <td className="text-center px-4 py-4 font-medium text-[14px] text-[#101828]">{item.label}</td>
              <td className="text-center px-4 py-4 font-medium text-[14px] text-[#101828]">{item.Exchange}</td>
              <td className="text-center px-4 py-4 font-medium text-[14px] text-[#101828]">{item.Date}</td>
              <td className="text-center px-4 py-4 font-medium text-[14px] text-[#101828]">{item.BuySell}</td>
              <td
                className={`text-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]`}
              >
                {item.TradedQty}
              </td>
              <td
                className={`text-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]`}
              >
                {item.Average}
              </td> <td
                className={`text-center px-4 py-4 font-medium text-[14px] leading-[20px] text-[#101828]`}
              >
                {item.TradedValue}
              </td> 
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
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
};

export default DealsTabel;
