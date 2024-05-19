import CourseItems from "./CourseItems";
import CourseItemStarred from "./CourseItemStarred";
import SearchBar from "./SearchBar";

function CoursesSection() {
  return (
    <div className="border-2 border-black grow h-full min-h-lvh bg-light-purple p-6 gap-6">
      <SearchBar />
      <div className="flex gap-4">
        <div className="flex flex-col grow gap-6">
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              Current Courses
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItems />
              <CourseItems />
            </div>
          </div>
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              Recommended Courses
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItems />
              <CourseItems />
            </div>
          </div>
        </div>
        <div className="flex flex-col grow gap-6">
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white flex justify-between">
              <p>Categories</p>
              <p>See more</p>
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItems />
              <CourseItems />
            </div>
          </div>
          <div className="border-[3px] border-primary">
            <div className="border-b-[3px] border-primary p-6 bg-white">
              Course Wishlist
            </div>
            <div className="bg-light-green p-6 gap-6 flex flex-col">
              <CourseItemStarred />
              <CourseItemStarred />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
