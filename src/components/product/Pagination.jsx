import { useState, useEffect } from "react";
import { PageInfo } from "./Tableinfo";

const Pagination = ({ paige, setPage }) => {
  const [pages, setPages] = useState(PageInfo);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  function select(num) {
    setPages((prevPages) => {
      const updatedPages = prevPages.map((Page) => ({
        ...Page,
        on: false,
      }));

      return updatedPages.map((Page) =>
        Page.num === num
          ? {
              ...Page,
              on: !Page.on,
            }
          : Page
      );
    });
  }

  useEffect(() => {
    pages.forEach((page) => {
      if (page.on === true) {
        setPage(page.num);
      }
    });
  }, [pages]);

  function next() {
    setStart((prevStart) => {
      if (end < 20) {
        select(paige + 1);
        return prevStart + 1;
      } else {
        return prevStart;
      }
    });

    setEnd((prevEnd) => {
      if (prevEnd < 20) {
        return prevEnd + 1;
      } else {
        return prevEnd;
      }
    });
  }

  function prev() {
    setStart((prevStart) => {
      if (prevStart > 0) {
        select(paige - 1);
        return prevStart - 1;
      } else {
        return prevStart;
      }
    });
    setEnd((prevEnd) => {
      if (start > 0) {
        return prevEnd - 1;
      } else {
        return prevEnd;
      }
    });
  }

  const pageElements = pages.slice(start, end).map((page) => (
    <span
      className={`w-10 cursor-pointer p-2 mx-0.5 rounded-md text-center ${
        page.on ? "bg-[#133B5C] text-white" : "text-gray-600"
      }`}
      onClick={() => select(page.num)}
      key={page.num}
    >
      {page.num}
    </span>
  ));

  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      <label
        className="cursor-pointer text-lg text-gray-600 hover:text-gray-400"
        onClick={prev}
      >
        {"< Prev"}
      </label>
      <div className="flex space-x-2">{pageElements}</div>
      <label
        className="cursor-pointer text-lg text-gray-600 hover:text-gray-400"
        onClick={next}
      >
        {"Next >"}
      </label>
    </div>
  );
};

export default Pagination;
