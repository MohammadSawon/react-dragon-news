import { createContext, useEffect, useState } from "react"
import {PropTypes} from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import auth from "../firebase/firebase"

export const AuthContext = createContext(null)
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userSignOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, result =>{
      console.log()
      setUser(result)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])


  const authInfo = {user, loading, createUser, loginUser, userSignOut}
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
          {
            children
          }
        </AuthContext.Provider>
    </div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}
