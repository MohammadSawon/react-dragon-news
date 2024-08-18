import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

export const Navbar = ({ variant }) => {
  const navigate = useNavigate()
  const {user, userSignOut} = useContext(AuthContext)

  const handleSignOut = () =>{
    userSignOut()
    .then(() => {
      navigate('/login')
      console.log('user is successfully sign out')
    })
    .catch(() => console.log('an error happen'))
  }
  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/Career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="pt-8">
      <div
        className={`navbar ${
          variant == "slate" ? "bg-slate-100" : "bg-base-100"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
          <div className="w-10">
            <Link to="/profile">
            <img
            className="rounded-lg"
              alt="Tailwind CSS Navbar component"
              src="../../src/assets/user.png"
            />
            </Link>
          </div>
         { user ? <button  onClick={handleSignOut} className="btn">
         <Link to="/login">Sign Out</Link> </button>
          :
           <button className="btn">
            <Link to="/login">Login</Link>
          </button>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  variant: PropTypes.string
}
