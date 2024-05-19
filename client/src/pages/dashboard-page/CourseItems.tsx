function CourseItems() {
  return (
    <div className="flex border-[3px] border-black justify-between p-4">
      <div className="flex">
        <img />
        <div>
          <p>Advanced Cybersecurity Techniques</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Total: </p>
        <p>80hrs</p>
      </div>
    </div>
  );
}

export default CourseItems;
