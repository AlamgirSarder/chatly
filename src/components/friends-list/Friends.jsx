import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const Friends = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.value.user);
  const [friendData, setFriendData] = useState([]);
  useEffect(() => {
    const friendRef = ref(db, "friend");
    onValue(friendRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receverid || data.uid == item.val().senderid) {
          arr.push(item.val()); 
        }
      });
      setFriendData(arr);
    });
  }, []);
  console.log(friendData);

  
  // const friends_details = [
  //   {
  //     img: friens_image1,
  //     name: "Raghav",
  //     message: "Dinner?",
  //     timing: "Today, 8:56pm",
  //     active: false
  //   },
  //   {
  //     img: friens_image2,
  //     name: "Swathi",
  //     message: "Sure!",
  //     timing: "Today, 2:31pm",
  //     active: true
  //   },
  //   {
  //     img: friens_image3,
  //     name: "Kiran",
  //     message: "Hi.....",
  //     timing: "Yesterday, 6:22pm",
  //     active: false
  //   },
  //   {
  //     img: friens_image4,
  //     name: "Tejeshwini C",
  //     message: "I will call him today.",
  //     timing: "Today, 12:22pm",
  //     active: false
  //   },
  //   {
  //     img: friens_image1,
  //     name: "Raghav",
  //     message: "Dinner?",
  //     timing: "Today, 8:56pm",
  //     active: false
  //   },
  // ];

  return (
    <div>
      <div className="w-[344px] h-[451px] pt-[20px] pl-[22px] pb-[70px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Flex className="items-center justify-between mb-[34px]">
          <h1 className="font-poppins font-semibold text-black text-[20px]">
            Friends
          </h1>
          <BsThreeDotsVertical />
        </Flex>

        <div className=" overflow-y-auto h-[296px] pt-[10px]">
          {friendData.map((items, i) => (
            <div key={i} className="mb-[26px]">
              <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${friens_image4})` }}
                  ></div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                      {data.uid == items.receverid ? items.sendername : items.recevername}
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                     {data.uid == items.receverid ? items.senderemail : items.receveremail}
                    </p>
                  </div>
                </Flex>

                <div>
                  <p className="font-poppins font-medium text-[#000000] opacity-50 text-[10px] mr-[10px] mt-[10px]">
                    {/* {items.timing} */} paragraph
                  </p>
                </div>
              </Flex>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
