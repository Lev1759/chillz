import React from 'react'


const swallows = [
  {
    name: 'Vegetable Soup',
    img: '/image/veg.jfif',
    price: 'N1,500',
    id: 123
   },
  
   {
    name: 'Egusi Soup',
    img: 'image/egusi.jfif',
    price: 'N1,500',
    id: 124
   },
  
   {
    name: 'Afang Soup',
    img: 'image/afang.jfif',
    price: 'N1,500',
    id: 124
   }
  
]

// const soups = [
//   {
//     name: 'Cowtail',
//     img: '',
//     price: 'N1,500',
//     id: 123
//    },
  
//    {
//     name: 'Goat Meat',
//     img: '',
//     price: 'N1,500',
//     id: 124
//    },
  
//    {
//     name: 'Assorted',
//     img: '',
//     price: 'N1,500',
//     id: 125
//    }
  
// ]

const mains = [
 {
  name: 'White Rice',
  img: '/image/rice.jfif',
  price: 'N1,500',
  id: 123
 },

 {
  name: 'Jollof Rice',
  img: '/image/jollof.jfif',
  price: 'N1,500',
  id: 124
 },

 {
  name: 'Noodles & Egg',
  img: '/image/noodle.jfif',
  price: 'N1,000',
  id: 126
 }

]

const Food = () => {
  return (
    <div className='w-full bg-black text-white'>
      <div className='pt-24'>
      <h1 className='my-4 text-xl font-extrabold text-violet-500 border-spacing-2 border-b text-center p-3'>Naija Swallow</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-3">
          {swallows.map((swallow) => (
            <div key={swallow.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={swallow.img}
                  alt={swallow.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-4 text-sm text-gray-200">Served with: - Semo | Eba | Poundo | Fufu </p>
              <p className="mt-1 text-sm text-gray-200">Protein: - Chicken, Beef, Goat meat, Assorted Meat </p>

              <h3 className="mt-4 text-sm text-gray-300">{swallow.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-500">{swallow.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='py-24 mb-20'>
      <h1 className='my-4 text-xl font-extrabold text-violet-500 border-spacing-2 border-b text-center p-3'>Main Dish</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-3">
          {mains.map((main) => (
            <div key={main.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={main.img}
                  alt={main.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <p className="mt-4 text-sm text-gray-200">Protein: - Chicken, Beef, Goat meat, Assorted Meat </p>

              <h3 className="mt-4 text-sm text-gray-300">{main.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-500">{main.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Food;