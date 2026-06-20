import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    name: "AVA - AI Career Guidance App",
    category: "AI & Career",
    tools: "Flutter, Django, ML, SQL",
    image: "/images/profile/project1.png",
  },
  {
    name: "GrabVehicle",
    category: "Ride & Rental Platform",
    tools: "Flutter, Django REST, PostgreSQL, Google Maps",
    image: "/images/profile/project2.png",
  },
  {
    name: "Eureka",
    category: "Smart Parking Management",
    tools: "Flutter, Django, PostgreSQL",
    image: "/images/profile/project3.png",
  },
  {
    name: "DocStore",
    category: "Healthcare & Doctor Booking",
    tools: "Flutter, React.js, Django, AI",
    image: "/images/profile/project4.jpg",
  },
  {
    name: "Quick Darshan",
    category: "Temple Puja Booking",
    tools: "Flutter, Django, Razorpay",
    image: "/images/profile/project5.png",
  },
  {
    name: "ERT",
    category: "Staffing & Employee Management",
    tools: "React.js, Django REST, PostgreSQL",
    image: "/images/profile/project6.png",
  },
  {
    name: "MFC (My Friend.Co)",
    category: "Study/Work Abroad Consultancy",
    tools: "React.js, Flutter, Django, PostgreSQL, AI",
    image: "/images/profile/project7.png",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
