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

function DashBoardSection() {
  return (
    <div className="border-2 border-black grow h-full min-h-lvh bg-light-purple flex flex-col">
      <div className="">
        <p className="text-4xl">
          Welcome Back, Shay! Let's Get back to learning
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col grow">
          <div className="border flex">
            <div>
              <p>Study Hours</p>
              <p>45 hrs</p>
            </div>
            <div>
              <p>Completion rate</p>
              <p>75%</p>
            </div>
            <div>
              <p>Average Score</p>
              <p>92%</p>
            </div>
          </div>
          <div>
            <div>CurrentCourses</div>
            <div>
              <CourseItems />
              <CourseItems />
              <CourseItems />
            </div>
          </div>
        </div>
        <div className="flex flex-col grow">
          <div>
            <div>badges</div>
            <div className="flex">
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
          <div>
            <div>Course Wishlist</div>
            <div>
              <CourseItems />
              <CourseItems />
              <CourseItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardSection;
