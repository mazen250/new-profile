import React from "react";
import Cairo from "../../../assets/CairoUniversity.png";
import udacity from "../../../assets/udacity.png";
import udemy from "../../../assets/udemy.png";
import istqb from "../../../assets/istqb.jpg";
import cls from "../../../assets/cls.png";
import "../styles/cert.css";
const certs = [
  {
    name: "Bachelor of Science in Computer and Artificial Intelligence",
    school: "Cairo University",
    image: Cairo,
    link: "https://cu.edu.eg/Home",
  },
  {
    name: "Advanced Full Stack Web Nanodegree",
    school: "Udacity",
    image: udacity,
    link: "https://www.udacity.com/",
  },
  {
    name: "Full stack MERN Developer",
    school: "Udemy",
    image: udemy,
    link: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/28958218?start=1#overview",
  },
  {
    name: "ISTQB Certified Tester Foundation Level",
    school: "ISTQB",
    image: istqb,
    link: "https://www.istqb.org/",
  },
  {
    name: " Algorithms and Data Structures",
    school: "CLS Learning",
    image: cls,
    link: "https://clslearn.com/",
  },
];

const Cert = () => {
  return (
    <div className="certContainer">
      <h1>
        <span>C</span>ertifications
      </h1>
      <div className="certs">
        {certs.map((cert) => (
          <div className="cert" key={cert.name}>
            <img src={cert.image} alt={cert.name} />
            <div className="certInfo">
              <h4>{cert.school}</h4>
              <h3>{cert.name}</h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                view website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cert;
