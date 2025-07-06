import BlockUser from "../components/block-user/BlockUser";
import Friends from "../components/friends-list/Friends";
import FriendRequest from "../components/friends-request/FriendRequest";
import Groups from "../components/groups-list/Groups";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import MyGroup from "../components/my-group/MyGroup";
import Sidebar from "../components/sidebar/Sidebar"
import Userlist from "../components/userlist/Userlist";




const Home = () => {
  return (
    <Container>
      <div className="p-[30px]">
        <Flex>
          <div className="mr-[43px]">
           <Sidebar />
          </div>
          <div>
            <Flex className="gap-[20px]">
            <Groups />
            <Friends />
            <Userlist />
            
          </Flex>
          <Flex className="gap-[20px] mt-[43px]">
            <FriendRequest />
            <MyGroup />
            <BlockUser />
          </Flex>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Home;
