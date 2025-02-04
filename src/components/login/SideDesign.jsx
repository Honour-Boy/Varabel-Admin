import { group } from "../../assets";

export default function SideDesign() {
  return (
    <div className="md:w-[280px] h-[550px] ss:hidden md:flex border rounded-xl blue-gradient text-white relative flex-col justify-between items-center">
      <div></div>
      <div className="relative w-full h-1/2">
        <img
          src={group}
          alt="group of stars"
          className="w-full h-full group-img"
        />
        <div className="w-[93px] h-[45px] absolute inset-1/3 svg1">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 125 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M124.998 63C124.999 62.8335 125 62.6668 125 62.5C125 27.9822 97.0178 0 62.5 0C27.9822 0 0 27.9822 0 62.5C0 62.6668 0.000653571 62.8335 0.00195829 63H124.998Z"
              fill="#108EFA"
            />
          </svg>
        </div>
        <div className="w-[93px] h-[45px] absolute inset-y-1/2 left-1/3 svg2">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 125 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M124.998 0C124.999 0.166512 125 0.333179 125 0.5C125 35.0178 97.0178 63 62.5 63C27.9822 63 0 35.0178 0 0.5C0 0.333179 0.000653571 0.166512 0.00195829 0H124.998Z"
              fill="#108EFA"
            />
          </svg>
        </div>
      </div>

      <p className="text-[12px] font-normal text-[#108efa] mx-auto">
        Powered by Varabel Services
      </p>
    </div>
  );
}
