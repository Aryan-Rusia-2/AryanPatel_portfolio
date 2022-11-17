import React from "react";
import divide from "../assets/project/divide.png";
import navsystem from "../assets/project/navsystem.png";
import hack from "../assets/project/hack.png";
import cricket from "../assets/project/cricket.png";
import engg160 from "../assets/project/engg160.png";
import inventory from "../assets/project/inventory.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: divide,
      // href: "https://github.com/Aryan-Rusia-2/Divide-and-Conquer-Example",
      detail: "helllllllllll"
    },
    {
      id: 2,
      src: hack,
      // href: "https://github.com/Aryan-Rusia-2/Matrix-Operations",
      detail: "helllllllllll"
    },
    {
      id: 3,
      src: inventory,
      // href: "https://github.com/Aryan-Rusia-2/Microsoft-Clone",
      detail: "helllllllllll"
    },
    {
      id: 4,
      src: cricket,
      // href: "https://github.com/Aryan-Rusia-2/Facebook-signup-page-login",
      detail: "helllllllllll"
    },
    {
      id: 5,
      src: navsystem,
      // href: "https://github.com/Aryan-Rusia-2/Navigation-System",
      detail: "helllllllllll"
    },
    {
      id: 6,
      src: engg160,
      // href: "https://github.com/Aryan-Rusia-2/Moving_Car_Animation",
      detail: "helllllllllll"
    },
  ];

  return (
    <div
      id="projects"
      className="dark:bg-gradient-to-bl bg-[#202027] md:min-h-screen p-10 pt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div>

          <p className="text-4xl font-bold text-center">
            Projects
          </p>

          <p className="pb-16 pt-6 text-center">
            Click on the cards to know more !!
          </p>

        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 px-4 sm:px-0 pb-10">
          {projects.map(({ id, src, detail }) => (
            <div key={id} className="shadow-xl shadow-[#41ade3cf] relative rounded-lg">

              <img src={src} alt="" className="rounded-md w-full h-full" />
              <div class="group bg-transparent h-full w-full top-0 left-0 absolute duration-300 hover:bg-[#5fa3f0b7] ">
                <h3 className="w-max font-medium  text-2xl text-black absolute top-[30%] left-[50%] duration-500 -translate-x-2/4 opacity-0 group-hover:bottom-1/2
           group-hover:opacity-100">{detail}</h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
