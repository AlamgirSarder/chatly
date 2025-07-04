import home_image from "../../assets/home_image.png";
import Container from "../layout/Container";
const Sidebar = () => {
  return (
    <div>
      <Container>
        <div className="p-[30px]">
          <div className="flex justify-center w-[186px] h-[954px] bg-bggcolor rounded-[20px]">
            <div className="size-[100px] bg-gray-500 rounded-full mt-[38px]">
              <img src={home_image} alt="#home_image" />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
