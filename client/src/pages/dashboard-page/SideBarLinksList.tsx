import SideBarLink from "./SideBarLink";
function SideBarLinksList() {
  return (
    <div className="border flex gap-4 flex-col">
      <SideBarLink icon="i" linkName="Dashboard" />
      <SideBarLink icon="i" linkName="Dashboard" />
      <SideBarLink icon="i" linkName="Dashboard" />
      <SideBarLink icon="i" linkName="Dashboard" />
    </div>
  );
}

export default SideBarLinksList;
