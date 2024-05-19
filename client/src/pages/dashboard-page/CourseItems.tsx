import { Link } from "react-router-dom";
import { CourseItemProps } from "../../types/types";
function CourseItems({ title }: CourseItemProps) {
  return (
    <Link to="/coursedetails">
      <div className="flex border-[3px] border-black justify-between p-4 gap-4">
        <div className="flex">
          <img />
          <div>
            <p className="font-bold">{title}</p>
          </div>
        </div>
        <div className="flex flex-col text-3xl text-chelsea font-bold">
          <p>Total: </p>
          <p>80hrs</p>
        </div>
      </div>
    </Link>
  );
}

export default CourseItems;
