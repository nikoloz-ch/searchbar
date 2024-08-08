import React, { useEffect, useState } from "react";
import { Pagination } from "flowbite-react";

const Stuff = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [results, setresults] = useState([]);

  let pagetheme = {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-[rgba(17,18,55,0.38)] dark:text-gray-400 enabled:dark:hover:text-white dark:backdrop-blur-3xl transition-all duration-500",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-[rgba(17,18,55,0.38)] dark:text-gray-400  enabled:dark:hover:text-white dark:backdrop-blur-3xl transition-all duration-500",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500  enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-[rgba(17,18,55,0.38)] dark:text-gray-400 enabled:dark:hover:text-white dark:backdrop-blur-3xl transition-all duration-500",
        active:
          "text-cyan-600 dark:border-gray-700 dark:bg-[rgba(17,18,55,0.38)] dark:text-white dark:backdrop-blur-3xl hover:bg-white transition-all duration-500",
        disabled: "cursor-not-allowed opacity-50 transition-all duration-500",
      },
    },
  };

  const pagesize = 6;
  const query = [
    "This",
    "is a",
    "random",
    "combination",
    "of",
    "words",
    "beka",
    "adwa",
    "1243",
    "mrbeast",
    "boom",
    "911",
    "avtandilovich",
    "why9",
    "beeam_",
    "badnding",
    "Businesmansteve",
    "IPVG",
    "kris tyson",
    "shadman",
    "sans",
    "papyrus",
    "discord",
    "facebook",
    "something",
    "something else",
    "idk",
    "idfk",
  ];
  const pageamount = Math.ceil(query.length / pagesize);

  useEffect(() => {
    onPageChange(1);
  }, []);

  const onPageChange = (page) => {
    setresults(query.slice(pagesize * (page - 1), pagesize * page));
    setCurrentPage(page);
  };
  return (
    <div className="container mx-auto grid">
      {results.map((word) => {
        return (
          <div className=" p-[20px] text-white font-mono text-lg backdrop-blur-3xl shadow-xl rounded-3xl mt-[50px]">
            {word}
          </div>
        );
      })}

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          theme={pagetheme}
          currentPage={currentPage}
          totalPages={pageamount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Stuff;
