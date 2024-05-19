import SearchIcon from "../../assets/icons/SearchIcon";

function SearchBar() {
  return (
    <div className="grow h-full bg-light-purple flex flex-col gap-4 p-4">
      <h1 className="text-4xl">Courses</h1>
      <div className="flex gap-4 grow  w-full">
        <div className="flex border-2 border-black grow h-12">
          <input
            type="text"
            className="h-full outline-none grow"
            placeholder="Search for courses"
          />
          <button className="bg-chelsea text-white h-full flex items-center justify-center p-4 pl-6 pr-6 gap-2">
            <SearchIcon />
            Search
          </button>
        </div>
        <div className="">
          <button className="border-2 border-primary h-full pl-8 pr-8 text-chelsea">
            Add your Course
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default SearchBar;
