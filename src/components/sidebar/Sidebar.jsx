import home_image from "../../assets/home_image.png";
import Container from "../layout/Container";
import { SlHome } from "react-icons/sl";
const Sidebar = () => {
  return (
    <div>
      <Container>
        <div className="p-[30px]">
          <div className="w-[186px] h-[954px] bg-bggcolor rounded-[20px] pt-[38px]">

            <div className="size-[100px] bg-gray-500 rounded-full mx-auto mb-[78px]">
              <img src={home_image} alt="#home_image" />
            </div>

            <div className="">
                <SlHome size={46} className="relative after:content-[''] after:w-full h-full after:absolute after:bg-white after:top-0 after:left-0 "  />
            </div>




          </div>




        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
