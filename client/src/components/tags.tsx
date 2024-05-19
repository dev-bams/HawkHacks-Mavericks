import { CategoryTypeProps } from "../types/types";
import '../pages/courseDetails page/coursepage.css';


const Tags: React.FC<CategoryTypeProps> = ({ category }) => {  

    return (
        <div className="tags">
           <p>{category}</p>
        </div>
    );
};

export default Tags;