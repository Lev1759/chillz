import React from 'react';


const brands= [
  {
    name: "Gulder",
    price: "N600",
    img: "/image/gulder.jfif",
    id: 122
  },

  {
    name: "Star",
    price: "N600",
    img: "/image/star.jfif",
    id: 123
  },

  {
    name: "Hero",
    price: "N600",
    img: "/image/hero.jfif",
    id: 124
  },

  {
    name: "Heineken",
    price: "N800",
    img: "/image/heineken.png",
    id: 125
  },
]

const Drinks = () => {
  return (
    <>
    <div className='relative bg-black w-full h-full'>
        <div className='bg-black w-full h-full'>
        {/* <img className='absolute w-full h-full object-contain' src='/image/cups.jpg' alt='' /> */}
        {/* <div className='absolute w-full h-full bg-black/80 opacity-50'></div> */}
          <div className=' w-full'>
                <div className=' bg-black max-w-[320px] h-[450] mx-auto py-10 z-[50] mt-10'>
                  <p className='text-2xl text-center font-extralight text-[#a070ca]'> - Beer -</p>
                <ul className="p-6 divide-y divide-slate-200">
                  {brands.map((brand, idx) => (
                    <li key={brand.id} id={idx} className="flex items-center justify-between py-2 gap-3 ">
                      <img className="h-10 w-10 rounded-full" src={brand.img} alt="" />
                      <div className="flex flex-row items-center gap-2 mr-0 overflow-hidden ">
                        <p className="text-sm font-medium text-slate-100">{brand.name}</p>
                        <p className="text-sm text-slate-300 ">{brand.price}</p>
                      </div>
                    </li>
                  ))}
              </ul>
                </div>
                <div className='max-w-[320px] mx-auto py-10 z-[50]'>
                  <p className='text-2xl text-center font-extralight text-[#a070ca]'>- Wine -</p>
                <ul className="p-6 divide-y divide-slate-200">
                  {brands.map((brand, idx) => (
                    <li key={brand.id} id={idx} className="flex items-center justify-between py-2 gap-3 ">
                      <img className="h-10 w-10 rounded-full" src={brand.img} alt="" />
                      <div className="flex flex-row items-center gap-2 mr-0 overflow-hidden ">
                        <p className="text-sm font-medium text-slate-100">{brand.name}</p>
                        <p className="text-sm text-slate-300 ">{brand.price}</p>
                      </div>
                    </li>
                  ))}
              </ul>
                </div>
                <div className='max-w-[320px] mx-auto py-10 z-[50] mb-10'>
                  <p className='text-2xl text-center font-extralight text-[#a070ca]'> - Spirit -</p>
                <ul className="p-6 divide-y divide-slate-200">
                  {brands.map((brand, idx) => (
                    <li key={brand.id} id={idx} className="flex items-center justify-between py-2 gap-3 ">
                      <img className="h-10 w-10 rounded-full" src={brand.img} alt="" />
                      <div className="flex flex-row items-center gap-2 mr-0 overflow-scroll ">
                        <p className="text-sm font-medium text-slate-100">{brand.name}</p>
                        <p className="text-sm text-slate-300 ">{brand.price}</p>
                      </div>
                    </li>
                  ))}
              </ul>
                </div>
                </div>
              </div>
          </div>
    </>
  )
}

export default Drinks;