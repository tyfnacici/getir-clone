import React, { useEffect, useState } from "react"
import getirhero from "../images/hero-getir.svg"

const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const images = [
    {
      url: "https://raw.githubusercontent.com/tyfnacici/getir-clone/main/src/images/hero/hero1.jpg",
    },
    {
      url: "https://raw.githubusercontent.com/tyfnacici/getir-clone/main/src/images/hero/hero2.jpg",
    },
    {
      url: "https://raw.githubusercontent.com/tyfnacici/getir-clone/main/src/images/hero/hero3.jpg",
    },
  ]
  return (
    <div className="flex flex-col w-min-max h-[500px]">
      <div className="w-full h-full bg-center bg-cover duration-500 ease-linear transition-all flex static translate" style={{backgroundImage: `url(${images[currentIndex].url})`}}>
      <div className="h-[500px] w-full bg-gradient-to-r z-0 from-[#5d3ebc] absolute"></div>
        <div className="p-3 md:container mx-auto px-44 flex z-10 justify-between items-center">
          <div className="flex flex-col w-64 space-y-6">
            <img className="w-44" alt="hero-getir" src={getirhero} />
            <p className="text-white text-[2.5rem] leading-10">
              At your door in minutes
            </p>
          </div>
          {/* Form */}
          <div className="flex flex-col bg-white p-6 space-y-4 rounded-lg text-center">
            <p className="text-[#5d3ebc] font-bold">Login or Register</p>
            <div className="mt-2 space-x-2.5 flex flex-row">
              <select className="px-5 py-4 bg-white rounded-md border border-gray-300 text-sm">
                <option value="+90">🇹🇷 +90</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                className="py-3.5 px-3.5 rounded-md border border-gray-300 text-sm"
                type="text"
                placeholder="Mobile Phone"
              />
            </div>
            <button className="bg-[#ffd301] text-sm text-[#5d3ebc] font-semibold rounded-lg py-3.5 hover:bg-[#5d3ebc] hover:text-[#ffd301] duration-150">
              Continue with phone number
            </button>
          </div>
          {/* Form end */}
        </div>
      </div>
    </div>
  )
}

export default Hero
