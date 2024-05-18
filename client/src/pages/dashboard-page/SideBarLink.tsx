import { SideBarLinksListProps } from "../../types/types";
function SideBarLink({ icon, linkName }: SideBarLinksListProps) {
  return (
    <div>
      <p>{icon}</p>
      <p>{linkName}</p>
    </div>
  );
}

export default SideBarLink;
