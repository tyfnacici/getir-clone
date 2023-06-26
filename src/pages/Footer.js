import React from "react"
import appstore from "../images/footer/appstore.svg"
import googleplay from "../images/footer/googleplay.svg"
import appgalery from "../images/footer/appgallery.svg"
import etbis from "../images/footer/etbis.png"

const Footer = () => {
  return (
    <div className="w-min-max bg-white pt-6 pb-4">
      <div className="p-3 md:container mx-auto px-44">
        <div className="flex flex-row justify-between">
          <ul className="text-sm text-gray-700 space-y-5 pr-8">
            <li className="text-purple-800 text-lg">Download Getir!</li>
            <li>
              <a href="#">
                <img src={appstore} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={googleplay} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={appgalery} />
              </a>
            </li>
          </ul>
          <ul className="text-sm text-gray-700 space-y-[.95rem]">
            <li className="text-purple-700 text-lg">Discover Getir</li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Techonology Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">COVID-19 Announcement</a></li>
            <li><a href="#">Social Responsibility Projects</a></li>
          </ul>
          <ul className="text-sm text-gray-700 space-y-[.95rem]">
            <li className="text-purple-700 text-lg">Need help?</li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Protecting Private Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
          <ul className="text-sm text-gray-700 space-y-[.95rem]">
            <li className="text-purple-700 text-lg">
                Become Our Businnes Partner
            </li>
            <li><a href="#">Become a franchise</a></li>
            <li><a href="#">Rent Your Warehouse</a></li>
            <li><a href="#">Become a GetirFood Restourant</a></li>
            <li><a href="#">Becoma a GetirLocals Businnes</a></li>
          </ul>
          <ul>
            <img src={etbis} className="w-[6.5rem] shadow-md bg-white p-3 rounded-lg" />
          </ul>
        </div>
        <div className="flex text-sm justify-between pt-10 min-w-full">
          <div className="flex space-x-3">
            <p>© 2022 Getir</p>
            <a href="#" className="text-violet-700">
              Information Society Services
            </a>
          </div>
          <div className="flex items-center text-center space-x-6 text-sm">
            <a href="#">
              <i className="pi pi-facebook text-lg mb-[.15rem]" />
            </a>
            <a href="#">
              <i className="pi pi-twitter text-lg mb-[.15rem]" />
            </a>
            <a href="#">
              <i className="pi pi-instagram text-lg mb-[.15rem]" />
            </a>
            <a href="#" className="flex items-center space-x-2 mb-[.15rem]">
              <i className="pi pi-globe text-lg" />
              <p>English (EN)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
