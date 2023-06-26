import React from "react"

const Favorite = (props) => {
  if (props.discount !== undefined) {
    return (
      <div className="justify-center items-center flex text-center flex-col bg-white p-2">
        <div className="w-32 h-60 flex flex-col items-center relative z-0">
          <div className="absolute right-1">
            <button className="px-1.5 pt-1 rounded-md border right-1 border-gray-400 z-50">
              <i className="pi pi-plus"></i>
            </button>
          </div>
          <img
            className="w-28 h-32 bg-red-300 rounded-lg"
            alt={props.title}
            src={props.img}
          />

          <div className="flex flex-col text-center pt-4 space-y-1">
            <div className="flex items-center justify-evenly text-gray-500 text-center">
              <p className="line-through text-sm font-semibold">
                ₺{props.price}
              </p>
              <p className="text-purple-700 font-semibold text-sm">
                ₺{props.discount}
              </p>
            </div>
            <p className="font-bold text-sm">{props.title}</p>
            <p className="text-gray-500 text-sm">{props.specs}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="justify-center items-center flex text-center flex-col bg-white p-2">
        <div className="w-32 h-60 flex flex-col items-center absolute">
          <div className="absolute right-1">
            <button className="px-1.5 pt-1 rounded-md border right-1 border-gray-400 z-50">
              <i className="pi pi-plus"></i>
            </button>
          </div>
          <img
            className="w-28 h-32 bg-red-300 rounded-lg"
            alt={props.title}
            src={props.img}
          />

          <div className="flex flex-col text-center pt-4 space-y-1">
            <p className="text-purple-700 font-semibold text-sm">
              ₺{props.price}
            </p>
            <p className="font-bold text-sm">{props.title}</p>
            <p className="text-gray-500 text-sm">{props.specs}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Favorite
