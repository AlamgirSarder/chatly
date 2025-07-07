import { useEffect, useState } from "react";
import BlockUser from "../components/block-user/BlockUser";
import Friends from "../components/friends-list/Friends";
import FriendRequest from "../components/friends-request/FriendRequest";
import Groups from "../components/groups-list/Groups";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import MyGroup from "../components/my-group/MyGroup";
import Sidebar from "../components/sidebar/Sidebar"
import Userlist from "../components/userlist/Userlist";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";




const Home = () => {
  
const auth = getAuth();

  const navigate = useNavigate()
  const data = useSelector(state=>state.userInfo.value)
  console.log(data);
  
  const [verify,setVerify] = useState(false)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(!data){
      navigate("/login")
    }
  },[])

onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
    setVerify(true);
  } 
  setLoading(false)
});

if(loading){
  return null
}

  return (
    <Container>
      {
        verify ?  <div className="p-[30px]">
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
      </div> : 
      <p>Please verify your email</p>
      }
     
    </Container>
  );
};

export default Home;
