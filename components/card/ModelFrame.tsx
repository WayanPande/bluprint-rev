import Image from "next/image";
import React from "react";

interface IProps {
  url: string;
  alt?: string;
  frameKey?: string;
}

const ModelFrame: React.FC<IProps> = ({ url, alt = "gambar", frameKey }) => {
  return (
    <div
      key={frameKey}
      className="shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-56 w-56 xl:h-[16.5rem] xl:w-[16.5rem] flex justify-center items-center"
    >
      <div className="bg-white h-48 w-48 xl:h-[14.5rem] xl:w-[14.5rem] flex justify-center items-center shadow-inner">
        <div className="shadow-frame flex justify-center p-2 lg:p-4 xl:p-7">
          <Image src={url} width={130} height={130} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ModelFrame;
