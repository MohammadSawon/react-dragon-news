import  { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../Authentication/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
  }
  if(user){
    return children;
  }
  else{
  return <Navigate to="/login"></Navigate>
  }

}

PrivateRouter.propTypes = {
  children: PropTypes.node
}

export default PrivateRouter