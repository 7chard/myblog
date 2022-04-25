import React from "react";
import { useParams } from 'react-router-dom';
import articleInfo from "../data/article-info";
import { Link } from "react-router-dom";


const ArticlePage = () => {

    const { id } = useParams();
    const page = articleInfo.find(page => page.name === id);
    const { path, title, content, author, name } = page
    return (
        <div className="bg-gray-200 min-h-screen p-12">
            <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                <div className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center pb-12">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h2 className="text-5xl lg-text-6xl mb-4">
                                {title}
                            </h2>
                            <div className="flex justify-center text-gray-800">
                                <img className="w-10 h-10 rounded-full"
                                    src={path} alt={name} />
                                <h4 className="flex items-center pl-2 text-2xl">
                                    {author}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded-t" style={{ height: "400px" }}
                            src={path} alt={name} />
                    </div>
                    <div className="px-16 lg:px-48 py-12 max-w-full">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
            <>
                <Link to="/">
                    <span className="relative flex justify-end items-end pr-4 pb-4">
                        <h2 className="text-gray-800 text-lg fond bold px-3 py-3 mr-3 mt-2 bg-red-700 text-red-100 bg-opacity-75 rounded">
                            View More
                        </h2>
                    </span>
                </Link>
            </>
        </div>
    )


}

export default ArticlePage;