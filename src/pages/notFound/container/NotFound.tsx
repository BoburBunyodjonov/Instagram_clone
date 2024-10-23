import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-2xl mt-4 text-gray-700">Oops! Page not found.</p>
                <p className="mt-2 text-gray-500">The page you're looking for doesn't
                    exist or has been moved.</p>
                <Link to="/"
                    className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 
                   rounded-lg shadow hover:bg-blue-600 transition duration-300">Go
                    Back Home</Link>
            </div>
        </div>
    )
}

export default NotFound