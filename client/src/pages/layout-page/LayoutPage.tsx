import { PageLayoutProp } from "../../../src/types/types";
import Navbar from "../../components/Navbar2";

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col gap-0 h-full">
      <Navbar />
      {children}
    </div>
  );
}

export default PageLayout;
