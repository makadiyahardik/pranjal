import { useState, useEffect } from 'react';
import Table from '../Components/Table';
import Summary from '@/molecules/Summary';
import YearSelection from '@/Components/YearSelection/YearSelection';
import ADDvTable from '@/Components/ADDvTable';
import ADDVSockersTable from '@/Components/ADDVSockersTable';
import AnnouncementTable from '@/Components/AnnouncementTable';
import DealsTabel from '@/Components/DealsTabel';
import Heading from '@/Atoms/Heading';

export default function Home() {
  const customers = {
    id: 1,
    label: 'Total customers',
    total: '2,420',
    ratio: 40,
    overAllPeformance: 'inGrowth',
  };
  const members = {
    id: 1,
    label: 'Members',
    total: '1220',
    ratio: 10,
    overAllPeformance: 'inLoss',
  };
  const active = {
    id: 1,
    label: 'Active now',
    total: '136',
    ratio: 20,
    overAllPeformance: 'inGrowth',
  };
  const top20DaysData = [
    {
      rank: 1,
      symbol: 'ARVINDFASN',
      tradingDate: '22 Mar, 24',
      previous: 130,
      open: 130,
      high: 130,
      low: 130,
      close: 130,
      vwap: 130,
      tradedQty: 6825600,
      deliveredQty: 6825600,
      deliveryPercent: '33%',
      movePercent: '33%',
      freeFloatPercent: '33%',
      turnover: 5825600,
      numTrades: 2825600,
    },
    {
      rank: 2,
      symbol: 'ARVINDFASN',
      tradingDate: '25 Mar, 24',
      previous: 130,
      open: 130,
      high: 130,
      low: 10,
      close: 130,
      vwap: 120,
      tradedQty: 6825600,
      deliveredQty: 6825600,
      deliveryPercent: '33%',
      movePercent: '-5%',
      freeFloatPercent: '33%',
      turnover: 7825600,
      numTrades: 2825600,
    },
    {
      rank: 3,
      symbol: 'BRVINDFASN',
      tradingDate: '20 Mar, 24',
      previous: 100,
      open: 140,
      high: 180,
      low: 5,
      close: 150,
      vwap: 120,
      tradedQty: 6825600,
      deliveredQty: 6825600,
      deliveryPercent: '33%',
      movePercent: '15%',
      freeFloatPercent: '53%',
      turnover: 3825600,
      numTrades: 9825600,
    },
  ];

  const top20DaysTabelHeads = [
    {
      id: 1,
      label: 'Rank',
      key: 'rank',
    },
    {
      id: 2,
      label: 'Symbol',
      key: 'symbol',
    },
    {
      id: 3,
      label: 'Trading Date',
      key: 'tradingDate',
    },
    {
      id: 4,
      label: 'Previous',
      key: 'previous',
    },
    {
      id: 5,
      label: 'Open',
      key: 'open',
    },
    {
      id: 6,
      label: 'High',
      key: 'high',
    },
    {
      id: 7,
      label: 'Low',
      key: 'low',
    },
    {
      id: 8,
      label: 'Close',
      key: 'close',
    },
    {
      id: 9,
      label: 'VWAP',
      key: 'vwap',
    },
    {
      id: 10,
      label: 'Traded Qty',
      key: 'tradedQty',
    },
    {
      id: 11,
      label: 'Delivered Qty',
      key: 'deliveredQty',
    },
    {
      id: 12,
      label: 'Delivery %',
      key: 'deliveryPercent',
    },
    {
      id: 13,
      label: 'Move %',
      key: 'movePercent',
    },
    {
      id: 14,
      label: 'Free Float %',
      key: 'freeFloatPercent',
    },
    {
      id: 15,
      label: 'Turn Over',
      key: 'turnover',
    },
    {
      id: 16,
      label: '# of Trades',
      key: 'numTrades',
    },
  ];
  const ADDvData = [
    {
      rank: 1,
      monthyear: 'Mar,24',
      tradedQty: 6825600,
      vwap: 120,
      movePercent: '33%',
    },
    {
      rank: 2,
      monthyear: 'APR,24',
      tradedQty: 6825600,
      vwap: 120,
      movePercent: '33%',
    },
    {
      rank: 3,
      monthyear: 'MAY,24',
      tradedQty: 6825600,
      vwap: 120,
      movePercent: '33%',
    },
    {
      rank: 4,
      monthyear: 'JUN,24',
      tradedQty: 6825600,
      vwap: 120,
      movePercent: '33%',
    },
    {
      rank: 5,
      monthyear: 'JUL,24',
      tradedQty: 6825600,
      vwap: 120,
      movePercent: '33%',
    },
  ];
  const DDVTabelHeads = [
    {
      id: 1,
      label: 'Rank',
      key: 'rank',
    },
    {
      id: 2,
      label: 'Month,Year',
      key: 'monthyear',
    },
    {
      id: 3,
      label: 'Trading QTY',
      key: 'tradedQty',
    },
    {
      id: 4,
      label: 'Vwap',
      key: 'vwap',
    },
    {
      id: 5,
      label: '% Move',
      key: 'movePercent',
    },
  ];
  const [showYears, setShowYears] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedYear, setSelectedYear] = useState(null);

  const toggleYearSelector = () => {
    setShowYears(!showYears);
  };
  const dummyData = [
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: -5,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 330,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 336,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 336,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 331,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 335,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 313,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 93,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 23,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 43,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 3,
    },
  ];

  const dummyDataADDVSockers = [
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: -5,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Apr, 24',
      high: 140,
      low: 210,
      hLPercentage: '8%',
      movePercentage: 40,
    },
    {
      monthYear: 'Apr, 24',
      high: 150,
      low: 220,
      hLPercentage: '9%',
      movePercentage: 50,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: -5,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Apr, 24',
      high: 140,
      low: 210,
      hLPercentage: '8%',
      movePercentage: 40,
    },
    {
      monthYear: 'Apr, 24',
      high: 150,
      low: 220,
      hLPercentage: '9%',
      movePercentage: 50,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: -5,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Mar, 24',
      high: 130,
      low: 200,
      hLPercentage: '7%',
      movePercentage: 33,
    },
    {
      monthYear: 'Apr, 24',
      high: 140,
      low: 210,
      hLPercentage: '8%',
      movePercentage: 40,
    },
    {
      monthYear: 'Apr, 24',
      high: 150,
      low: 220,
      hLPercentage: '9%',
      movePercentage: 50,
    },
  ];

  const ADVSockersTabelHeads = [
    { label: 'Month, Year', key: 'monthYear' },
    { label: 'High', key: 'high' },
    { label: 'Low', key: 'low' },
    { label: 'H-L %', key: 'hLPercentage' },
    { label: '% Move', key: 'movePercentage' },
  ];
  const AnnouncementTabelHeads = [
    { label: 'Arvind Fashion Ltd', key: 'label' },
    { label: 'Date', key: 'date' },
    { label: 'Time', key: 'time' },
    { label: 'Description', key: 'description' },
    { label: 'PDF Link', key: 'pdf' },
  ];
  const AnnouncementTabelData = [
    {
      id: 1,
      label:
        'Announcement under Regulation 30 (LODR) - Press Release / Media Release',
      date: '26 Oct, 24',
      time: '9:47 AM',
      description:
        'Bharat Forge Limited has informed the Exchange regarding a press release dated October 02, 2024, titled Kalyani Strategic Systems Ltd from India and US-Based A',
      pdf: '',
    },
  ];
  const DealsTabelHeads = [
    { label: 'Client Name', key: 'label' },
    { label: 'Exchange', key: 'Exchange' },
    { label: 'Date', key: 'Date' },
    { label: 'Buy/Sell', key: 'Buy/Sell' },
    { label: 'Traded Qty', key: 'TradedQty' },
    { label: 'Average', key: 'Average' },
    { label: 'Traded Value', key: 'TradedValue' },
  ];
  const DealsTabelData = [
    {
      id: 1,
      label: 'EKTA HALWASIYA',
      Exchange: 'BSE',
      Date: '26 Oct, 24',
      BuySell: 'SELL',
      TradedQty: '1,67,444',
      Average: 79,
      TradedValue: '1,67,444',
    },
  ];
  return (
    <div className="flex flex-col w-full lg:max-w-[1280px] justify-start items-start mx-auto mt-10 px-5 pb-12">
      <Summary customers={customers} members={members} active={active} />
      <div className="flex w-full justify-start mt-10">
      
        <Heading title="Top 20 Delivery Days"/>
      </div>
      <Table
        TableHeads={top20DaysTabelHeads}
        Heading="Top 20 Delivery Days"
        data={top20DaysData}
      />
      <div className="flex w-full justify-start mt-10">
        
        <Heading title="Top 10 Delivery Days"/>
      </div>
      <div className="flex w-full flex-col gap-4 xs:flex-row xs:justify-between items-center mt-5">
        <div className="NewInputTpeV3Shodow border border-[#EAECF0] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] xs:w-[354px] w-[330px] p-2">
          <img className="" src="../Assets/Images/Flower.svg" alt="logo" />
          <p className="text-[#344054] text-[14px] font-semibold leading-[20px]">
            Vwap of top 10 delivery days of {selectedYear}:{' '}
          </p>
          <p className="text-black text-[14px] font-bold leading-[20px]">
            {top20DaysData?.length}{' '}
          </p>
        </div>
        <div className="relative">
          <div
            className="NewInputTpeV3Shodow border border-[#EAECF0] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] w-auto p-2 cursor-pointer"
            onClick={toggleYearSelector}
          >
            <img src="../Assets/Images/bar.svg" alt="logo" />
            <p className="text-[#344054] text-[14px] font-semibold leading-[20px]">
              {' '}
              Year Selection
            </p>
          </div>

          {showYears && (
            <YearSelection
              setShowYears={setShowYears}
              setSelectedYear={setSelectedYear}
            />
          )}
        </div>
      </div>
      <Table
        TableHeads={top20DaysTabelHeads}
        Heading="Top 20 Delivery Days"
        data={top20DaysData}
      />
      <div className="flex w-full justify-start mt-10">
      
        <Heading title=" ADDV Shockers"/>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
        <div className="flex flex-col gap-3 w-full">
         
          <Heading title="Top 5 ADDV Months"/>
          <ADDvTable
            TableHeads={DDVTabelHeads}
            Heading="Top 20 Delivery Days"
            data={ADDvData}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-[24px] font-semibold text-[#101828]">
            Lowest 5 Addv Months
          </h1>
          <ADDvTable
            TableHeads={DDVTabelHeads}
            Heading="Top 20 Delivery Days"
            data={ADDvData}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
        <div className="flex flex-col gap-3 w-full">
         
          <Heading title="ADDV Shockers"/>
          <ADDVSockersTable
            TableHeads={ADVSockersTabelHeads}
            Heading="Top 20 Delivery Days"
            data={dummyDataADDVSockers}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-[24px] font-semibold text-[#101828]">
            ADDV Shockers
          </h1>
          <ADDVSockersTable
            TableHeads={ADVSockersTabelHeads}
            Heading="Top 20 Delivery Days"
            data={dummyDataADDVSockers}
          />
        </div>
      </div>
      <div className="flex w-full justify-start mt-10">
        
        <Heading title="Corporate Announcements"/>
      </div>
      <div className="flex w-full flex-col gap-4 xs:flex-row xs:justify-between items-center my-6">
        <div className="relative">
          <div className="NewInputTpeV3Shodow border border-[#EAECF0] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] w-auto p-2 cursor-pointer">
            <img src="../Assets/Images/bar.svg" alt="logo" />
            <p className="text-[#344054] text-[14px] font-semibold leading-[20px]">
              {' '}
              More filters
            </p>
          </div>
        </div>
        <div className="NewInputTpeV3Shodow border border-[#EAECF0] rounded-[12px] bg-white flex gap-2 items-center justify-center h-[44px] xs:w-[354px] w-[330px] p-2">
          <img className="" src="../Assets/Images/Flower.svg" alt="logo" />
          <p className="text-[#344054] text-[14px] font-semibold leading-[20px]">
            Vwap of top 10 delivery days of {selectedYear}:{' '}
          </p>
          <p className="text-black text-[14px] font-bold leading-[20px]">
            {top20DaysData?.length}{' '}
          </p>
        </div>
      </div>
      <AnnouncementTable
        TableHeads={AnnouncementTabelHeads}
        data={AnnouncementTabelData}
      />
      <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
        <div className="flex flex-col gap-3 w-full">
          
          <Heading title="Top 5 ADDV Months"/>
          <ADDvTable
            TableHeads={DDVTabelHeads}
            data={ADDvData}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
          
          <Heading title="Lowest 5 Addv Months"/>
          <ADDvTable
            TableHeads={DDVTabelHeads}
            data={ADDvData}
          />
        </div>
      </div>

      <div className="flex flex-col  gap-6 w-full mt-8">
        <div className="flex flex-col gap-3 w-full">
        
          <Heading title=" Bulk Deals"/>
          <DealsTabel
            TableHeads={DealsTabelHeads}
            data={DealsTabelData}
          />
        </div>
        <div className="flex flex-col gap-3 w-full">
         

          <Heading title=" Block Deals"/>
          <DealsTabel
            TableHeads={DealsTabelHeads}
            data={DealsTabelData}
          />
        </div>
      </div>
    </div>
  );
}
