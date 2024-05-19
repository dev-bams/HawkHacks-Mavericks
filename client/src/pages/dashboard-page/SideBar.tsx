import SideBarLinksList from "./SideBarLinksList";
import { SideBarProps } from "../../types/types";

function SideBar({ onclick }: SideBarProps) {
  return (
    <div
      className="bg-chelsea w-56  min-h-lvh border-2 border-primary"
    >
      <SideBarLinksList onclick={onclick} />
    </div>
  );
}

export default SideBar;
