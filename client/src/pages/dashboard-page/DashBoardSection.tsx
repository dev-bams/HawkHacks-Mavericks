import badge1 from "../../assets/images/Badge_01.png";
import badge2 from "../../assets/images/Badge_02.png";
import badge3 from "../../assets/images/Badge_03.png";
import badge4 from "../../assets/images/Badge_04.png";
import badge5 from "../../assets/images/Badge_05.png";
import badge6 from "../../assets/images/Badge_06.png";
import badge7 from "../../assets/images/Badge_07.png";
import badge8 from "../../assets/images/Badge_08.png";
import badge9 from "../../assets/images/Badge_08.png";
import CourseItems from "./CourseItems";
import CourseItemStarred from "./CourseItemStarred";

function DashBoardSection() {
  return (
    <div className="border-2 border-black grow h-full min-h-lvh bg-light-purple flex flex-col p-6 gap-6">
      <div className="">
        <p className="text-4xl">
          Welcome Back, Shay! Let's Get back to learning
        </p>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col grow gap-2">
          <div className="flex border-[3px] justify-between border-primary bg-white p-4">
            <div className="flex flex-col justify-center items-center">
              <p>Study Hours</p>
              <p>45 hrs</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Completion rate</p>
              <p>75%</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p>Average Score</p>
              <p>92%</p>
            </div>
          </div>
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              Current Courses
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItems />
              <CourseItems />
              <CourseItems />
              <CourseItems />
            </div>
          </div>
        </div>
        <div className="flex flex-col grow gap-2">
          <div className=" border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              badges
            </div>
            <div className="flex bg-corn flex-wrap gap-6 items-center justify-center p-6">
              <img className="w-16 h-16" src={badge1} />
              <img className="w-16 h-16" src={badge2} />
              <img className="w-16 h-16" src={badge3} />
              <img className="w-16 h-16" src={badge4} />
              <img className="w-16 h-16" src={badge5} />
              <img className="w-16 h-16" src={badge6} />
              <img className="w-16 h-16" src={badge7} />
              <img className="w-16 h-16" src={badge8} />
              <img className="w-16 h-16" src={badge9} />
            </div>
          </div>
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              Course Wishlist
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItemStarred />
              <CourseItemStarred />
              <CourseItemStarred />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSection;
