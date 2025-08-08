import React, { useState } from "react";
import group_image3 from "../../assets/friends4.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import { useSelector } from "react-redux";
const Chatbox = () => {
  const data = useSelector((state) => state.activeInfo.value);

  const [mesg, setMesg] = useState("");

  const sendHandle = () => {
    console.log(mesg);
    
  };
  return (
    <div>
      <div className="ml-[43px] w-[500px] h-[954px] pt-[20px] pl-[22px] pb-[50px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col">
        <div className="mb-[26px]">
          <Flex className="h-[54px] justify-between items-center border-b pb-[10px] border-black/25">
            <Flex className="items-center">
              <div
                className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                style={{ backgroundImage: `url(${group_image3})` }}
              ></div>
              <div>
                <h2 className="font-poppins font-semibold text-black text-[14px]">
                  {data?.name}
                </h2>
                <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[11px]">
                  {data?.emailid}
                </p>
              </div>
            </Flex>

            <div>
              <BsThreeDotsVertical />
            </div>
          </Flex>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="text-start">
            <p className="bg-[#F1F1F1] py-3 px-5 inline-block rounded-[10px] font-poppins font-medium text-[16px]">
              Hey, there
            </p>
          </div>

          <div className="text-end">
            <p className="bg-[#1E1E1E] py-3 px-5 inline-block rounded-[10px] font-poppins font-medium text-[16px] text-white">
              Hello...
            </p>
          </div>
        </div>

        <div>
          <input
            onChange={(e) => setMesg(e.target.value)}
            className="w-[390px] border py-2 px-2 mr-[10px] rounded-[10px]"
            type="text"
            placeholder="send message"
          />
          <button
            onClick={sendHandle}
            className="bg-[#1E1E1E] text-white py-2 px-2 rounded-[10px]"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
