import Logo from "../assets/images/logo.png";
import { IoMdNotifications } from "react-icons/io";

function Navbar2() {
  return (
    <div className="logo w-full flex flex-row ">
      <img src={Logo} alt="Eduken Logo" />
      <div className="grow ">
        {/* <IoMdNotifications className="w-12 h-12"/> */}
      </div>
    </div>
  );
}

export default Navbar2;
