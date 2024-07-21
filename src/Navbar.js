import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="bg-gray-800 py-4 px-6 sm:px-8">
      <h1 className="text-4xl font-bold text-white my-6 text-center">The IIT BHU Blog</h1>
      <div className="flex justify-center">
        <Link to="/" className="text-white bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-lg mr-4 font-medium text-lg">Home</Link>
        <Link to="/create" className="text-white bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-lg font-medium text-lg">New Blog</Link>
      </div>
    </nav>
  ); 
};

export default Navbar;
