import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import Movie from './Movie'

export default function Primian_artical() {
    const [user , loading] = useAuthState(auth)
    const [movies, setMovie] = useState([])
    console.log(movies)

    console.log(user ,"user")
    useEffect(() => {
        fetch(`https://glacial-plateau-98015.herokuapp.com/api/v1/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setMovie(data))
            // console.log("first")
    }, [])
    return (
        <>
            {
                movies?.length ?
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            movies?.map(movie => <Movie
                                key={movie._id}
                                movie={movie}
                            ></Movie>)
                        }
                    </div>
                    :
                    <h1>You Don't have a plan or login again</h1>
            }
        </>
    )
}
