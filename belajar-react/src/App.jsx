import React from "react";
import BackgroundImage from "./assets/bg.jpg";
import photoProfile from "./assets/photo.JPG";
function App() {
  return (
    <React.Fragment>
      <div className="antialiased relative text-gray-600">
        {/* ===================bagian luar=================== */}
        <div className="absolute w-full min-h-screen">
          <div
            className="absolute top-0 w-full h-1/2 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          ></div>
          <div className="absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 uppercase font-bold justify-center text-gray-600">
            <a className="hover:text-blue-600" href="#services">
              Services
            </a>
            <a className="hover:text-blue-600" href="#work">
              Work
            </a>
            <a className="hover:text-blue-600" href="#contact">
              Contact
            </a>
          </div>
        </div>
        {/* ===================bagian luar=================== */}
        {/* card identitas */}
        <div className="relative z-10 flex justify-center items-center min-h-screen h-auto ">
          <div className="max-w-4xl relative">
            <div className="absolute inset-0 transform -skew-x-4 rounded-lg z-10 -rotate-6 w-full max-w-4xl p-12 shadow-xl bg-gradient-to-r from-blue-500 to-red-500"></div>
            <div className="relative z-20 flex bg-white justify-between w-full max-w-4xl p-12 shadow-xl rounded-lg">
              <div className="flex flex-col space-y-6 py-6  justify-between">
                <div>
                  <h2 className="text-lg">Hello I AM</h2>
                  <h1 className="text-4xl font-bold text-gray-800">ROFL1ST</h1>
                </div>
                <p className="text-md leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  ea excepturi. Magnam libero natus laudantium sint ad quas
                  laboriosam labore!
                </p>
              </div>
              <img
                className="w-64 h-64 rounded-full border-white shadow-lg flex-shrink-0"
                src={photoProfile}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* card identitas */}
      </div>
    </React.Fragment>
  );
}

export default App;
