import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";

import frequest_image1 from "../../assets/friends1.png";
import frequest_image2 from "../../assets/friends2.png";
import frequest_image3 from "../../assets/friends3.png";
import frequest_image4 from "../../assets/friends4.png";

import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FriendRequest = () => {
 
  const [friendRequest, setFriendRequest] = useState([]);

  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();

  useEffect(() => {
    const freindRquestData = ref(db, "friendRequest");

    onValue(freindRquestData, (snapshot) => {
      const arrr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receverid) {
          arrr.push({...item.val(),userid:item.key});
        }
      });

      setFriendRequest(arrr);
    });
  }, []);


const accepthandle = (item) =>{

   set(push(ref(db, "friend/")), {
          ...item
      }).then(()=>{
        remove(ref(db,"friendRequest/"+ item.userid))
      })
  
}



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
                        {items.sendername}
                      </h2>
                      <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[14px]">
                        {items.senderemail}
                      </p>
                    </div>
                  </Flex>

                  <div>
                    <div onClick={()=>accepthandle(items)} className="w-[87px] h-[30px] bg-black rounded-[5px] mr-[10px] flex justify-center items-center cursor-pointer">
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
