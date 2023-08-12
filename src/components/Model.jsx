import { useState } from "react";
const Model = ()=>{
    const [showCaption, setShowCaption] = useState(false);
    return(
        <>
            <div className="bg-gray-200 h-[600px] p-2 ">
                <div className="bg-yellow-200 h-[580px] relative">
                    <div className="h-[300px] w-[300px] bg-red-200 bottom-1 right-1 absolute ">
                    
                    </div>
                    <div className="absolute bottom-2  flex left-[25%] ">
                        <div className="py-3 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/Mic.png')} alt="Mic"/>
                        </div>
                        <div className="py-3 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/Plus.png')} alt="Plus"/>
                        </div>
                        <div className="py-3 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/Book.png')} alt="Book"/>
                        </div>
                        <div className="py-3 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/Hand.png')} alt="Hand"/>
                        </div>
                        <div className="py-3 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/CC.png')} alt="CC"/>
                        </div>
                        <div className="py-1 px-4 bg-white rounded-full">
                            <img className="h-8 cursor-pointer" src={require('../assets/Speak.png')} alt="Speak"/>
                        </div>
                        <div className="py-4 px-4 bg-white rounded-full m-1">
                            <img className="h-8 cursor-pointer" src={require('../assets/Delete.png')} alt="Delete"/>
                        </div>
                    </div>

                    <div className="absolute transform rotate-45  top-1 right-1">
                        <img className="h-12 cursor-pointer"
                        src={require('../assets/Plus.png')} alt="Cut"/>
                    </div>

                </div>
                
            </div>
        </>
    )
}
export default Model; 