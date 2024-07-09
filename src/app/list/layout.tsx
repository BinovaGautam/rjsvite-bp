import { Link } from "react-router-dom";


const Layout= ({children} : any) => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <header className="w-full flex justify-between items-center p-4 bg-white shadow-lg rounded-lg mb-4">
                <h1 className="text-2xl font-bold">FocusLocus</h1>
                <div className="text-right">
                    <p className="font-semibold">19th March</p>
                    <p className="text-sm text-gray-600">Sunday, 2024</p>
                </div>
            </header>
            {children}
            <button className="fixed h-12 bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <Link to="/testroute/addNew">+</Link>
            </button>
        </div>
    );
};

export default Layout;
