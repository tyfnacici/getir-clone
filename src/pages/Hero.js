import React, { useEffect, useState } from "react"
import getirhero from "../images/hero-getir.svg"

const Hero = () => {
  const [hero, setHero] = useState("hero1")
  let heroCss = `w-full h-full bg-center bg-cover duration-20 flex duration-200 bg-`

  useEffect(() => {
    const interval = setInterval(() => {
      const heroImage = () => {
        switch (hero) {
          case "hero1":
            setHero("hero2")
            heroCss += hero
            break
          case "hero2":
            setHero("hero3")
            heroCss += hero
            break
          case "hero3":
            setHero("hero1")
            heroCss += hero
            break
          default:
            setHero("hero1")
            heroCss += hero
            break
        }
      }
      heroImage()
    }, 2000)
    return () => clearInterval(interval)
  }, [hero, hero])

  return (
    <div className="flex flex-col w-min-max bg-[#fafafa] h-[500px]">
      <div
        className={heroCss}
      >
        <div className="p-3 md:container mx-auto px-44 flex justify-between items-center">
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
