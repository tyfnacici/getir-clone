import React from "react"
import Favorite from "../components/Favorite"

const imageList = [
  {
    id: 1,
    src: require("../images/favorites/kuzeyden.jpeg"),
    title: "Kuzeyden",
    price: "3.95",
    specs: "1.5 L",
  },
  {
    id: 2,
    src: require("../images/favorites/kizilay.jpeg"),
    title: "Kızılay Erzincan",
    price: "7.75",
    specs: "6 x 200 ml",
  },
  {
    id: 3,
    src: require("../images/favorites/ulker.jpeg"),
    title: "Ülker Napoliten",
    price: "5.50",
    discount: "4.40",
    specs: "33 g",
  },
  {
    id: 4,
    src: require("../images/favorites/lays.jpeg"),
    title: "Lays Mevsim Yeşillikli",
    price: "8.95",
    specs: "96 g",
  },
  {
    id: 5,
    src: require("../images/favorites/tadim.jpeg"),
    title: "Kavrulmuş Siyah Ay Çekirdeği",
    price: "9.85",
    specs: "180 g",
  },
  {
    id: 6,
    src: require("../images/favorites/magnum.jpeg"),
    title: "Magnum Badem",
    price: "11.50",
    specs: "110 ml",
  },
  {
    id: 7,
    src: require("../images/favorites/uno.jpeg"),
    title: "Uno Tost Ekmeği",
    price: "10.95",
    specs: "350 g",
  },
  {
    id: 8,
    src: require("../images/favorites/icim.jpeg"),
    title: "İçim %3 Yağlı Süt",
    price: "12.95",
    specs: "1 L",
  },
  {
    id: 9,
    src: require("../images/favorites/bahcivan.jpeg"),
    title: "Bahçıvan Süzme Peynir",
    price: "30.95",
    specs: "500 g",
  },
  {
    id: 10,
    src: require("../images/favorites/hertane.jpeg"),
    title: "Hertane Kuru Sele Zeytin",
    price: "39.90",
    specs: "285 g",
  },
  {
    id: 11,
    src: require("../images/favorites/nuhun.jpeg"),
    title: "Nuh'un Ankara Spagetti",
    price: "7.50",
    specs: "500 g",
  },
  {
    id: 12,
    src: require("../images/favorites/colgate.jpeg"),
    title: "Colgate Optik White",
    price: "39.90",
    specs: "75 ml",
  },
  {
    id: 13,
    src: require("../images/favorites/elidor.jpeg"),
    title: "Elidor Güçlü ve Parlak Şampuan",
    price: "37.50",
    specs: "650 ml",
  },
  {
    id: 14,
    src: require("../images/favorites/solo.jpeg"),
    title: "Solo Tuvalet Kağıdı",
    price: "67.90",
    discount: "55.90",
    specs: "16'lı",
  },
  {
    id: 15,
    src: require("../images/favorites/yumos.jpeg"),
    title: "Yumoş Ekstra Orkide Yasemin",
    price: "39.90",
    specs: "1440 ml",
  },
  {
    id: 16,
    src: require("../images/favorites/domestos.jpeg"),
    title: "Domestos Dağ Esintisi",
    price: "14.75",
    specs: "750 ml",
  },
]

const Favorites = () => {
  return (
    <div className="flex flex-col w-min-max bg-[#f7f6f9]">
      <div className="p-3 md:container mx-auto px-44">
        <p className="font-bold text-sm pt-8">Favorites</p>
        <div className="grid grid-cols-8 gap-1 py-2 pt-8">
          {imageList.map((image) => {
            return (
              <Favorite
                key={image.id}
                img={image.src}
                title={image.title}
                price={image.price}
                specs={image.specs}
                discount={image.discount}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Favorites
