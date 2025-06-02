import React, { useEffect, useState } from "react";
import { CheckCircle, Clock, Star, MessageSquare, PlayCircle, Users } from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import dropdown from "../assets/ic_drop_down_arrow.svg"
import icMonitorPlay from "../assets/ic_monitor_play.svg"
import icMobile from "../assets/ic_mobile.svg"
import icInfinity from "../assets/ic_infinity.svg"
import icTrophy from "../assets/ic_trophy.svg"
import instructorImage from "../assets/instructor_img.jpg"
import { useMediaQuery } from "react-responsive";

const CourseDetails = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isScrollFixedSection, setisScrollFixedSection] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const is1080px=useMediaQuery({
    query:`(max-width:1080px)`
  })
  const is1024px=useMediaQuery({
    query:`(max-width:1024px)`
  })

  useEffect(() => {
    const handleChange = () => {
      if (window.scrollY > 450) {
        setisScrollFixedSection(true);
      } else {
        setisScrollFixedSection(false);
      }
    };
    window.addEventListener("scroll", handleChange);
    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, []);

  const courses = [
    {
      title: "Project A-Room (HTML-Tailwindcss)",
      lectures: "20 Lectures 11hr 11min"
    },
    {
      title: "Project using React and Tailwindcss",
      lectures: "10 Lectures 13hr 38min"
    }
  ];

  const whatCourseInclude = [
    { img: icMonitorPlay, label: "25 hours on-demand video" },
    { img: icMobile, label: "Access on mobile and TV" },
    { img: icInfinity, label: "Full lifetime access" },
    { img: icTrophy, label: "Certificate of completion" }
  ];

  const Requirements = ["A Laptop or A computer", "internet connection", "Dedication"];

  return (
    <>

      <Header />
    
      <div className="bg-gradient-to-r from-[#220359] to-[#4906BF] text-white py-12 px-6 md:px-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-2/3">
            <div className="max-w-4xl">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Build Real Projects: Master Front-End <br /> Development
              </h1>
              <p className="text-[1rem] md:text-lg mb-6 text-gray-200">
                Build modern, responsive websites and powerful web apps using HTML, CSS, <br /> JavaScript, and React — no experience needed.
              </p>
              <p>Instructor: <Link to="" className="text-[#3DBEFF] underline">Abdul-Muqaddam</Link> (Founder & CEO, A-Y-A Corporation)</p>
            </div>

            <div className="max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">What You’ll Learn</h2>
                <ul className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <li className="flex items-start gap-2" key={i}>
                      <CheckCircle className="text-green-400 mt-1" />
                      {/* Customize based on content */}
                      <span>{["Build a responsive website from scratch using HTML, CSS, and Tailwind CSS.",
                        "Create interactive user interfaces with JavaScript and React",
                        "Implement advanced styling techniques using Tailwind CSS",
                        "Develop a single-page application (SPA) with React",
                        "Real-world projects and portfolio-ready apps"][i]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className={`bg-[#3A1A73] rounded-[10px] w-full lg:w-[360px] gap-3 py-3 flex flex-col justify-around items-center mt-10 lg:mt-0 ${isScrollFixedSection && !is1080px ? "fixed right-5 bottom-3.5" : "relative"}`}>
            <iframe
              width="100%"
              height="202"
              src="https://www.youtube.com/embed/8Dl5VJwiQs4?si=08jqHArhUVDG4nZ4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="w-[90%] flex flex-col gap-3">
              <p className="font-bold text-4xl">$9.00</p>
              <button className="font-semibold text-xl bg-[#FACC15] text-[#3A1A73] hover:bg-[#EAB308] cursor-pointer w-full py-1.5 rounded-[5px]">
                Buy Now
              </button>
              <p className="text-center">7-Day Money-Back Guarantee</p>
              <p className="font-bold text-xl">This course includes:</p>
              {whatCourseInclude.map((item, i) => (
                <div className="flex gap-3" key={i}>
                  <img src={item.img} alt="" className="h-[20px]" />
                  <div>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-3xl mt-10 font-semibold">Course content</h2>
          {courses.map((course, index) => (
            <div key={index}>
              <div
                onClick={() => setOpenDropdownIndex(openDropdownIndex === index ? null : index)}
                className={`cursor-pointer border-[2px] border-[#4C3F76] mt-10 bg-[#3A1A73] px-6 py-4 flex items-center justify-between rounded-[5px] w-full max-w-[100%]  ${is1024px?"md:max-w-[100vw]":"md:max-w-[60vw]"}`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={dropdown}
                    alt=""
                    className={`h-[15px] ${openDropdownIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}
                  />
                  <p>{course.title}</p>
                </div>
                <div>{course.lectures}</div>
              </div>
              {openDropdownIndex === index && (
                <div className="border-[2px] border-[#4C3F76] border-t-transparent bg-[#3A1A73] w-full max-w-[100%] md:max-w-[60vw] p-4">
                  {/* Course details here */}
                </div>
              )}
            </div>
          ))}

          <h2 className="text-2xl font-semibold mt-20">Requirements</h2>
          <ul className="list-disc ml-6">
            {Requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className={`text-white w-full ${is1024px?"md:w-full":"md:w-[65%]"}  my-10 space-y-6`}>
            <div className="bg-[#3A1A73] p-6 rounded-[10px] transition-all duration-500">
              <h2 className="text-2xl font-bold">Description</h2>
              <p>
                Are you looking to kickstart your career in web development but don't know where to begin?
                This beginner-friendly course is designed to guide you step-by-step through real-world projects.
              </p>
              {isExpanded && (
                <>
                  <p className="mt-4">
                    Throughout this course, you'll learn essential web development skills, including HTML, CSS, JavaScript,
                    REACT, and responsive design techniques. You'll build dynamic websites from scratch, understand how the
                    web works, and use tools like VS Code, Git, and GitHub.
                  </p>
                </>
              )}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-sm font-semibold text-white bg-[#4C3F76] px-4 py-2 rounded hover:bg-[#5E4B8B] transition-all duration-300"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          </div>

          {/* Instructor */}
          <section className={`bg-[#3A1A73] text-white w-full  ${is1024px?"":"md:w-[65%]"}  py-16 px-4 md:px-20`}>
            <h2 className="text-3xl font-bold mb-8">Instructor</h2>
            <div className="flex flex-col md:flex-row gap-6 md:items-start">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg border-2 border-[#7D3CFF]">
                <img src={instructorImage} alt="Abdul-Muqaddam" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <Link to="#" className="text-xl font-semibold hover:underline">
                    Abdul-Muqaddam
                  </Link>
                  <p className="text-sm mt-1">I'm 20 years old and I'm a Full Stack Developer</p>
                </div>
                <div className="flex flex-wrap gap-5 text-sm">
                  <div className="flex items-center gap-2"><Star className="w-4 h-4" /> -- Instructor Rating</div>
                  <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> -- Reviews</div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 7 Students</div>
                  <div className="flex items-center gap-2"><PlayCircle className="w-4 h-4" /> 1 Course</div>
                </div>
                <p className="mt-4 leading-relaxed max-w-3xl">
                  Hello everyone, I'm Abdul-Muqaddam, a full-stack developer with 2 years of professional experience in building dynamic and responsive web applications and 1 year of experience in teaching. I'm passionate about guiding and mentoring aspiring developers, sharing my knowledge, and helping them kickstart their careers in web development with confidence. Join me today — I'll help you fulfill your web-developer dream!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
