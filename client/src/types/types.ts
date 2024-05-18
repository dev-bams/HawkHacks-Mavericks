import { ReactNode } from "react";
type SideBarLinkType = {
  icon: string;
  linkName: string;
};
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
