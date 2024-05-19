import {FaArrowLeft, FaStar, FaArrowCircleDown  } from "react-icons/fa";
import "./coursepage.css";


function CourseDetailsPage() {
    return (    
        <div>
            <h1>Course Details</h1>            
            <div className="container">
                <div className="back-btn flex flex-row gap-4  items-center">
                   <div className="btnarr ">
                   <FaArrowLeft className="border " />
                   </div>
                    <a href="#">Back</a>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="course-details flex flex-row">
                            <h2>Course Title</h2>
                            <div className="tags">
                                
                            </div>
                            <div className="course-rating">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <span>4.5</span>
                            </div>
                            <div className="course-price">
                                <span>$100</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="course-video">
                            <iframe src="https://www.youtube.com/embed/5e0LxrLSzok" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsPage;