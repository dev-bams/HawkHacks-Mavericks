import { SideBarLinksListProps } from "../../types/types";
import SideBarLink from "./SideBarLink";
import { SideBarLinkType } from "../../types/types";
const SideBarLinksListArray: SideBarLinkType[] = [
  { icon: "icon", linkName: "Dashboard" },
  { icon: "icon", linkName: "Courses" },
  { icon: "icon", linkName: "Assistant" },
  { icon: "icon", linkName: "Profile" },
];
function SideBarLinksList({ onclick }: SideBarLinksListProps) {
  return (
    <div className="flex gap-4 flex-col">
      {SideBarLinksListArray.map(({ icon, linkName }, index) => {
        return (
          <SideBarLink
            icon={icon}
            linkName={linkName}
            key={index}
            onclick={onclick}
          />
        );
      })}
    </div>
  );
}

export default SideBarLinksList;
