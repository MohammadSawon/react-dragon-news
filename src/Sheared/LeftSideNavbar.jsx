import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


export const LeftSideNavbar = () => {
  const [categories, setCategories] = useState([])
  useEffect(() =>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  return (
    <div className="p-4 ">
      <h3 className="text-2xl font-semibold">All Category</h3>
      <div className="flex items-center justify-center">
      <div className="">
      {
        categories.map(category => <NavLink className='flex flex-col text-xl mt-2 p-2 hover:bg-slate-100' to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
      }
      </div>
      
      </div>
      <div className="mt-8">
        <div className="mt-2">
          <img src="../../src/assets/1.png" alt="" />
          <p className="my-2 text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex items-center">
            <p>Sports</p>
            <p>jan 4, 2022</p>
          </div>
        </div>
        <div className="mt-2">
          <img src="../../src/assets/2.png" alt="" />
          <p className="my-2 text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex items-center">
            <p>Sports</p>
            <p>jan 4, 2022</p>
          </div>
        </div>
        <div className="mt-2">
          <img src="../../src/assets/3.png" alt="" />
          <p className="my-2 text-xl font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
          <div className="flex items-center">
            <p>Sports</p>
            <p>jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}
