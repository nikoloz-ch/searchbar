import React from "react";
import { useEffect, useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Switcher from "./Switcher";
import { Pagination } from "flowbite-react";
import { returnStatement } from "@babel/types";

function Main() {
  const [quers, setquers] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

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
  const pagesize = 6;
  const [results, setresults] = useState(query);
  const [pageamount, setPageAmount] = useState(
    Math.ceil(query.length / pagesize)
  );
  const [searched, setSearched] = useState(query);

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

  const getFilteredItems = (query, quers) => {
    if (!quers) {
      return query;
    }
    return query.filter((post) => post.includes(quers));
  };

  useEffect(() => {
    onPageChange(1);
  }, []);

  const onPageChange = (page) => {
    let g = searched.slice(pagesize * (page - 1), pagesize * page);
    setresults(g);
    setCurrentPage(page);
  };

  return (
    <div>
      <Flowbite>
        <div className=" flex justify-between container mx-auto backdrop-blur-3xl shadow-2xl p-[25px] rounded-2xl">
          <div className="max-w-md">
            <div className="mb-2 block"></div>
            <TextInput
              onChange={(e) => {
                let g = getFilteredItems(query, e.target.value);
                setSearched(g);
                setPageAmount(Math.ceil(g.length / pagesize));
                let f = g.slice(0, pagesize - 1);
                setresults(f);
                setCurrentPage(1);
              }}
              className="inp w-[250px] focus:w-[1000px]"
              id=""
              type="text"
              icon={FaMagnifyingGlass}
              placeholder="Search"
              required
            />
          </div>
          <Switcher className=" ml-[200px]" />
        </div>
        <div className="container mx-auto grid">
          {results.map((word) => {
            return (
              <div
                key={word}
                className=" p-[20px] text-white font-mono text-lg backdrop-blur-3xl shadow-xl rounded-3xl mt-[50px]"
              >
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
      </Flowbite>
    </div>
  );
}

export default Main;
