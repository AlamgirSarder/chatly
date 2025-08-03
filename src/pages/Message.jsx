import { Container } from "@mui/material";
import Flex from "../components/layout/Flex";
import Sidebar from "../components/sidebar/Sidebar";
import Friends from "../components/friends-list/Friends";
import group_image3 from "../assets/group2.png"
import { BsThreeDotsVertical } from "react-icons/bs";
const Message = () => {
  return (
    <Container>
      <div className="p-[30px]">
        <Flex>
          <div className="mr-[43px]">
            <Sidebar active="message" />
          </div>
          <div className="flex" >
              <Friends />

         
                <div className="ml-[43px] w-[500px] h-[954px] pt-[20px] pl-[22px] pb-[70px] pr-[25px] rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">

                    <div className="mb-[26px]">
              <Flex className="h-[54px] justify-between items-center border-b pb-[10px] border-black/25">
                <Flex className="items-center">
                  <div
                    className="relative w-[52px] h-[52px] rounded-full bg-cover bg-center mr-[10px]"
                    style={{ backgroundImage: `url(${group_image3})` }}
                  ></div>
                  <div>
                    <h2 className="font-poppins font-semibold text-black text-[14px]">
                            Alamgir
                    </h2>
                    <p className="font-poppins font-medium text-[#4D4D4D] opacity-75 text-[11px]">
                    SarderKhan
                    </p>
                  </div>
                </Flex>

                <div>
                    <BsThreeDotsVertical />
                </div>
              </Flex>
            </div>

                </div>
 
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Message;
