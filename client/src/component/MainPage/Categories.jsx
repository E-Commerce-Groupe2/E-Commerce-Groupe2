import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/phones.png",
      cateName: "Fhones",
    },
    {
      cateImg: "./images/category/pc.png",
      cateName: "laptops",
    },
    {
      cateImg: "./images/category/home appliances.png",
      cateName: "Home Appliances",
    },
    {
      cateImg: "./images/category/tv.png",
      cateName: "TV",
    },
    {
      cateImg: "./images/category/game.png",
      cateName: "Games",
    },
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
