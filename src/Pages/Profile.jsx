import { useContext } from "react"
import { AuthContext } from "../Authentication/AuthProvider"
import { Navbar } from "../Sheared/Navbar";


export const Profile = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <Navbar></Navbar>
      {
        user && <div className="text-center">
          <h1 className="text-4xl">{user.displayName}</h1>
          <h1 className="text-4xl">{user.email}</h1>
        </div>
      }
    </div>
  )
}
