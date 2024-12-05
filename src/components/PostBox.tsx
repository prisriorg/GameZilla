import Link from "next/link";
import React from "react";
import { CiPlay1 } from "react-icons/ci";
const PostBox = ({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: string;
}) => {
  return (
    <article className="relative group overflow-hidden rounded-lg flex items-center justify-center transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl w-28">
      <div className=" w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out">
        <img
          className="w-full h-full object-cover rounded-lg group-hover:blur-sm transition-all duration-500 ease-in-out"
          src={image}
          alt={name}
        />
      </div>
      <div className="bg-black opacity-40 rounded-lg group-hover:opacity-50 transition-all duration-300 ease-in-out" />
      <Link
        href={url}
        title={name}
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button className="bg-white text-black rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300">
          <CiPlay1 fill="#000000" />
        </button>
      </Link>
    </article>
  );
};

export default PostBox;
