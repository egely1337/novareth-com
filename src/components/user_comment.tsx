import React from "react";
import { FaStar } from "react-icons/fa";



export default function UserComment(props: {
    author: string,
    desc: string,
    startCount?: number
  }) {
    return(
      <div className="cursor-pointer hover:-translate-y-1 duration-300 ease-in-out mt-[32px] bg-white flex font-inter rounded-md flex-col p-4 max-w-[240px] min-h-[300px]">
        <span className="font-bold">{props.author}</span>
        <span className="mt-4">{props.desc}</span>
        <div className="h-full flex items-end">
          <div className="flex flex-row gap-2 mt-4">
            {Array.from({length: props.startCount ?? 0}, ((_, index) => index + 1)).map((val) => {
              return(
                <FaStar size={24} className="text-yellow-600"/>
              )
            })}
          </div>   
        </div>       
      </div>
    )
  }