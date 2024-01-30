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
          <div className='bg-[#9BE8D8] text-orange-400'><button onClick={() => { loginWithRedirect(); notify(); }}>Log In</button></div>
        </div>) :
        (<div className='bg-[#9BE8D8] '>
          <img src={user.picture} alt={user.name} className='w-[50px] h-[50px] bg-zinc-300 rounded-full' />

          <div className="text-black text-xs font-normal font-['Inter']">{user.name}</div>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        </div>)}

      <ToastContainer />


    </div>
  )
}
