import { SideBarLinksListProps } from "../../types/types";
function SideBarLink({ icon, linkName }: SideBarLinksListProps) {
  return (
    <div className="text-white flex items-center justify-center border">
      <p>{icon}</p>
      <p>{linkName}</p>
    </div>
  );
}

export default SideBarLink;
