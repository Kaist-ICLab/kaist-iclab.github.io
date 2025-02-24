import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const displayPages = 5;
  const sidePages = Math.floor(displayPages / 2);
  const activeTheme = "z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
  const inactiveTheme = "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  const buttonDefaultTheme = "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  const buttonDisabledTheme = "text-gray-200 bg-gray-100 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-700"
  
  const calcDisplayPage=(page: number): number[] => {
    if( page <= sidePages && totalPages <= displayPages) {
      return Array.from({ length: Math.min(displayPages, totalPages) }, (_,idx) => idx+1);
    } else if (page <= sidePages) {
      return Array.from({ length: displayPages }, (_,idx) => idx+1);
    } else if (page >= totalPages-sidePages) {
      return Array.from({ length: displayPages }, (_,idx) => totalPages-displayPages+1+idx);
    } else {
      return Array.from({ length: displayPages }, (_,idx) => page-sidePages+idx);
    }
  }

  return <nav className="not-format" aria-label="Page navigation">
    <ul className="flex items-center -space-x-px h-10 text-base">
      <li>
        <button type="button" disabled={currentPage === 1} onClick={(e) => { e.preventDefault(); onPageChange(currentPage - 1) }} className={"flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-e-0 rounded-s-lg " + (currentPage === 1 ? buttonDisabledTheme : buttonDefaultTheme)}>
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
      </li>
      {
        calcDisplayPage(currentPage).map((page) => {
          return <li key={page}>
            <button type="button" onClick={(e) => { e.preventDefault(); onPageChange(page) }} className={page === currentPage ? activeTheme : inactiveTheme}>{page}</button>
          </li>
        })
      }
      <li>
        <button type="button" disabled={currentPage === totalPages} onClick={(e) => { e.preventDefault(); onPageChange(currentPage + 1) }} className={"flex items-center justify-center px-4 h-10 leading-tight border rounded-e-lg " + (currentPage === totalPages ? buttonDisabledTheme : buttonDefaultTheme)}>
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
};

export default Pagination;