import { SideBarLinkProps } from "../../types/types";
function SideBarLink({ icon, linkName, onclick }: SideBarLinkProps) {
  return (
    <div
      className="text-white flex items-center justify-center gap-2 cursor-pointer"
      onClick={() => {
        onclick(linkName);
      }}
    >
      {/* <p>{icon}</p> */}
      <p>{linkName}</p>
    </div>
  );
}

export default SideBarLink;
