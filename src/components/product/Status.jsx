import { useState } from "react";
import { Link } from "react-router-dom";
import {
  contact,
  note,
  check,
  fail,
  exports,
  search,
  add,
  naira,
} from "../../assets";

const Status = ({ searchText, setSearchText }) => {
  const [infos, setInfo] = useState([
    {
      id: 1,
      src: contact,
      amount: 1283000,
      detail: "1,283,000 active customers",
    },
    {
      id: 2,
      src: note,
      amount: 13000000,
      detail: "10,000 total transactions",
    },
    {
      id: 3,
      src: check,
      amount: 11907020,
      detail: "9,160 successful transactions",
    },
    {
      id: 4,
      src: fail,
      amount: 1092980,
      detail: "840 failed transactions",
    },
  ]);

  function handleSearch(event) {
    const { value } = event.target;
    setSearchText(value);
  }

  const statusElement = infos.map((info) => (
    <div
      className="w-80 flex items-center bg-white shadow-md rounded-lg p-2 mb-4 "
      key={info.id}
    >
      <img src={info.src} className="w-16 h-10 mr-4" alt="icon" />
      <div>
        <h3 className="text-xl font-semibold">
          {info !== infos[0] && (
            <img src={naira} alt="naira image" className="inline-block mr-2" />
          )}
          {info.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </h3>
        <label className="text-gray-600">{info.detail}</label>
      </div>
    </div>
  ));

  return (
    <div className="p-6 rounded-lg ml-16">
      <div className="flex items-center justify-around">{statusElement}</div>
      <div className="mt-6 flex justify-between items-center">
        <div className="w-80 flex items-center space-x-4">
          <div className=" w-full flex items-center border rounded-md px-3 py-2 bg-white shadow-sm">
            <img src={search} alt="search image" className="w-5 h-5 mr-2" />
            <input 
              type="text"
              value={searchText}
              onChange={handleSearch}
              placeholder="Search title, price, ratings, stock, brand, status etc"
              className="w-full p-1 text-sm text-gray-700 border-none focus:ring-2 focus:ring-blue-500 rounded-md"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/Products/Add"
            className="flex items-center space-x-2  text-white rounded-md px-4 py-2 hover:border-[#7d8e9c] border-2 border-[#133B5C] w-32"
          >
            <img src={add} alt="Plus image" className="w-5 h-5" />
            <label className="text-[#133B5C]">Add User</label>
          </Link>
          <div className="w-32 flex items-center space-x-2 bg-[#133B5C] text-gray-800 rounded-md px-4 py-2 hover:bg-[#235680]">
            <img src={exports} alt="icon" className="w-5 h-5" />
            <label className="text-white">Export</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
