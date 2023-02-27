import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="flex flex-col pt-4 pr-24 pl-2 pb-6 items-center text-center bg-black ">
      <Link to={"https://github.com/jadrdev"}>
        <p className="text-base text-white">Made by Joshua A. Díaz Robayna</p>
      </Link>
      <Link to={"http://marvel.com"}>
        <p className="text-base text-white">
          Data provided by Marvel. © 2023 MARVEL
        </p>
      </Link>
    </div>
  );
}
