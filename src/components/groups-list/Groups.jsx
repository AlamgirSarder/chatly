import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import group_image1 from "../../assets/group1.png";
import group_image2 from "../../assets/group2.png";
import group_image3 from "../../assets/group3.png";

import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";
const Groups = () => {
  const friends_details = [
    {
      img: group_image1,
      name: "Friends Reunion",
      message: "Hi Guys, Wassup!?",
    },
    {
      img: group_image2,
      name: "Friends Reunion",
      message: "Good to see you.",
    },

    {
      img: group_image3,
      name: "Crazy Cousins",
      message: "What plans today?",
    },
    {
      img: group_image1,
      name: "Friends Reunion",
      message: "Hi Guys, Wassup!?",
    },
  ];

  useEffect(()=>{

  },[])




  return (
    <div>
      <div className="w-[427px] h-[451px]">
        <div className="relative">
          <input
            type="search"
            className=" py-[17px] pl-[78px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[20px] w-full  placeholder:font-poppins placeholder:text-[16px] placeholder:text-[#3D3D3D]/35 placeholder:font-medium"
            placeholder="Search"
          />

          <FiSearch className="absolute top-1/2 -translate-y-1/2 left-[23px] " />
        </div>

        <div className="mt-[47px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[20px] h-[347px] pb-[21px]">
          <Flex className="items-center justify-between mb-[15px]">
            <h1 className="font-poppins font-semibold text-black text-[20px] pt-[13px] pl-[20px]">
              Groups List
            </h1>
            <BsThreeDotsVertical />
          </Flex>

          <div className=" overflow-y-auto  h-[266px] pl-[20px] pt-[10px]">
            {friends_details.map((items, i) => (
              <div
                key={i}
                className="relative mb-[28px] h-[70px] after:absolute after:content-[''] after:w-[365px] after:h-[1px] after:bg-[#000000]/25 after:bottom-0 after:left-[10px] "
              >
                <Flex className="h-[54px] justify-between  border-black/25">
                  <Flex className="items-center">
                    <div
                      className="relative w-[70px] h-[70px] rounded-full bg-cover bg-center mr-[10px]"
                      style={{ backgroundImage: `url(${items.img})` }}
                    >
                      {items.active && (
                        <span className="w-4 h-4 border-2 border-white rounded-full bg-green-400 absolute bottom-0 right-0 "></span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-poppins font-semibold text-black text-[18px]">
                        {items.name}
                      </h2>
                      <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[14px]">
                        {items.message}
                      </p>
                    </div>
                  </Flex>

                  <div>
                    <div className="w-[87px] h-[30px] bg-black rounded-[5px] mr-[10px] flex justify-center items-center">
                      <h2 className="font-poppins text-[20px] text-white font-semibold">
                        Join
                      </h2>
                    </div>
                  </div>
                </Flex>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
