import React from 'react'

export default function Movie({ movie }) {
    console.log(movie ,"movie")
    return (
        <div className="card-body">
            <div className="card p-4 bg-base-100 shadow-xl">
                <figure><img className='object-cover h-[170px] w-full' src={movie.imageUrl} alt="Shoes" /></figure>
                <div><h2 className="text-2xl font-bold text-center uppercase">{movie.titel}</h2>
                    <p>{movie.content}</p>
                    <p className='text-xl font-bold'> Plan: {movie.access}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
