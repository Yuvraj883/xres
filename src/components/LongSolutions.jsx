const LongSolution = () => {
    return (
      <div className="flex flex-col justify-center items-center px-[10%] font-poppins">
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="px-15">
            <img
              className="h-80 w-auto"
              src={require('../assets/disability-enhanced.png')}
              alt="disability"
            />
          </div>
          <div className="pt-16">
            <h1 className="text-5xl py-4 font-bold leading-snug">
              Disability Assistance
            </h1>
            <p className="text-lg w-[80%]">
              We have created innovative solutions to empower people with disabilities.
              Whether it's Dyslexia, Stuttering, blindness, or mute, we provide the best assistance to help you overcome challenges and feel more confident.
            </p>
          </div>
        </div>
  
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex-col justify-end items-center">
            <h1 className="text-5xl py-4 font-poppins font-bold leading-snug">
              Visualization
            </h1>
            <p className="text-lg w-[80%]">
              Explore, learn, and interact with 3D renders in real time. Our innovative visualizations enhance the learning experience, making complex concepts easier to grasp.
            </p>
          </div>
          <div className="px-15 mt-16"> {/* Add margin-top to match spacing */}
            <img
              className="h-64 w-auto"
              src={require('../assets/3D-enhanced.png')}
              alt="visualization"
            />
          </div>
        </div>
  
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="px-15">
            <img
              className="h-80 w-auto"
              src={require('../assets/handson-enhanced.png')}
              alt="hands-on"
            />
          </div>
          <div className="flex-col justify-center items-center">
            <h1 className="text-5xl py-4 font-poppins font-bold leading-snug">
              Hands-on Interactions
            </h1>
            <p className="text-lg w-[80%]">
              Our Augmented Reality Lab sessions offer hands-on interactive experiences, allowing you to perform experiments and enhance your learning, regardless of your location or available resources.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default LongSolution;
  