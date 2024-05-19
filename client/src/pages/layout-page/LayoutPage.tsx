import { PageLayoutProp } from "../../../src/types/types";
import Navbar2 from "../../components/Navbar2";
// import NavBar from "../../components/NavBar";
// import Footer from "../../components/Footer";

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col gap-0 h-full">
      <Navbar2 />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default PageLayout;
