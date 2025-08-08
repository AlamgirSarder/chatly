import { Container } from "@mui/material";
import Flex from "../components/layout/Flex";
import Sidebar from "../components/sidebar/Sidebar";


import Chatbox from "../components/chatbox/Chatbox";
import ChatMessage from "../components/chatfriends/ChatMessage";
const Message = () => {
  return (
    <Container>
      <div className="p-[30px]">
        <Flex>
          <div className="mr-[43px]">
            <Sidebar active="message" />
          </div>
          <div className="flex" >
              <ChatMessage />
              <Chatbox />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Message;
