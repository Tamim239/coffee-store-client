import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/firebase.config"
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthProvider = ({children}) => {
const [users, setUsers] = useState(null)
const [loading, setLoading] = useState(true)


const createUser = (email, password) =>{
  setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}
const signIn = (email, password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
const createGoogle = ()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}
const createGithub = ()=>{
  setLoading(true)
  return signInWithPopup(auth, githubProvider)
}

const logOut = () =>{
  setLoading(true)
  return signOut(auth)

}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser=>{
    setLoading(false)
    setUsers(currentUser)
  })
  return ()=>{
    unSubscribe()
  }

},[])

const AuthInfo ={
    users,
    loading,
    createUser,
    signIn,
    logOut,
    createGoogle,
    createGithub,
}
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes={
  children: PropTypes.node
}