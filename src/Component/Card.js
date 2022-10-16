import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

export default function Card({price}) {
    const [user] = useAuthState(auth)
    
    const backgroundColor = {
        Basic:"rgb(104,219,104)",
        Standert:"rgb(185,42,23,0.835)",
        Premium:"pink"
    }

    const handelPayment=(id) =>{
        const data ={
            price: id,
            email: user.email
        }
        fetch("https://glacial-plateau-98015.herokuapp.com/api/v1/sessions" ,{
            method:"POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data =>{
            window.location.href = data.url
        })
    }

    return (
        <div>
            <div style={{background: backgroundColor[price.nickname]}} className="card mt-5 ml-5 shadow-xl image-full">
                <div className="card-body">
                    <h1>${price.unit_amount/100}</h1>
                    <h1>{price.nickname}</h1>
                    <button onClick={()=>handelPayment(price.id)} className='btn btn-xl w-[8.5rem]'>Subscribe Now</button>
                </div>
            </div>
        </div>
    )
}
