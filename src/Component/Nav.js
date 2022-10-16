import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Navigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';


export default function Nav() {
    const [user] = useAuthState(auth)
    // UseUser(user)
    
    const handelSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            {/* {user && (
                <Navigate to="/artical" replace={true} />
            )} */}
            <div className='bg-blue-400 text-white text-xl justify-between flex px-4'>
                <Link to="/">Home</Link>
                {user ?
                    <Link onClick={handelSignOut} to="/">SignOut</Link>
                    :
                    <Link to="/">login</Link>
                }
            </div>
        </div>
    )
}
