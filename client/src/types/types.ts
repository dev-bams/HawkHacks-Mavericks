import  { ReactNode } from "react";
type SideBarLinkType = {
  icon: string;
  linkName: string;
};
type SideBarLinksListProps = SideBarLinkType;
type PageLayoutProp = {
  children: ReactNode;
};

export type { SideBarLinkType, SideBarLinksListProps, PageLayoutProp };
