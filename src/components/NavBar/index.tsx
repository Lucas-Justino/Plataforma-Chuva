import { TbWorld } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";


export default function Navbar() {
  return (
    <header className="navbar bg-orange-100">
      <div className="flex-1 max-w">
        <span className="text-black max-w-96120">
          Anais do Simpósio Latino Americano de Ciências de Alimentos
          <br />
          <span className="font-semibold text-xl">
            Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
          </span>
          <br />
          ISSN: 1234-5678
        </span>
      </div>
      <div className="flex-none">
        <div className="dropdown mr-10 border border-gray-300">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square w-20 rounded-none">
            <div className="indicator">
              <TbWorld className="mr-1 text-black" />
              <span className="text-black">PT-BR</span>
              <IoMdArrowDropdown color="black" size={20}/>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-orange-100 shadow h-7 btn-square">
            <a href="" className="text-black">
              EN-US
            </a>
          </div>
        </div>
        <div>
          <p className="flex justify-end items-end h-full text-black">
            Bem Vindo!
          </p>
          <p className="text-black">
            alguem12@galoascience.com
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
