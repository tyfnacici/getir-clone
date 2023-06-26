import React from "react"
import Category from "../components/Category"

const imageList = [
  {
    id: 3,
    src: require("../images/categories/beverage.jpeg"),
    alt: "Beverages",
  },
  {
    id: 4,
    src: require("../images/categories/fruits.jpeg"),
    alt: "Fruits & Veg",
  },
  {
    id: 5,
    src: require("../images/categories/baked.jpeg"),
    alt: "Baked Goods",
  },
  {
    id: 6,
    src: require("../images/categories/food.jpeg"),
    alt: "Food",
  },
  {
    id: 7,
    src: require("../images/categories/snacks.jpeg"),
    alt: "Snacks",
  },
  {
    id: 8,
    src: require("../images/categories/icecream.jpeg"),
    alt: "Ice Cream",
  },
  {
    id: 9,
    src: require("../images/categories/milk.jpeg"),
    alt: "Milk & Dairy",
  },
  {
    id: 10,
    src: require("../images/categories/breakfast.jpeg"),
    alt: "Breakfast",
  },
  {
    id: 11,
    src: require("../images/categories/ready.jpeg"),
    alt: "Ready to Eat",
  },
  {
    id: 12,
    src: require("../images/categories/form.jpeg"),
    alt: "Fit & Form",
  },
  {
    id: 13,
    src: require("../images/categories/percare.jpeg"),
    alt: "Personal Care",
  },
  {
    id: 14,
    src: require("../images/categories/homecare.jpeg"),
    alt: "Home Care",
  },
  {
    id: 15,
    src: require("../images/categories/homeliving.jpeg"),
    alt: "Home & Living",
  },
  {
    id: 16,
    src: require("../images/categories/tech.jpeg"),
    alt: "Tech",
  },
  {
    id: 17,
    src: require("../images/categories/pet.jpeg"),
    alt: "Pet Food",
  },
  {
    id: 18,
    src: require("../images/categories/baby.jpeg"),
    alt: "Baby Care",
  },
  {
    id: 19,
    src: require("../images/categories/sex.jpeg"),
    alt: "Sex Health",
  },
]

const Categories = () => {
  return (
    <div className="flex flex-col text-sm w-min-max bg-white p-3 md:container mx-auto px-44">
      <p className="font-bold mt-2">Categories</p>
      <div className="grid grid-cols-11 py-2 mt-2">
        {imageList.map((image) => {
          return (
            <Category
              key={image.id}
              alt={image.alt}
              title={image.alt}
              img={image.src}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Categories
