import React, { useState } from 'react'
import LoginModal from './Modals/loginModal'
import SignModal from './Modals/SignModal'

export default function Home() {
    const [loginModal, setLoginModal] = useState(false)
    const [singinModal, setSinginModal] = useState(false)
    return (
        <div className='bg-[url("https://media.istockphoto.com/photos/popcorn-picture-id1396537282?s=612x612")] h-96 bg-no-repeat bg-cover'>
            <div className='pt-10'>
                <div className='card w-96 ml-10 bg-purple-600 text-white p-5'>
                    <h1 className='text-xl font-bold text-center'>Our Netfix Login page</h1>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <div className='flex justify-between mt-4'>
                        <label htmlFor="Account-modal" onClick={() =>setLoginModal(true)}  className="btn modal-button">Login</label>
                        <label htmlFor="signIn-modal" onClick={() =>setSinginModal(true) } className="btn modal-button">Sign Up</label>
                        {loginModal && <LoginModal setLoginModal={setLoginModal}></LoginModal>}
                        {singinModal && <SignModal setSinginModal={setSinginModal}></SignModal>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
