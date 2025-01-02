import { useState, useEffect } from 'react';

const YearSelection = (props) => {
    const [currentPage, setCurrentPage] = useState(0); 
    const [selectedYear, setSelectedYear] = useState(null); 
  
    const currentYear = new Date().getFullYear();
  
 
    useEffect(() => {
      setSelectedYear(currentYear);
    }, [currentYear]);
  
    const years = Array.from({ length: 51 }, (_, i) => currentYear - i);
  
    const yearsPerPage = 9;
  
    const totalPages = Math.ceil(years.length / yearsPerPage);
  
    const yearsToShow = years.slice(
      currentPage * yearsPerPage,
      (currentPage + 1) * yearsPerPage
    );
  
    const handlePrev = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
   
    
    const handleYearClick = (year) => {
      props.setSelectedYear(year);
      props.setShowYears(false); 
    };
  return (
    <div className='bg-black bg-opacity-50 fixed inset-0 z-50 w-full h-full  flex justify-center items-center px-1'>
       <div className="w-[300px] bg-white border border-[#EAECF0] rounded-lg shadow-lg">
          <div className="flex justify-between items-center p-4">
            <button
              className={`text-lg ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : ''}`}
              onClick={handlePrev}
              disabled={currentPage === 0}
            >
              &lt;
            </button>

            <p className="font-semibold text-lg">
                {yearsToShow[yearsToShow.length - 1]} - {yearsToShow[0]}
            </p>

            <button
              className={`text-lg ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : ''}`}
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 p-4">
          {yearsToShow.map((year, index) => (
              <button
                key={index}
                className={`${
                  year === selectedYear
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-600 hover:bg-gray-200'
                } rounded-lg p-2 text-center`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        </div>
  )
}

export default YearSelection