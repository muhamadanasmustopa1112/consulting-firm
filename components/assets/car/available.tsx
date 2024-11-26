import Image from "next/image";
import React from "react";

const AvailableCar = (props: {
  item: {
    name: string;
    description: string[];  // Mengubah type description menjadi array of strings
    price: string;
    information: string;
    image: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-2 transition-all hover:scale-105 hover:cursor-pointer">
      <div className="relative w-full h-[300px] border border-white rounded-tl-[1.875rem] rounded-br-[1.875rem] p-4 ">
        <Image
          src={props.item.image}
          alt={props.item.name}
          width={400}
          height={400}
          objectFit="cover"  // Gambar tetap terpotong sesuai dengan kontainer
          className="object-cover w-full h-full" 
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{props.item.name}</h3>
        
        {/* Menampilkan deskripsi sebagai list */}
        <ul className="list-disc pl-5 space-y-1">
          {props.item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        
        <div>
          <p className="text-lg lg:text-xl font-semibold">{props.item.price}</p>
          <p className="text-xs lg:text-base">{props.item.information}</p>
        </div>
      </div>
    </div>
  );
};

export default AvailableCar;
