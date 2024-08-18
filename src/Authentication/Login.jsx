import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "../Sheared/Navbar"
import { useContext } from "react"
import { AuthContext } from "./AuthProvider"


export const Login = () => {
  const navigate = useNavigate()
  const { loginUser} = useContext(AuthContext)

  const handleLoginSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    if(password.length < 6 ){
      return alert('Password should be 6 characters or longer')
    }
    else if(!/[A-Z]/.test(password)){
      return alert('password should be at least 1 Uppercase')
    }

    loginUser(email, password)
    .then(result =>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error => console.log(error))
  }
  return (
    
    <div className="bg-slate-100 pb-32">
      <h1>{name}</h1>
      <Navbar variant={'slate'}></Navbar>
      <div className="max-w-5xl mx-auto bg-white mt-32">
      <h1 className="text-5xl text-center font-bold border-b py-12">Login Your Account</h1>
      <div className="w-3/4 mx-auto">
      <form onSubmit={handleLoginSubmit} className="mt-12 justify-center items-center">
        <div className="flex flex-col">
        <label htmlFor="" className="font-bold text-xl mb-4">Email Address</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="email" name="email" placeholder="Enter your email address" />
        </div>
        <br />
        <div className="flex flex-col">
        <label className="font-bold text-xl mb-4" htmlFor="">Password</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="password" name="password" placeholder="Enter your password" />
        </div>
        <br />
        <div className="">
        <button className=" p-5 bg-gray-600 text-white font-bold text-xl w-full rounded">Login</button>
        </div>
      </form>
      <div className="mt-6 pb-16">
        <p> Do not Have an Account? <button className="text-underline text-red-500 ml-3"><Link to="/register">Register</Link></button></p>
      </div>
      </div>
      </div>
    </div>
  )
}
