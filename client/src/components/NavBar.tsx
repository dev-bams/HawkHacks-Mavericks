import WordMark from "./WordMark";

function NavBar() {
  return (
    <div className="flex items-center justify-center border-2 border-primary">
      <nav className="border w-full flex items-center justify-center">
        <WordMark />
        <div className="grow h-full"></div>
      </nav>
    </div>
  );
}

export default NavBar;
