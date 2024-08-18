import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../src/assets/qZone1.png";
import qZone2 from "../../src/assets/qZone2.png";
import qZone3 from "../../src/assets/qZone3.png";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase";

export const RightSideNavbar = () => {
  
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignUp = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user)
    })
    .catch(error=> console.log(error.message))
    
  }

  const handleGithubSignUp = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="mb-8">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Login with</h3>
        <button onClick={handleGoogleSignUp} className="btn btn-outline w-full mb-2">
          <FaGoogle></FaGoogle> Sign in with Google
        </button>
        <button onClick={handleGithubSignUp} className="btn btn-outline w-full">
          <FaGithub></FaGithub> Sign in with GitHub
        </button>
      </div>
      <div className="p-4 mt-4">
        <h3 className="text-xl font-bold mb-4">Find us on</h3>
        <p className="p-2 border rounded-t-md flex gap-2 items-center">
          <FaFacebook></FaFacebook> Facebook
        </p>
        <p className="p-2  border-x flex gap-2 items-center">
          <FaTwitter></FaTwitter> Facebook
        </p>
        <p className="p-2 border rounded-b-md flex gap-2 items-center">
          <FaInstagram></FaInstagram> Facebook
        </p>
      </div>
      <div className="p-4 bg-slate-100 mt-4">
        <h3 className="text-xl font-bold mb-4">Q-zone</h3>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div
        style={{ backgroundImage: `url(../../src/assets/bg.png)` }}
        className="p-10 mt-4"
      >
        <h3 className="text-xl text-center font-bold text-white mb-4">
          Create an Amazing Newspaper
        </h3>
        <p className="text-center text-white">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className=" text-center my-4">
          <button className="btn btn-sm rounded-none text-white btn-error">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
