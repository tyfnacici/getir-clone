import React from "react"

const Promotions = () => {
  return (
    <div className="flex flex-col w-min-max text-sm bg-[#f7f6f9]">
      <div className="p-3 md:container mx-auto px-44">
        <p className="font-bold pt-4">Promotions</p>
        <div className="flex gap-4 py-2 pt-7">
          <img
            alt="promo1"
            className="w-[25rem]"
            src={require("../images/promo/promo1.jpeg")}
          />
          <img
            alt="promo2"
            className="w-[25rem]"
            src={require("../images/promo/promo2.jpeg")}
          />
        </div>
      </div>
    </div>
  )
}

export default Promotions
