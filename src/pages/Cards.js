import React from "react"
import Card from "../components/Card"
import spot1 from "../images/cards/spot1.svg"
import spot2 from "../images/cards/spot2.svg"
import spot3 from "../images/cards/spot3.svg"


const imageList = [
  {
    id: 1,
    src: spot1,
    title: "A promotion for every order",
    desc: "At Getir, you can find a promotion for every order.",
  },
  {
    id: 2,
    src: spot2,
    title: "At your door in minutes",
    desc: "Your order is at your door in minutes with Getir.",
  },
  {
    id: 3,
    src: spot3,
    title: "Thousand kinds of happiness",
    desc: "At Getir, you can choose from thousands of varieties.",
  },
]

const Cards = () => {
  return (
    <div className="flex flex-col w-min-max bg-[#f7f6f9] pt-4 pb-10">
      <div className="p-3 md:container mx-auto px-44">
        <div className="flex gap-4 py-2">
          {imageList.map((image) => {
            return (
              <Card
                key={image.key}
                img={image.src}
                title={image.title}
                desc={image.desc}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Cards
