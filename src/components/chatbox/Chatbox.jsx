import React, { useEffect, useState } from "react";
import group_image3 from "../../assets/friends4.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
const Chatbox = () => {
  const activedata = useSelector((state) => state.activeInfo.value);
  console.log(activedata);

  const data = useSelector((state) => state.userInfo.value.user);
  const [mesg, setMesg] = useState("");
  const db = getDatabase();

  const sendHandle = () => {
    console.log(mesg);

    set(push(ref(db, "messagebox/")), {
      whosenderid: data.uid,
      whosendername: data.displayName,
      whoreceverid: activedata.iid,
      whorecevername: activedata.name,
      meg: mesg,
    });
  };

  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    const messageRef = ref(db, "messagebox/");
    onValue(messageRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().whosenderid &&
            activedata.iid == item.val().whoreceverid) ||
          (activedata.iid == item.val().whosenderid &&
            data.uid == item.val().whoreceverid)
        ) {
          arr.push(item.val());
        }
      });
      setMessageList(arr);
    });
  }, [activedata.iid]);

  console.log(messageList);

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
                  {activedata?.name}
                </h2>
                <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[11px]">
                  {activedata?.emailid}
                </p>
              </div>
            </Flex>

            <div>
              <BsThreeDotsVertical />
            </div>
          </Flex>
        </div>

        <div className="flex flex-1 flex-col">
          {/* recever */}
          {messageList.map((item) =>
            data.uid == item.whosenderid ? (
              <div className="text-end mb-5">
                <p className="bg-[#1E1E1E] py-3 px-5 inline-block rounded-[10px] font-poppins font-medium text-[16px] text-white">
                  {item.meg}
                </p>
              </div>
            ) : (
              <div className="text-start mb-5">
                <p className="bg-[#F1F1F1] py-3 px-5 inline-block rounded-[10px] font-poppins font-medium text-[16px]">
                  {item.meg}
                </p>
              </div>
            )
          )}
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
