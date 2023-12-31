import { useState } from "react";
import { Link } from "react-router-dom";
import CameraView from "./CameraView";

const Model = () => {
  const [showCC, setShowCC] = useState(false);

  const toggleShowCC = () => {
    setShowCC(!showCC);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-gray-200 h-screen p-2 flex flex-col ">
          <div className="bg-yellow-200 h-[99.4%] relative">
            <CameraView/>
            <div className="h-[250px] w-[300px] bg-red-200 bottom-1 right-1 absolute "></div>
            {showCC && (
              <div className="absolute bottom-28 left-10 bg-white text-lg h-32 w-[75%] rounded-lg p-2 "></div>
            )}

            <div className="absolute bottom-2  flex left-[25%] ">
              <div className="py-2 px-6 bg-white rounded-full flex justify-center items-center m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Mic.png')}
                  alt="Mic"
                />
              </div>
              <div className="py-3 px-5 bg-white rounded-full flex justify-center items-center m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Plus.png')}
                  alt="Plus"
                />
              </div>
              <div className="py-3 px-4 bg-white rounded-full flex justify-center items-center m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Book.png')}
                  alt="Book"
                />
              </div>
              <div className="py-3 px-5 bg-white rounded-full flex justify-center items-center m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Hand.png')}
                  alt="Hand"
                />
              </div>
              <div
                onClick={toggleShowCC}
                className={
                  showCC
                    ? "py-6 px-5 bg-red-500 rounded-full flex justify-center items-center m-2 "
                    : "py-6 px-5 bg-white rounded-full flex justify-center items-center m-2 "
                }
              >
                <img
                  className="h-6 cursor-pointer"
                  src={require('../assets/CC.png')}
                  alt="CC"
                />
              </div>
              <div className="py-3 px-5 bg-white rounded-full flex justify-center items-center m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Speak.png')}
                  alt="Speak"
                />
              </div>
              <div className="py-3 px-5 bg-white rounded-full flex justify-center items-center  m-2 ">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Delete.png')}
                  alt="Delete"
                />
              </div>
            </div>

            <Link to="/">
              <div className="absolute transform rotate-45 bg-white py-3 px-3 rounded-full  top-1 right-1">
                <img
                  className="h-8 cursor-pointer"
                  src={require('../assets/Plus.png')}
                  alt="Cut"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
