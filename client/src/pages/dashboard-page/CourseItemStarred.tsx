import filledStar from "../../assets/images/filled-star.png";
import unfilledStar from "../../assets/images/unfilled-star.png";
interface CourseItemStarredProps {
  name: string;
}
function CourseItemStarred({ name }: CourseItemStarredProps) {
  return (
    <div className="flex border-[3px] border-black flex-col p-4">
      <div className="flex">
        <img />
        <div>
          <p>{name}</p>
        </div>
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2">
          <img src={filledStar} />
          <img src={filledStar} />
          <img src={filledStar} />
          <img src={filledStar} />
          <img src={unfilledStar} />
        </div>
        <div>
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
}

export default CourseItemStarred;
