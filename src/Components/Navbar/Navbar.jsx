import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-56 bg-stone-600 text-white flex flex-col items-start px-4 py-6 space-y-4">

        <NavLink
            to="/" className={({ isActive }) => `w-full px-3 py-2 rounded text-left transition ${ isActive ? "bg-stone-800 font-bold" : "hover:bg-stone-700"}`} > Home
        </NavLink>

        <NavLink
            to="/reading" className={({ isActive }) => `w-full px-3 py-2 rounded text-left transition ${ isActive ? "bg-stone-800 font-bold" : "hover:bg-stone-700"}`} > {" "}Reading
        </NavLink>
        <NavLink to="/reading-material-review" className={({ isActive }) => `w-full px-3 py-2 rounded text-left transition ${ isActive ? "bg-stone-800 font-bold" : "hover:bg-stone-700" }`} > {" "} Reading Review
        </NavLink>
    </nav>
  )
}

export default Navbar
