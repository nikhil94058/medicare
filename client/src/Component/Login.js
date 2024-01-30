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
          <div className="w-[100px] h-[100px] bg-zinc-300 rounded-full"><img src={user.picture} alt={user.name} /></div>

          <div className="text-black text-xs font-normal font-['Inter'] ml-2">{user.name}</div>
        </div>)}

      <ToastContainer />


    </div>
  )
}
