import { noDisplay } from "../assets";

const Error = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex-col items-center gap-5 flex">
        <img src={noDisplay} alt="Error" />
        <label className="text-red-100 text-[24px]">ERROR 404</label>
        <label>Oooops, Page does not exist</label>
      </div>
    </div>
  );
};

export default Error;
