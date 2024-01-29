import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const notify = () => toast("You are Redirected to Some external website !");
  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <div className='bg-white'><button onClick={() => { loginWithRedirect(); notify(); }}>Log In</button></div>
        </div>) :
        (<div className='bg-white'><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
        </div>)}

      <ToastContainer />


    </div>
  )
}
