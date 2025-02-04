import { useState, useEffect } from "react";
import { Top, Navbar } from "../components/common";
import Label from "../components/home/Label"
import { TopLbl, DisplayTransaction } from "../components/home";
const Home = () => {
  const [show, setShow] = useState(false);
  const [labels, setLabels] = useState(Label);
  const [val, setVal] = useState("Today");
  console.log(show);

  const time = {
    Today: {
      name: "Day",
      total: 2879987,
      success: 96,
      countS: 65807,
      countF: 4921,
      compared: -20,
    },
    Day7: {
      name: "Week",
      total: 15879987,
      success: 94,
      countS: 245807,
      countF: 24921,
      compared: -14,
    },
    Day30: {
      name: "Month",
      total: 22879987,
      success: 90,
      countS: 745807,
      countF: 94621,
      compared: -9,
    },
    Year: {
      name: "Year",
      total: 422879987,
      success: 95,
      countS: 1245807,
      countF: 254921,
      compared: -1,
    },
  };

  useEffect(() => {
    labels.forEach((label) => {
      if (label.on === true) {
        setVal(label.name);
      }
    });
  }, [labels]);

  return (
    <div className="bg-primary w-full h-screen flex flex-col">
      <Top Head="Home Page" details="" show={show} />
      <div className={`flex h-[calc(100%-80px)] w-full`}>
        <Navbar show={show} setShow={setShow} word="Home" />
        <div
          className={`w-full md:px-20 px-5 pt-10 overflow-auto ${
            show && "brightness-75 pointer-events-none"
          } bg-primary`}
        >
          <TopLbl labels={labels} setLabels={setLabels} />
          <div className="flex items-center justify-start xl:flex-row flex-col lg:gap-10 gap-5 h-fit overflow-hidden p-1">
            <DisplayTransaction
              name={`Current ${time[val].name}`}
              title={time[val].name}
              month="05-2023"
              total={time[val].total}
              success={time[val].success}
              countS={time[val].countS}
              countF={time[val].countF}
              compared={time[val].compared}
            />
            <DisplayTransaction
              name={`Previous ${time[val].name}`}
              title={time[val].name}
              month="04-2023"
              total={time[val].total - 50000}
              success={time[val].success - 2}
              countS={time[val].countS - 1000}
              countF={time[val].countF - 1000}
              compared={time[val].compared - 2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
