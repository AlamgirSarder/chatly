import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import friens_image5 from "../../assets/friends5.png";

import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from "react-redux";

const Userlist = () => {
  // const friends_details = [
  //   {
  //     img: friens_image1,
  //     name: "Raghav",
  //     timing: "Today, 8:56pm",
  //   },
  //   {
  //     img: friens_image2,
  //     name: "Swathi",
  //     timing: "Today, 2:31pm",
  //   },
  //   {
  //     img: friens_image3,
  //     name: "Kiran",
  //     timing: "Yesterday, 6:22pm",
  //   },
  //   {
  //     img: friens_image4,
  //     name: "Tejeshwini C",
  //     timing: "Today, 12:22pm",
  //   },
  //   {
  //     img: friens_image5,
  //     name: "Marvin McKinney",
  //     timing: "Today, 8:56pm",
  //   },
  //   {
  //     img: friens_image1,
  //     name: "Raghav",
  //     timing: "Today, 8:56pm",
  //   },
  // ];

  const data = useSelector((state) => state.userInfo.value.user);

  const db = getDatabase();

  const [userdetails, setUserdetails] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users/");

    onValue(usersRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid !== item.key) {
          arr.push(item.val());
        }
      });

      setUserdetails(arr);
    });
  }, []);

  return (
    <div>
      <div className="w-[344px] h-[451px] pt-[20px] pl-[22px] pb-[70px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Flex className="items-center justify-between mb-[34px]">
          <h1 className="font-poppins font-semibold text-black text-[20px]">
            User List
          </h1>
          <BsThreeDotsVertical />
        </Flex>

        <div className=" overflow-y-auto h-[354px] pt-[10px]">
          {/* {friends_details.map((items, i) => (
            <div key={i} className="mb-[20px]">
              <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${items.img})` }}
                  ></div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                      {items.name}
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                      {items.timing}
                    </p>
                  </div>
                </Flex>

                <div className="mr-[10px]">
                  <Flex className="size-[30px] bg-black rounded-[5px] justify-center items-center">
                    <FaPlus className="text-white" />
                  </Flex>
                </div>
              </Flex>
            </div>
          ))} */}

          {userdetails.map((items, i) => (
            <div key={i} className="mb-[20px]">
              <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${friens_image3})` }}
                  ></div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                      {/* {items.name} */}
                      {items.username}
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                      {/* {items.timing} */}
                      {items.email}
                    </p>
                  </div>
                </Flex>

                <div className="mr-[10px]">
                  <Flex className="size-[30px] bg-black rounded-[5px] justify-center items-center">
                    <FaPlus className="text-white" />
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

export default Userlist;
