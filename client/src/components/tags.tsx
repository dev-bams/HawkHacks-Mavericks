import { CategoryTypeProps } from "../types/types";



const Tags: React.FC<CategoryTypeProps> = ({ category }) => {  

    return (
        <div className="tags">
           <p>{category}</p>
        </div>
    );
};

export default Tags;