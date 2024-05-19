import { ReactNode } from "react";
type SideBarLinkType = {
  icon: string;
  linkName: string;
};
<<<<<<< HEAD
type PageLayoutProp = {
  children: React.ReactNode;
};
type SideBarLinksListProps = SideBarLinkType;
export type { SideBarLinkType, SideBarLinksListProps , PageLayoutProp};
=======
type SideBarLinksListProps = {
  onclick: (tab: string) => void;
};
type SideBarLinkProps = SideBarLinkType & {
  onclick: (tab: string) => void;
};
type PageLayoutProp = {
  children: ReactNode;
};
type SideBarProps = {
  onclick: (tab: string) => void;
};
export type {
  SideBarLinkType,
  SideBarLinkProps,
  SideBarLinksListProps,
  PageLayoutProp,
  SideBarProps,
};
>>>>>>> 22c966cd7fb690f0b61b862c2f24a9212f9fc2f5
