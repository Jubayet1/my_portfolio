import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">    
          I'm a web developer with a focus on the MERN stack, but now I'm working on 
          technologies and frameworks specifically React that catch my interest! 
          if you're looking for a developer to add to your team, I'd love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
