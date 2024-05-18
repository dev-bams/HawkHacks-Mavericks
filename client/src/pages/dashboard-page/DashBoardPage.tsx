import SideBar from "./SideBar";

function DashBoardPage() {
  // const []
  return (
    <div className="flex items-center justify-center h-full">
      <div className="min-h-lvh w-full flex items-center justify-center border border-red-500">
        <SideBar />
        <div className="border border-red-900 grow h-full"></div>
      </div>
    </div>
  );
}

export default DashBoardPage;
