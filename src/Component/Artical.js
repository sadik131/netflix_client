import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../firebase.init'
import Card from './Card'

export default function Artical() {
    const navigate = useNavigate()

    const [stripe, setStripe] = useState([])

    const [user, loading] = useAuthState(auth)
   

    if (user) {
        fetch("https://glacial-plateau-98015.herokuapp.com/api/v1", {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    alert("User added successfully")
                }
            })
    }

    const [userEmail, setUserEmail] = useState({})

    // console.log(userEmail.length)
    if(userEmail.length){
        navigate("/primiam")
    }

    useEffect(() => {
        const url = `https://glacial-plateau-98015.herokuapp.com/api/v1/user/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserEmail(data))
    }, [])

    // get a spacifiq user from data base

    useEffect(() => {
        const url = `https://glacial-plateau-98015.herokuapp.com/api/v1/price`
        fetch(url)
            .then(res => res.json())
            .then(data => setStripe(data.price.data))
    }, [])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {stripe.map(p => <Card
                key={p.id}
                price={p}
            ></Card>)}
        </div>
    )
}