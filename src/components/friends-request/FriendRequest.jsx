import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";

import frequest_image1 from "../../assets/friends1.png";
import frequest_image2 from "../../assets/friends2.png";
import frequest_image3 from "../../assets/friends3.png";
import frequest_image4 from "../../assets/friends4.png";

import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FriendRequest = () => {
  // const friends_details = [
  //   {
  //     img: frequest_image1,
  //     name: "Raghav",
  //     message: "Dinner?",
  //   },
  //   {
  //     img: frequest_image2,
  //     name: "Swathi",
  //     message: "Sure!",
  //   },

  //   {
  //     img: frequest_image3,
  //     name: "Kiran",
  //     message: "Hi.....",
  //   },
  //   {
  //     img: frequest_image4,
  //     name: "Tejeshwini C",
  //     message: "I will call him today.",
  //   },
  //   {
  //     img: frequest_image1,
  //     name: "Raghav",
  //     message: "Dinner?",
  //   },
  // ];
  const [friendRequest, setFriendRequest] = useState([]);

  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();

  useEffect(() => {
    const freindRquestData = ref(db, "friendRequest");

    onValue(freindRquestData, (snapshot) => {
      const arrr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receverid) {
          arrr.push(item.val());
        }
      });
      setFriendRequest(arrr);
    });

  }, []);

  return (
    <div>
      <div className="">
        <div className="w-[427px] h-[451px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-[20px] pb-[21px]">
          <Flex className="items-center justify-between mb-[15px]">
            <h1 className="font-poppins font-semibold text-black text-[20px] pt-[13px] pl-[20px]">
              Friend Request
            </h1>
            <BsThreeDotsVertical />
          </Flex>

          <div className=" overflow-y-auto h-[382px] pl-[20px] pt-[10px]">
            {friendRequest.map((items, i) => (
              <div
                key={i}
                className="relative mb-[28px] h-[70px] after:absolute after:content-[''] after:w-[365px] after:h-[1px] after:bg-[#000000]/25 after:bottom-0 after:left-[10px] "
              >
                <Flex className="h-[54px] justify-between  border-black/25">
                  <Flex className="items-center">
                    <div
                      className="relative w-[70px] h-[70px] rounded-full bg-cover bg-center mr-[10px]"
                      style={{ backgroundImage: `url(${frequest_image1})` }}
                    ></div>
                    <div>

                      <h2 className="font-poppins font-semibold text-black text-[18px]">
                        {/* {items.name} */}
                        {items.sendername}
                      </h2>
                      <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[14px]">
                        {/* {items.message} */}
                        {items.senderemail}
                      </p>
                    </div>
                  </Flex>

                  <div>
                    <div className="w-[87px] h-[30px] bg-black rounded-[5px] mr-[10px] flex justify-center items-center">
                      <h2 className="font-poppins text-[20px] text-white font-semibold">
                        Accept
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

export default FriendRequest;
