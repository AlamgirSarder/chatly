import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import friens_image5 from "../../assets/friends5.png";

import { FaPlus } from "react-icons/fa";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlockUser = () => {


 const data = useSelector((state) => state.userInfo.value.user);

const db = getDatabase();
    const [blockdata, setBlockdata] = useState([]);

  useEffect(() => {
    const friendRef = ref(db,"block");
    onValue(friendRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receverid) {
          arr.push({...item.val(),userid:item.key});
        }
      });
      setBlockdata(arr);
    });

  }, []);

  const unblockhandle = (item)=>{
    remove(ref(db,"block/"+ item.userid))
  }

  return (
    <div>
      <div className="w-[344px] h-[451px] pt-[20px] pl-[22px] pb-[70px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Flex className="items-center justify-between mb-[34px]">
          <h1 className="font-poppins font-semibold text-black text-[20px]">
            Blocked Users
          </h1>
          <BsThreeDotsVertical />
        </Flex>

        <div className=" overflow-y-auto h-[354px] pt-[10px]">
          {blockdata.map((items, i) => (
            <div key={i} className="mb-[20px]">
              <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${friens_image3})` }}
                  ></div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                       {data.uid == items.receverid ? items.sendername : items.recevername}
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                      {items.timing}
                    </p>
                  </div>
                </Flex>

                <div onClick={()=>unblockhandle(items)} className="mr-[10px]">
                  <Flex className=" py-2 px-2 bg-black rounded-[5px] justify-center items-center text-white cursor-pointer">
                    Unblock
                  </Flex>
                </div>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockUser;
