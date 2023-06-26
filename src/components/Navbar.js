import React from "react"
import getir from "../images/getir.svg"
import getiryemek from "../images/getir-yemek.svg"
import getirbüyük from "../images/getir-büyük.png"
import getirsu from "../images/getir-su.png"
import getircarsi from "../images/getir-carsi.png"

const Navbar = () => {
  return (
    <div className="pt-[.20rem] z-50 bg-[#4d3399] text-white text-base font-semibold sticky top-0">
      <div className="md:container mx-auto px-36 flex justify-between ">
        <div className="flex items-center space-x-[1.25rem]">
          <div className="relative bg-[#5d3ebc] px-5 rounded-t-lg">
            <img src={getir} alt="getir" className="h-4 static mb-3 mt-3" />
          </div>
          <ul className="flex space-x-[2rem]">
            <img src={getiryemek} alt="getiryemek" className="h-4 mt-3 mb-3" />
            <img src={getirbüyük} alt="getirbüyük" className=" h-4 mt-3 mb-3" />
            <img src={getirsu} alt="getirsu" className="h-4 mt-3 mb-3" />
            <img src={getircarsi} alt="getircarsi" className="h-4 mt-3 mb-3" />
          </ul>
        </div>
        <div className="flex items-end pt-3 pb-3">
          <ul className="flex space-x-8 text-sm">
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-globe text-lg"></i>
              <p>English (EN)</p>
            </li>
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-user"></i>
              <p>Login</p>
            </li>
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-user-plus"></i>
              <p>Sign Up</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
