import { useState } from "react";
import {
  user,
  notification,
  signout,
  user1,
  setting1,
} from "../../assets";
import { useUsername } from "../../context/DataContext";
import { Link } from "react-router-dom";

const Top = ({ Head, details, show }) => {
  const username = useUsername();
  const [view, setView] = useState(false);

  return (
    <div
      className={`h-[80px] flex items-center justify-between bg-primary pr-8 cursor-default ${
        show && "brightness-75 pointer-events-none"
      }`}
    >
      <div className="lg:block ml-24">
        <h2 className="font-semibold text-[36px]">{Head}</h2>
        <label className="font-normal text-[16px] text-[#7d7d7d] leading-5">
          {details}
        </label>
      </div>
      <div className="flex items-center justify-center gap-3">
        <img src={notification} className="xs:w-8 w-6" />
        <span
          className="xs:w-[50px] xs:h-[50px] w-[35px] h-[35px] rounded-full bg-quartiary flex items-center justify-center"
          onClick={() => setView(!view)}
        >
          <img src={user} />
        </span>
        <h3 className="md:block hidden">{username}</h3>
        {/* <img src={arrow} className=" xs:ml-3 ml-1 cursor-pointer"  /> */}
        <div
          className={`absolute right-10 top-[68px] z-40 bg-white shadow-lg w-[200px] h-[120px] rounded-lg flex-col justify-evenly items-center ${
            view ? "flex" : "hidden"
          }`}
        >
          <div className="img-box">
            <img src={user1} className="img" />
            Profile
          </div>
          <div className="img-box">
            <img src={setting1} className="img" />
            Settings
          </div>
          <div className="img-box">
            <img src={signout} className="img" />
            <Link to="/login">Log out</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
