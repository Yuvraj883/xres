import { Link } from "react-router-dom";

const Navbar = () => {
  // const backgroundImage = `url('../assets/linear-gradient-shadow.png')`;

  return (
   <>   
     <img className="relative h-48 w-[100%] mb-[-10%]" src={require('../assets/background-img.png')} alt="shadow"/>
        <div className=" absolute w-[90%] top-5 flex flex-row bg-white justify-between px-4 mx-8  items-center shadow-2xl rounded-full -shadow-3xl">
        <Link to="/">
                    <span className="font-bold text-xl">XRES</span>
                    </Link>
          <ul className="flex font-semibold">

            <Link to="/"> <li className="px-10 py-2 cursor-pointer">Home</li></Link>
            <li className="py-2 px-10 cursor-pointer">Features</li>
            <li className="py-2 px-10 cursor-pointer">Sign Up</li>
            <li className="py-2 px-4 cursor-pointer">
              <img
                className="h-8 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/73a7/2128/55a716ca3016df129585dc84ce1b84f3?Expires=1692576000&Signature=HzS4jJRCFKwKLZReji0bBybtlwo5iPoPYIK14okewtN-OQ7Wc0gLlN34Erdw8PabE8n1bP-qbd4UQz0rHgST4BsYOsFRQpXey3QwSjoLKc7Ffiz7-oxVNorHo~dLINiwgCNADWULbgsrFtqn6nW8s7YyEBjJdbRZOtLPxGcXn9wPFtZCVulW3hi-KSYbcJ5nU3eoo2LPZVUOa3JWyDfqU6Ezvxeam5-qCQbu-F4uGq-M9qh4rSVXpwbYzX3aCVzpngY9qVcRE0zVsrPD9hK5WkKLCgzaQJt9pHMFxLTOsuuJlQM5IFaKHghsUiPIDODGngHRU6p421s6n~Fpx3wZKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="profile"
              />
            </li>
          </ul>
        </div>
      
      </>
    
  );
};

export default Navbar;
