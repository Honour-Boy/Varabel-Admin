import { useState } from "react";
import { naira } from "../../assets";

const DisplayTransaction = ({title, name, month, total, success, countS, countF, compared}) => {
  return (
    <div className="2xl:w-[750px] w-full h-full sm:h-[400px] items-start justify-center flex flex-col gap-2 ">
      <div className="font-semibold text-16px leading-[18px] text-txtColor items-center flex gap-2.5">
        {name} <label className="font-normal text-[12px] text-txtColor">{month}</label>
      </div>
      <div className="w-full h-[90%] bg-[#fcfeff] shadow-miniCard rounded-lg p-3 flex items-center justify-start gap-3 flex-col">
        <h4 className="font-normal text-[16px] leading-4 text-txtColor">Total Transactions</h4>
        <h3 className="font-semibold text-3xl flex gap-2 text-quartiary">
          <img src={naira} />
          {total.toLocaleString('en-US')}
        </h3>
        <label className="font-normal text-xs">Total Count</label>
        <div className="w-full flex items-center justify-evenly xs:flex-row flex-col gap-3">
          <div className="xs:w-2/5 w-full flex items-center flex-col gap-2">
            <h4 className="font-normal text-[12.8px] sm:text-[15px] leading-4 text-txtColor">Successful Transactions</h4>
            <h3 className="font-semibold text-xl flex gap-2 text-quartiary">
              <img src={naira} />
              {(Math.round((success/100) * total)).toLocaleString('en-US')}
            </h3>
            <label>Count: {countS.toLocaleString('en-US')}</label>
            <span>{success}% success rate</span>
          </div>
          <div className="w-[5%]">
            <span></span>Vs.
          </div>
          <div className="xs:w-2/5 w-full flex items-center flex-col gap-2">
            <h4 className="font-normal text-[12.8px] sm:text-[15px] leading-4 text-txtColor">Unsuccessful Transactions</h4>
            <h3 className="font-semibold text-xl flex gap-2 text-quartiary">
              <img src={naira} alt="Naira" />
              {(Math.round(((100-success)/100) * total)).toLocaleString('en-US')}
            </h3>
            <label>Count: {countF.toLocaleString('en-US')}</label>
            <span>{100-success}% failure rate</span>
          </div>
        </div>
        <div className="flex items-center justify-center self-end gap-3 flex-col mt-4">
          <h4>Compared to previous {title}</h4>
          <label className="text-red-100">{compared}%</label>
        </div>
      </div>
    </div>
  );
}

export default DisplayTransaction