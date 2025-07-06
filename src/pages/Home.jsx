import Friends from "../components/friends-list/Friends";
import Groups from "../components/groups-list/Groups";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
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
          <Flex className="gap-[20px]">
            <Groups />
            <Friends />
            <Userlist />
          </Flex>
        </Flex>
      </div>
    </Container>
  );
};

export default Home;
