import { useEffect, useState } from "react";
import badge1 from "../../assets/images/Badge_01.png";
import badge2 from "../../assets/images/Badge_02.png";
import badge3 from "../../assets/images/Badge_03.png";
import badge4 from "../../assets/images/Badge_04.png";
import badge5 from "../../assets/images/Badge_05.png";
import CourseItems from "./CourseItems";
import CourseItemStarred from "./CourseItemStarred";

interface User {
  name: string;
  study_hours: number;
  completion_rate: number;
  avg_score: number;
  current_courses: string[];
}

function DashBoardSection() {
  const [data, setData] = useState<User | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-west-2.aws.neurelo.com/rest/users?",
          {
            method: "GET",
            headers: {
              "X-API-KEY":
                "neurelo_9wKFBp874Z5xFw6ZCfvhXbwG8jmCzSM/SJ1Ko8Ma8fi2bpo3BushmlVhO69WJiE9TrDV7RrYUO14TO3QYNilSyY4ntwZ5ZrRuoSak02vT0BiDRovHQm5N6xI3vzcFDvibtCb2eJuLLJ+BVy+X1mod2z/0CBphPgoTBvugpyjauqM1yyWR1ntm5acULxvRxT2_W3wlcv/Cg6PK5VaE8jgdQ9kRj1wl21pbuv0ynPLt0kQ=",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        const user = result.data[0];
        setData(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="border-2 border-black grow h-full min-h-lvh bg-light-purple flex flex-col p-6 gap-6">
      {data && (
        <div className="gap-6 flex flex-col">
          <div className="">
            <p className="text-4xl">
              Welcome Back, {data.name}! Let's Get back to learning
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col grow gap-2">
              <div className="flex border-[3px] justify-between border-primary bg-white p-4 gap-4">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-center">Study Hours</p>
                  <p className="text-chelsea text-3xl font-bold">
                    {data.study_hours} hrs
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-center">Completion rate</p>
                  <p className="text-chelsea text-3xl font-bold">
                    {data.completion_rate}%
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="font-bold text-center">Average Score</p>
                  <p className="text-chelsea text-3xl font-bold">
                    {data.avg_score}%
                  </p>
                </div>
              </div>
              <div className="border-[3px] border-primary">
                <div className="border-b-[3px] border-primary p-6 bg-white">
                  Current Courses
                </div>
                <div className="bg-light-green p-6 gap-6 flex flex-col">
                  {data.current_courses.map((course, index) => (
                    <CourseItems key={index} title={course.replace(/"/g, "")} />
                  ))}
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
      )}
    </div>
  );
}

export default DashBoardSection;
