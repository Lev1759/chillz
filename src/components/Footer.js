import React from "react";
import { Link } from "react-router-dom";
import { GiWineBottle } from "react-icons/gi";
import { TbToolsKitchen2} from "react-icons/tb";
import { MdLocalHotel } from "react-icons/md";


const Footer = () => {
  return (
    <div className='fixed text-white bottom-0 left-0 right-0 bg-white z-50 border border-t'>
        <div>
        <div className="flex md:hidden items-center justify-between p-2 px-6 text-gray-500 text-xl">
          <Link to="/">
            <button className="flex flex-col items-center justify-center text-[10px] focus:text-[#a070ca]">
              <span>
                <GiWineBottle size={25}/>
              </span>
              Lounge
            </button>
          </Link>
          <Link to="kitchen">
            <button className="flex flex-col items-center justify-center text-[10px] focus:text-[#a070ca]">
            <span>
                <TbToolsKitchen2 size={25}/>
              </span>
              Kitchen</button>
          </Link>
          <Link to="/suite">
            <button className="flex flex-col items-center justify-center text-[10px] focus:text-[#a070ca]">
              <span><MdLocalHotel size={25}/></span>
              Rooms</button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default Footer;