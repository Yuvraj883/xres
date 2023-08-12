import { useState } from "react";
const GetStarted = ()=>{
    const [eduAssistance, setEduAssistance] = useState('true');
    const [teleAssistance, setTeleAssistance] = useState('false') ;
    
    const handleEducation= ()=>{
        setEduAssistance('true');
        setTeleAssistance('false');

    }

    const handleTeleTherapy = ()=>{
        setTeleAssistance('true'); 
        setEduAssistance('false');
    }



    return (

        <>
            <div className="flex flex-col justify-center items-center my-12 px-[10%] ">
                <div className="flex justify-around w-[50%]">
                     <button onClick={handleEducation} className={eduAssistance==='true' ?"font-semibold font-poppins text-white bg-black px-6 py-2 rounded-full":"font-semibold font-poppins text-[#757575]"}>Educational Assisatance</button>
                     <button onClick={handleTeleTherapy} className={teleAssistance==='true'?"font-semibold font-poppins text-white bg-black px-6 py-2 rounded-full":"font-semibold font-poppins text-[#757575]"}>Teletherapy Assisatance</button>
                </div>

                <div className="mt-8">

              {
                eduAssistance==='true'? (
                    <div className="flex justify-between items-end my-4 ">
                    <img className="h-96" src={require('../assets/Education1.png')} alt="edu2"/>
                    <img className="h-80"  src={require('../assets/Education2.png')} alt="edu1"/>

                </div>
                ):(
                    <div className="flex justify-between items-end my-4">
                    <img className="h-96" src={require('../assets/Tele1.png')} alt="Tele1"/>
                    <img className="h-96"  src={require('../assets/Tele2.png')} alt="Tele2"/>

                </div>
                )

              }
              </div>
             

            </div>
        </>
    )
}
export default GetStarted;