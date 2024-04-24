import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import {InfinitySpin } from "react-loader-spinner"
import PropTypes from 'prop-types';

export const PrivateRouter = ({children}) => {
const {users, loading} = useContext(AuthContext)
const location = useLocation()

if(loading){
    return <div className="flex justify-center h-96 items-center"><InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    /></div>
}

if(users){
    return children
}

  return <Navigate to='/signIn' state={location?.pathname}></Navigate>
}

PrivateRouter.propTypes={
  children: PropTypes.node
}