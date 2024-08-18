import { useContext } from "react";
import { Navbar } from "../Sheared/Navbar"
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


export const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)
  const handleRegisterSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    console.log(name, photoUrl, email, password)

    if(password.length < 6 ){
      return alert('Password should be 6 characters or longer')
    }
    else if(!/[A-Z]/.test(password)){
      return alert('password should be at least 1 Uppercase')
    }
    else if(!checkbox){
      return alert('Please accept our terms and conditions')
    }

   createUser(email, password)
   .then(result => {
    const user = result.user;
    updateProfile(user, {
      displayName: name, photoURL: photoUrl
    })
    .then(() =>{
      console.log('profile updated')
    })
    .catch(() => console.log('error happen'))
         navigate('/login')
   })
   .catch(error => console.log(error))


  }
  return (
    <div className="bg-slate-100 pb-28">
      <Navbar variant={'slate'}></Navbar>
      <div className="max-w-5xl mx-auto bg-white mt-28">
      <h1 className="text-5xl text-center font-bold border-b py-12">Register Your Account</h1>
      <div className="w-3/4 mx-auto">
      <form onSubmit={handleRegisterSubmit} className="mt-12 justify-center items-center">
        <div className="flex flex-col">
        <label htmlFor="" className="font-bold text-xl mb-4">Your Name</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="text" name="name" placeholder="Enter your name" id="" />
        </div>
        <br />
        <div className="flex flex-col">
        <label htmlFor="" className="font-bold text-xl mb-4">Photo Url</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="text" name="photoUrl" placeholder="Enter your photoUrl" id="" />
        </div>
        <br />
        <div className="flex flex-col">
        <label htmlFor="" className="font-bold text-xl mb-4">Email Address</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="email" name="email" placeholder="Enter your email address" id="" />
        </div>
        <br />
        <div className="flex flex-col">
        <label className="font-bold text-xl mb-4" htmlFor="">Password</label>
        <input className="p-5 bg-slate-100 w-full rounded" type="password" name="password" placeholder="Enter your password" id="" />
        </div>
        <br />
        <div className="flex gap-3 mt-3">
          <input type="checkbox" name="checkbox" id="" />
          <p>Accept <span className="underline decoration-solid">terms and conditions</span></p>
        </div>
        <div className="mt-4 pb-20">
        <button className=" p-5 bg-gray-600 text-white font-bold text-xl w-full rounded">Login</button>
        </div>
        
      </form>
      </div>
      </div>
    </div>
  )
}
