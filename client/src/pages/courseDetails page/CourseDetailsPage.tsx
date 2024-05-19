import { FaArrowLeft, FaStar,  } from "react-icons/fa";
import "./coursepage.css";
import Tags from "../../components/tags";
import avatar from "../../assets/avatar-group.png";
import thumb from "../../assets/images/thumbnail.jpg";
import { IoArrowDownCircleOutline } from "react-icons/io5";


function CourseDetailsPage() {
    return (
        <div className="header">
            <h1>Course Details</h1>
            <div className="container max-w-4xl">
                <div className="back-btn flex flex-row gap-4  items-center">
                    <div className="btnarr ">
                        <FaArrowLeft className=" " />
                    </div>
                    <a href="#">Back</a>
                </div>
                <div className="row">
                    <div className="col-md-6 flex flex-row gap-8"><div className="course-image w-full">
                        <img src={thumb} alt="" />
                    </div>
                        <div className="course-details w-full">
                            <h2>Advanced Cybersecurity Techniques</h2>
                            <div className="tags-group flex flex-row gap-2">
                                <Tags category={"Cybersecurity"} />
                                <Tags category={"Ethical Hacking"} /> <Tags category={"Programming "} />
                            </div>
                            <div className="course-rating flex flex-row mt-3">
                                <FaStar className="fastar" />
                                <FaStar className="fastar" />
                                <FaStar className="fastar" />
                                <FaStar className="fastar" />
                                <FaStar className="fastar" />
                                <span className="rating-text"> 4.5+</span>
                            </div>
                            <div className="course-extras space flex flex-row mt-3 w-full">
                                <div className="extra">
                                    <div className="snips flex flex-row items-center ">
                                        <img src={avatar} alt="Images of people enrolled" /><span>1000 Enrolled</span>


                                    </div>
                                    <h4 className="mt-3"> Total: 80 hrs</h4>                        </div>
                                <div className="extra">
                                    <button className="main-button">Start Course</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="course-description p-8 ">
                    <div className="Top-name flex flex-row justify-between max-w-full"> <h3 >Course-Descriptions</h3>
                    <IoArrowDownCircleOutline/></div>
                    <p>The "Advanced Cybersecurity Techniques" course is designed for cybersecurity professionals seeking to enhance their skills and stay ahead of evolving cyber threats. This advanced-level course delves into sophisticated cybersecurity techniques, tools, and strategies employed by industry experts to safeguard critical systems and data from advanced cyber attacks.</p>
                    <div className="Top-name flex flex-row justify-between max-w-full p-2"> <h3 >CourseModules</h3>
                    <IoArrowDownCircleOutline/></div>
                    <div className="Top-name flex flex-row justify-between max-w-full p-2"> <h3 >Discussion Forum</h3>
                    <IoArrowDownCircleOutline/></div>
                </div>
            </div>
        </div>

    )
}

export default CourseDetailsPage;