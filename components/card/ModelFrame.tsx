import Image from "next/image";
import Link from "next/link";
import React from "react";
import { removeExtension } from "../../util/my-util";

interface IProps {
  url: string;
  alt?: string;
  className?: string;
}

const ModelFrame: React.FC<IProps> = ({ url, alt = "gambar", className }) => {
  const [, , type, name] = url.split("/");

  return (
    <Link
      href={`/model/${type}/${removeExtension(name)}`}
      className={`shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-56 w-56 xl:h-[16.5rem] xl:w-[16.5rem] flex justify-center items-center ${className} hover:scale-110 transition-all cursor-pointer hover:shadow-xl`}
    >
      <div className="bg-white h-48 w-48 xl:h-[14.5rem] xl:w-[14.5rem] flex justify-center items-center shadow-inner">
        <div className="shadow-frame flex justify-center p-4 lg:m-4 xl:m-5">
          <Image
            src={url}
            width={130}
            height={130}
            alt={alt}
            className="lg:w-full lg:h-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default ModelFrame;
