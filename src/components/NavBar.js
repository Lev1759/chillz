import React from "react";
import { Link } from "react-router-dom";
import { GiWineBottle } from "react-icons/gi";
import { TbToolsKitchen2} from "react-icons/tb";
import { MdLocalHotel } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <div className="bg-black h-[100vpa]">
        <div className="fixed w-full p-3 px-4 md:px-8 top-0 bg-white flex items-center justify-between z-[100]">
          <h1 className="text-xl text-center font-extrabold cursor-pointer text-[#a070ca]">Perfect-Chillz</h1>
          <h1 className="flex items-center text-gray-500 text-md gap-2"><span><BsFillMenuButtonWideFill /></span>Menu</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10 p-4 text-white text-xl pt-20">
          <Link to="/">
            <button className="flex items-center gap-1">
              <span>
                <GiWineBottle />
              </span>
              Lounge 
            </button>
          </Link>
          <Link to="kitchen">
            <button className="flex items-center gap-1">
            <span>
                <TbToolsKitchen2 />
              </span>
              Kitchen</button>
          </Link>
          <Link to="/suite">
            <button className="flex items-center gap-1">
              <span><MdLocalHotel/></span>
              Suites</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
