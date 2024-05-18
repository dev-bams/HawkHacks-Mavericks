import { Link } from "react-router-dom";

function WordMark() {
  return (
    <div
      className={`flex items-center justify-center bg-chelsea text-white pb-3 pt-3 pl-12 pr-12 border-2 border-primary`}
    >
      <Link to="/" className="">
        <p className="text-2xl">Eduken</p>
      </Link>
    </div>
  );
}

export default WordMark;
