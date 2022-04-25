import { useState } from "react";
import React from "react";
import { Link } from 'react-router-dom'
import articleInfo from "../data/article-info";

const HomePage = () => {
    const [allPosts] = useState(articleInfo);

    return (
        <div className="bg-green-100 h-screen min-h-creen p-12">
            <div className="container mx-auto">
                <h2 className="text-5xl flex justify-center mb-2">My Gala Blog</h2>
                <h3 className="text-lg text-gray-600 flex justify-center mb-12">Hi Blog Welcome to my Guys</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPosts.map((allpost) => {
                        const { name, path, title } = allpost
                        return (
                            <Link to={`/articlepage/${name}`} >
                                <span className=" block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-800" key={name}>
                                    <img className="w-full h-full rounded-r object-cover absolute"
                                        src={path} alt="" />
                                </span>
                                <span className="relative flex justify-end items-end pr-4 pb-4">
                                    <h2 className="text-gray-800 text-lg fond bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded mt-2">
                                        {title}
                                    </h2>
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div >
        </div>
    )
}

export default HomePage;