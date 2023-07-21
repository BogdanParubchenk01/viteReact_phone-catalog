import React from 'react'
import { NavLink } from 'react-router-dom'



export const Header: React.FC = () => {

  return (
    <header className=" h-max bg-white shadow box-border sticky">
      <div className=" flex justify-between items-center">
        <div className="px-6 py-4 flex justify-start items-center gap-11">
          <div className="w-min h-min">
            <NavLink to="#" className="block w-10 h-6">
              <img src="/Logo.svg" alt="Link Image" className="w-full h-full" />
            </NavLink>
          </div>

          <div className="mb-0.5">
            <ul className="w-[425px] h-[11px] flex justify-start items-center gap-16">
              <li>
                <NavLink to="#" className="text-zinc-800 text-xs font-bold uppercase leading-[11px] tracking-wide">Home</NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-neutral-400 text-xs font-bold uppercase leading-[11px] tracking-wide">Phones</NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-neutral-400 text-xs font-bold uppercase leading-[11px] tracking-wide">Tablets</NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-neutral-400 text-xs font-bold uppercase leading-[11px] tracking-wide">Accessories</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="w-[66px] h-14 bg-white shadow">
            <NavLink to="#" className="block pt-5 px-6">
              <img src="/Favourites.svg" alt="Favourites" />
            </NavLink>
          </div>
          <div className="w-[66px] h-14 bg-white shadow">
            <NavLink to="#" className="block pt-5 px-6">
              <img src="/Shopping bag.svg" alt="Shopping bag.svg" />
            </NavLink>
          </div>
        </div>
      </div>


      <div className="w-[440px] h-[3px] left-[108px] bottom-[0.1px] absolute m-0">
        <div className="w-[50.06px] h-[3px] bg-zinc-800 left-[100px] relative" />
      </div>


    </header>
  )
}
