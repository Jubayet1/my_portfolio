import React from "react";
import fancyAuth from "../assets/portfolio/01.PNG";
import darkDash from "../assets/portfolio/02.PNG";
import colorPicker from "../assets/portfolio/03.PNG";
import weatherMaster from "../assets/portfolio/04.PNG";
import gameArena from "../assets/portfolio/05.PNG";
import cryptoBudsCafe from "../assets/portfolio/06.PNG";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fancyAuth
    },
    {
      id: 2,
      src: darkDash
    },
    {
      id: 3,
      src: colorPicker
    },
    {
      id: 4,
      src: weatherMaster
    },
    {
      id: 5,
      src: gameArena
    },
    {
      id: 6,
      src: cryptoBudsCafe
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
