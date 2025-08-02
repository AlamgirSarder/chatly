import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useSelector } from "react-redux";


const Friends = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userInfo.value.user);
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const friendRef = ref(db,"friend");
    onValue(friendRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receverid) {
          arr.push({...item.val(),userid:item.key});
        }
      });
      setFriendData(arr);
    });

  }, []);


  const blockhandle = (item)=>{
            
        
   
   set(push(ref(db, "block/")), {
          ...item
      }).then(()=>{
        remove(ref(db,"friend/"+ item.userid))
      })

    
  }

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
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[11px]">
                     {data.uid == items.receverid ? items.senderemail : items.receveremail}
                    </p>
                  </div>
                </Flex>

                <div>
                    <div onClick={()=>blockhandle(items)} className="w-[50px] h-[30px] bg-black rounded-[5px] mr-[10px] flex justify-center items-center cursor-pointer">
                      <h2 className="font-poppins text-[12px] text-white font-semibold">
                        Block
                      </h2>
                    </div>
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
