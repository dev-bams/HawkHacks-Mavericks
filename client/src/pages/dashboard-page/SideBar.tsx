import SideBarLinksList from "./SideBarLinksList";
import { SideBarProps } from "../../types/types";

function SideBar({ onclick }: SideBarProps) {
  return (
    <div className="bg-chelsea w-[271px]  min-h-lvh border-2 border-primary h-full">
      <SideBarLinksList onclick={onclick} />
    </div>
  );
}

export default SideBar;
