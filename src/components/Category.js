import React from "react"

const Category = (props) => {
  return (
    <div className="hover:bg-violet-100 py-2 h-[7rem] rounded-md">
      <div className="justify-center items-center flex text-center flex-col">
        <img alt={props.alt} src={props.img} className="w-12 h-12 rounded-lg border border-gray-200"/>
        <p className="font-semibold pt-2 leading-5">{props.title}</p>
      </div>
    </div>
  )
}

export default Category
