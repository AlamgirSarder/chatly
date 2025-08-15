import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const MyGroup = () => {
  

    const data = useSelector((state) => state.userInfo.value.user);

  const [show, setShow] = useState(false);
  const db = getDatabase();
  const creategroup = () => {
    setShow(!show);
    setCreates(false);
  };
  const [creates, setCreates] = useState(false);
  const create = () => {
    setCreates(true);
  };

  const [groupName, setGroupName] = useState("");
  const [groupNameErr, setGroupNameErr] = useState("");

  const [groupDiscription, setGroupDiscription] = useState("");
  const [groupDiscriptionErr, setGroupDiscriptionErr] = useState("");

  const handlegroupname = (e) => {
    setGroupName(e.target.value);
  };

  const handlegroupDiscription = (e) => {
    setGroupDiscription(e.target.value);
  };

const handlesubmit = () => {
 
  if (!groupName) {
    setGroupNameErr("Enter your group name!");
  } else {
    setGroupNameErr("");
  }

  if (!groupDiscription) {
    setGroupDiscriptionErr("Enter your Description!");
  } else {
    setGroupDiscriptionErr("");
  }

  if (groupName && groupDiscription) {
    set(push(ref(db, "groups/")), {
      Group: groupName,
      Discription: groupDiscription,
      GroupAdmin: data.uid
    });

    
    setGroupName("");
    setGroupDiscription("");
  }
  setCreates(false)
};


  const [groupList, setGroupList] = useState([]);
  useEffect(() => {
    const GroupRef = ref(db, "groups");
    onValue(GroupRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
       if(data.uid == item.val().GroupAdmin){
         arr.push(item.val());
       }
      });
      setGroupList(arr);
    });
  }, []);


  return (
    <div>
      <div className="w-[344px] h-[451px] pt-[20px] pl-[22px] pb-[70px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <Flex className="items-center justify-between mb-[34px]">
          <h1 className="font-poppins font-semibold text-black text-[20px]">
            My Groups
          </h1>

          {show && (
            <p
              onClick={create}
              className="bg-black cursor-pointer text-[10px] ml-[110px] text-white py-1 px-3 rounded-[5px]"
            >
              Create
            </p>
          )}
          {show ? (
            <RxCross2
              size={20}
              onClick={creategroup}
              className="cursor-pointer"
            />
          ) : (
            <BsThreeDotsVertical
              onClick={creategroup}
              className="cursor-pointer"
            />
          )}
        </Flex>

        <div className=" overflow-y-auto h-[296px] pt-[10px]">
          {creates ? (
            <div className="relative">
              <input
                onChange={handlegroupname}
                value={groupName}
                className="border rounded-[5px] w-[250px] p-2 "
                type="text"
                placeholder="Group Name"
              />
              <p className="absolute top-[40px] left-0 text-red-500">
                {" "}
                {groupNameErr}
              </p>
              <input
                onChange={handlegroupDiscription}
                value={groupDiscription}
                className="border rounded-[5px] w-[250px] p-2 my-[30px]"
                type="text"
                placeholder="Description"
              />
              <p className="absolute top-[113px] left-0 text-red-500">
                {groupDiscriptionErr}
              </p>

              <button
                onClick={handlesubmit}
                className="bg-black font-poppins text-[12px] text-white font-semibold py-2 px-2 rounded-[5px] cursor-pointer"
              >
                Submit
              </button>
            </div>
          ) : (
            groupList.map((items, i) => (
              <div key={i} className="mb-[26px]">
                <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                  <Flex className="items-center">
                    <div
                      className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                      style={{ backgroundImage: `url(${friens_image4})` }}
                    ></div>
                    <div>
                      <h2 className="font-poppins font-semibold text-black text-[14px]">
                        {items.Group}
                      </h2>
                      <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                        {items.Discription}
                      </p>
                    </div>
                  </Flex>

                  <div>
                    <p className="font-poppins font-medium text-[#000000] opacity-50 text-[10px] mr-[10px] mt-[10px]">
                      {items.timing}
                    </p>
                  </div>
                </Flex>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
