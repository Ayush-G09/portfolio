import React from "react";
import "../Home/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faSquareJs,  faSass, faAngular, faHtml5, faCss3Alt, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-[65%] h-auto flex justify-between">
        <div className="flex flex-col pt-10 gap-2 w-[60%]">
          <div className="text-lg font-light">Hello, I'm Ayush Gokhle</div>
          <div className="text-4xl font-semibold mb-4">
            Full Stack Developer 👋
          </div>
          <div>
            As a passionate full stack developer on a mission to craft digital
            experiences that seamlessly blend innovation and functionality. I'm
            here to build bridges between creativity and technology, shaping the
            digital landscape one line of code at a time.
          </div>
          <div className="flex items-center mt-3 gap-3 text-lg">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div className="blob" />
      </div>
      <div className="flex items-center w-[65%] h-auto py-3 mt-16 gap-3">
        <div>Tech Stack</div>
        <div className="h-[18px] bg-black w-[1.5px]"/>
        <div className="text-2xl text-[#61dbfb] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faReact}/>
        </div>
        <div className="text-2xl text-[#336633] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faNodeJs}/>
        </div>
        <div className="text-2xl text-[#F0DB4F] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faSquareJs}/>
        </div>
        <div className="text-2xl text-[#c3002f] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faAngular}/>
        </div>
        <div className="text-2xl text-[#cc6699] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faSass}/>
        </div>
        <div className="text-2xl text-[#e34c26] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faHtml5}/>
        </div>
        <div className="text-2xl text-[#264de4] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <FontAwesomeIcon icon={faCss3Alt}/>
        </div>
        <div className="text-2xl w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <div className="nextjs"/>
        </div>
        <div className="text-2xl w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <div className="redux"/>
        </div>
        <div className="text-2xl w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-md">
            <div className="tailwind"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
