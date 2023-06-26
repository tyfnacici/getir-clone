import React from "react"

const Card = (props) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-xs p-5 rounded-xl">
      <img className="w-36 h-36" alt={props.title} src={props.img}/>
      <div className="flex flex-col text-center space-y-4 w-[22rem]">
        <h1 className="text-purple-800 font-bold text-xl pt-4">
          {props.title}
        </h1>
        <p className="text-gray-500">{props.desc}</p>
      </div>
    </div>
  )
}

export default Card
