import { PageLayoutProp } from "../../../src/types/types";
<<<<<<< HEAD
import Navbar from "../../components/Navbar2";
=======
import NavBar from "../../components/NavBar";
// import Footer from "../../components/Footer";
>>>>>>> 22c966cd7fb690f0b61b862c2f24a9212f9fc2f5

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col gap-0 h-full">
      <Navbar />
      {children}
<<<<<<< HEAD
=======
      {/* <Footer /> */}
>>>>>>> 22c966cd7fb690f0b61b862c2f24a9212f9fc2f5
    </div>
  );
}

export default PageLayout;
