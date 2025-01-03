  export default function SortingArrow ({ isSorted, direction })  {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`ml-2 transform transition-transform ${
          isSorted && direction === "ascending" ? "rotate-180" : ""
        }`}
      >
        <path
          d="M7.99992 3.3335V12.6668M7.99992 12.6668L12.6666 8.00016M7.99992 12.6668L3.33325 8.00016"
          stroke="#475467"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  