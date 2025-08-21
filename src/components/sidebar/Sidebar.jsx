import home_image from "../../assets/home_image.png";

import { SlHome } from "react-icons/sl";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../../slice/userSlice";

const Sidebar = ({active}) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.userInfo.value);
 

  const logout = () => {
    signOut(auth)
      .then(() => {
        setTimeout(() => {
          dispatch(userLoginInfo(null));
          localStorage.removeItem("userLoginInfo");
          localStorage.removeItem("activeMessInfo");
          navigate("/login");
        }, 1000);
      })
      .catch((error) => {});
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="w-[186px] h-[954px] bg-bggcolor rounded-[20px] pt-[38px]">
        <div className="size-[100px] bg-gray-500 rounded-full mx-auto mb-[78px]">
          <img src={home_image} alt="#home_image" />
          <p className="font-primary text-white font-bold text-center text-2xl mt-[10px]">
            {data.user.displayName}
          </p>
        </div>

        <div className={`${active=="home"?"after:absolute after:content-[''] after:top-0 after:right-0 after:w-[85%] after:h-full after:bg-white after:z-[-1] z-[1] py-[20px] after:rounded-l-[20px] before:absolute before:content-[''] before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-[#1E1E1E] before:rounded-l-[25px] before:shadow-[-2px_0_4px_rgba(0,0,0,0.25)] relative mb-[35px]":"mb-[35px] cursor-pointer"}`}>
         <Link to="/">
          <SlHome
            size={46}
            className={`${active=="home"?"mx-auto text-black":"mx-auto text-white"}`}
          />
         </Link>
        </div>

        <div className={`${active=="message"?"after:absolute after:content-[''] after:top-0 after:right-0 after:w-[85%] after:h-full after:bg-white after:z-[-1] z-[1] py-[20px] after:rounded-l-[20px] before:absolute before:content-[''] before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-[#1E1E1E] before:rounded-l-[25px] before:shadow-[-2px_0_4px_rgba(0,0,0,0.25)] relative mb-[35px]":"mb-[35px] cursor-pointer"}`}>
          <Link to="/message">
            <AiFillMessage
              size={46}
              className={`${active=="message"?"mx-auto text-black":"mx-auto text-white"}`}
            />
          </Link>
        </div>

        <div className="relative group hover:after:absolute hover:after:content-[''] hover:after:top-0 hover:after:right-0 hover:after:w-[85%] hover:after:h-full hover:after:bg-white hover:after:z-[-1] z-[1] py-[20px] hover:after:rounded-l-[20px] hover:before:absolute hover:before:content-[''] hover:before:top-0 hover:before:right-0 hover:before:w-[8px] hover:before:h-full hover:before:bg-[#1E1E1E] hover:before:rounded-l-[25px] hover:before:shadow-[-2px_0_4px_rgba(0,0,0,0.25)] mb-[35px] cursor-pointer transition-all duration-75">
          <MdOutlineSettings
            size={46}
            className="mx-auto text-white group-hover:text-black transition-all duration-75"
          />
        </div>

        <div className="relative group hover:after:absolute hover:after:content-[''] hover:after:top-0 hover:after:right-0 hover:after:w-[85%] hover:after:h-full hover:after:bg-white hover:after:z-[-1] z-[1] py-[20px] hover:after:rounded-l-[20px] hover:before:absolute hover:before:content-[''] hover:before:top-0 hover:before:right-0 hover:before:w-[8px] hover:before:h-full hover:before:bg-[#1E1E1E] hover:before:rounded-l-[25px] hover:before:shadow-[-2px_0_4px_rgba(0,0,0,0.25)] mb-[35px] cursor-pointer transition-all duration-75 mt-[300px]">
          <ImExit
            onClick={logout}
            size={46}
            className="mx-auto text-white group-hover:text-black transition-all duration-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
