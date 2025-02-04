import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "./images";
import { itex } from "../../assets";
import { dash, setting, transaction } from "../../assets";

const navImg = [
  {
    id: 1,
    selected: false,
    word: "DashBoard",
    link: "Home",
    svg: dash, // Use ReactComponent here
  },
  {
    id: 2,
    selected: false,
    word: "Transaction",
    link: "Products",
    svg: transaction,
  },
  {
    id: 3,
    selected: false,
    word: "Settings",
    link: "Settings",
    svg: setting,
  },
];

const Navbar = ({ show, setShow, word }) => {
  const [permimages, setPermImages] = useState(navImg);
  const [images, setImages] = useState(permimages);
  const navigate = useNavigate();

  const selected = (id) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.map((Image) => ({
        ...Image,
        selected: false,
      }));

      return updatedImages.map((Image) =>
        Image.id === id
          ? {
              ...Image,
              selected: !Image.selected,
            }
          : Image
      );
    });
  };

  const toggleShow = (val) => {
    setShow(val);
  };

  const linkClicked = (link) => {
    navigate(`/${link}`);
  };

  const resetImages = () => {
    setImages(permimages);
  };

  useEffect(() => {
    setPermImages((prevPermImages) =>
      prevPermImages.map((image) =>
        image.link === word ? { ...image, selected: true } : image
      )
    );
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.link === word ? { ...image, selected: true } : image
      )
    );
  }, [word]);
  const navBigContStyle = show
    ? "translate-x-0 transition-transform duration-300 ease-in-out"
    : "-translate-x-[380px] transition-transform duration-300 ease-in-out";

  const imageElement = images.map((image) => (
    <Images
      key={image.id}
      selected={image.selected}
      svg={image.svg}
      show={show}
    />
  ));

  const imageElement2 = images.map((image) => (
    <Images
      key={image.id}
      selected={image.selected}
      svg={image.svg}
      word={image.word}
      hovFunc={() => selected(image.id)}
      clickFunc={() => linkClicked(image.link)}
      show={show}
    />
  ));

  return (
    <div className="border-10 border-black">
      {/* Small Nav Container */}
      <div
        className="flex flex-col items-center w-[60px] h-screen bg-white shadow-lg rounded-r-2xl fixed top-0 left-0 z-50"
        onMouseEnter={() => toggleShow(true)}
      >
        <ul className="w-full h-1/3 pl-1 flex flex-col items-center gap-1 py-2">
          {/* Logo */}
          <li className="h-full flex items-center gap-2 py-3 px-1">
            <img src={itex} alt="Logo" className="h-10 w-auto" />
          </li>
          {imageElement}
        </ul>
      </div>

      {/* Expanded Nav Container */}
      <div
        className={`w-[300px] h-screen bg-white shadow-lg rounded-r-2xl fixed top-0 left-0 z-50 ${navBigContStyle}`}
        onMouseEnter={() => toggleShow(true)}
        onMouseLeave={() => {
          toggleShow(false);
          resetImages();
        }}
      >
        <ul className="w-full h-1/3 flex flex-col items-center py-2 gap-1">
          {/* Logo and Title */}
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2 py-3"
          >
            <h1 className="text-4xl font-bold text-gray-800">Itex</h1>
            <img src={itex} alt="Logo" className="h-10 w-auto" />
          </li>
          {/* Navigation Items */}
          {imageElement2}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
