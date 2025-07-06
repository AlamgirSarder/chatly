import { BsThreeDotsVertical } from "react-icons/bs";
import Flex from "../layout/Flex";
import friens_image1 from "../../assets/friends1.png";
import friens_image2 from "../../assets/friends2.png";
import friens_image3 from "../../assets/friends3.png";
import friens_image4 from "../../assets/friends4.png";

const Friends = () => {
  const friends_details = [
    {
      img: friens_image1,
      name: "Raghav",
      message: "Dinner?",
      timing: "Today, 8:56pm",
      active: false
    },
    {
      img: friens_image2,
      name: "Swathi",
      message: "Sure!",
      timing: "Today, 2:31pm",
      active: true
    },
    {
      img: friens_image3,
      name: "Kiran",
      message: "Hi.....",
      timing: "Yesterday, 6:22pm",
      active: false
    },
    {
      img: friens_image4,
      name: "Tejeshwini C",
      message: "I will call him today.",
      timing: "Today, 12:22pm",
      active: false
    },
    {
      img: friens_image1,
      name: "Raghav",
      message: "Dinner?",
      timing: "Today, 8:56pm",
      active: false
    },
  ];

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
          {friends_details.map((items, i) => (
            <div key={i} className="mb-[26px]">
              <Flex className="h-[54px] justify-between border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${items.img})` }}
                  >
                   {
                    items.active && (
                         <span className="w-4 h-4 border-2 border-white rounded-full bg-green-400 absolute bottom-0 right-0 "></span>
                    )
                   }
                  </div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                      {items.name}
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[12px]">
                      {items.message}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
