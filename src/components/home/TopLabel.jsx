import { useState, useRef, useEffect } from "react";
import {searchWhite} from "../../assets"

const TopLbl = ({labels, setLabels}) => {
  const [startDate, setStart] = useState("");
  const [endDate, setEnd] = useState(labels[0].date);

  const handleStartDate = (event) => {
    const date = event.target.value;
    setStart(date);
    labels.forEach((label) => {
      if (label.date == date) {
        select(label.id);
      }
    });
  };

  const handleEndDate = (event) => {
    setEnd(event.target.value);
  };

  function select(id) {
    setLabels((prevLabels) => {
      const updatedLabels = prevLabels.map((label) => ({
        ...label,
        on: false,
      }));
      return updatedLabels.map((label) =>
        label.id === id
          ? {
              ...label,
              on: !label.on,
            }
          : label
      );
    });
  }

  useEffect(() => {
    labels.forEach((label) => {
      if (label.on === true) {
        setStart(label.date);
      }
    });
  }, [labels])

  const labelElement = labels.map((label, index) => (
    <span className={`${label.on && "xs:py-[8px] xs:px-[14px] bg-white rounded-md shadow-miniCard transition duration-500 ease-in-out p-2"} xs:py-[8px] xs:px-[14px] p-2`} key={index} onClick={() => select(label.id)}>
      <label className={`${label.on && "xs:font-[700] font-[550] text-black text-[14px] transition duration-1000 ease-in-out"} cursor-pointer text-[#7d7d7d] leading-3 font-[500] text-[12px]`}>{label.label}</label>
    </span>
  ));

  return (
    <div className="flex sm:h-28 h-44 gap-3 md:gap-0 2xl:items-center items-start 2xl:flex-row flex-col md:justify-between mb-4 overflow-auto pb-2">
      <div className="2xl:w-[400px] w-[340px] h-[45px] flex items-center justify-evenly">{labelElement}</div>
      <div className="sm:w-[550px] w-full h-[45px] flex items-center gap-2 xs:justify-evenly flex-wrap">
        <input type="date" className="text-[15px] w-[130px] h-[35px] rounded-md p-2 bg-white text-[#7d7d7d] border-[#48484833] border-[0.5px]" value={startDate} onChange={handleStartDate} />
        <label className="text-[13px] font-normal text-[#7d7d7d]">To</label>
        <input type="date" className="text-[15px] w-[130px] h-[35px] rounded-md p-2 bg-white text-[#7d7d7d] border-[#48484833] border-[0.5px]" value={endDate} onChange={handleEndDate} />
        <button className="sm:w-[100px] w-[80px] bg-quartiary rounded-lg px-[15px] py-[10px] text-white flex items-center justify-evenly cursor-pointer">
          <img src={searchWhite} alt="search" />
          Filter
        </button>
        <button className="sm:w-[100px] w-[70px] border-quartiary border-2 text-quartiary px-[10px] py-[10px] rounded-lg cursor-pointer">Clear</button>
      </div>
    </div>
  );
}

export default TopLbl;
