import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Nav = () => {
  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="lexend font-extrabold  text-xl">Recipe Calories </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-8 lexend font-normal text-lg">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-6">
            <label className="input lg:w-[300px] w-[150px] flex items-center gap-4 rounded-full bg-base-200 border-none text-2xl ">
              <IoSearchOutline />
              <input type="text" className="grow text-lg  " placeholder="Search" />
            </label>
            <div className="circle rounded-full  bg-[#0BE58A] p-2">
            <CgProfile className="text-3xl"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Nav;
