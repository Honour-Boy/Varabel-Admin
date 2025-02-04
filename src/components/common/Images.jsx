const Images = ({ selected, svg, hovFunc, word, show, clickFunc}) => {
  // Define dynamic styles using Tailwind classes based on the selected and show states
  const liStyle = selected && show ? "bg-gray-200" : "";
  const h3Style = selected
    ? "transition-all duration-[300ms] font-bold text-black"
    : "transition-all duration-[300ms] text-gray-700";
  const spanStyle = selected
    ? "transition-all duration-[600ms] opacity-100"
    : "transition-all duration-[600ms] opacity-0";

  return (
    <li
      onMouseOver={hovFunc}
      onFocus={hovFunc}
      onClick={clickFunc}
      className={`w-full h-full ${liStyle} cursor-pointer hover:bg-gray-100 flex items-center justify-between transition-all duration-300`}
    >
      <div className={`w-1/2 flex items-center gap-4 ml-3`}>
        <img
          src={svg}
          className={`h-6 w-6 transition-transform duration-300 ${
            selected && "scale-110 stroke-green-500"
          }`}
        />

        <h3 className={h3Style}>{word}</h3>
      </div>
      <span
        className={`w-[6px] h-full bg-green-500 rounded-full ${spanStyle}`}
      ></span>
    </li>
  );
};

export default Images;
