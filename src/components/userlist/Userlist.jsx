import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import friens_image5 from "../../assets/friends5.png";

import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import FriendRequest from "../friends-request/FriendRequest";

const Userlist = () => {
  const data = useSelector((state) => state.userInfo.value.user);

  const db = getDatabase();

  const [userdetails, setUserdetails] = useState([]);
  const [friendRequest, setFriendRequest] = useState([]);
  useEffect(() => {
    const usersRef = ref(db, "users/");

    onValue(usersRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid !== item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      });

      setUserdetails(arr);
    });
  }, []);

  //Data send database

  useEffect(() => {
    const freindRquestData = ref(db, "friendRequest");

    onValue(freindRquestData, (snapshot) => {
      const arrr = [];
      snapshot.forEach((item) => {
        arrr.push(item.val().receverid + item.val().senderid);
      });

      setFriendRequest(arrr);
    });
  }, []);

  console.log(friendRequest);

  const request = (item) => {
    console.log(item, "Data transfer");

    set(push(ref(db, "friendRequest/")), {
      senderid: data.uid,
      sendername: data.displayName,
      senderemail: data.email,
      receverid: item.userid,
      recevername: item.username,
      receveremail: item.email,
    });
  };



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
                  {friendRequest.includes(data.uid + items.userid) ||
                  friendRequest.includes(items.userid + data.uid) ? (
                    <button className="flex size-[30px] bg-black rounded-[5px] justify-center items-center cursor-pointer">
                      <FaMinus className="text-white" />
                    </button>
                  ) : (
                    <button
                      onClick={() => request(items)}
                      className="flex size-[30px] bg-black rounded-[5px] justify-center items-center cursor-pointer"
                    >
                      <FaPlus className="text-white" />
                    </button>
                  )}
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
