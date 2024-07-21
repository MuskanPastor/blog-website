/*import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The Page Cannot Be Found</p>
            <Link to="/">Back to home...</Link>
        </div>
     );
}
 
export default NotFound*/
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found text-center mt-32 font-sans">
      <h2 className="text-5xl text-red-600 font-bold mb-6">Sorry</h2>
      <p className="text-xl text-gray-600 mb-10">The Page Cannot Be Found</p>
      <Link to="/" className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg font-medium text-lg w-full">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;


