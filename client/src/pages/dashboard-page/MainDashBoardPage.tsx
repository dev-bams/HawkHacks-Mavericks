import { useState } from "react";
import SideBar from "./SideBar";
import AssistantSection from "./AssistantSection";
import CoursesSection from "./CoursesSection";
import DashBoardSection from "./DashBoardSection";
import AccountSection from "./AccountSection";

function MainDashBoardPage() {
  const [tab, setTab] = useState("Dashboard");
  function toggleTab(tab: string) {
    setTab(tab);
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="min-h-lvh w-full flex items-center justify-center">
        <SideBar onclick={toggleTab} />
        {tab === "Dashboard" ? (
          <DashBoardSection />
        ) : tab === "Courses" ? (
          <CoursesSection />
        ) : tab === "Assistant" ? (
          <AssistantSection />
        ) : (
          <AccountSection />
        )}
      </div>
    </div>
  );
}

export default MainDashBoardPage;
