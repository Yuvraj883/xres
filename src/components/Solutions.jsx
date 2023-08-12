const Solutions = ()=>{
    return(
        <>
        <div className='py-8'>
            <div className="bg-[#F3F3F8] flex flex-col justify-center items-center w-[60%] mx-auto py-8 rounded-xl">
        <h1 className='text-xl font-bold'>We provide immersive solution to</h1>

             <div className='flex justify-between items-center  mt-6'>
                
                 
            <div className='p-4 m-2'>
                    <img 
                    className='h-40 mb-6'
                    src={require('../assets/3d-front-gradient.png')} alt="3d"/>
                    <p className='font-semibold text-xl'>Visulisation</p>
                    
                </div> 
                <div className='p-4 m-2'>
                    <img 
                    className='h-40 mb-6'
                    src={require('../assets/handson.png')} alt="3d"/>
                    <p className='font-semibold text-xl'>Hands On Interaction</p>
                </div>
                <div className='p-4 m-2'>
                    
                    <img 
                    className='h-40 mb-6'

                    src={require('../assets/disability.png')} alt="3d"/>
                    <p className='font-semibold text-xl'>Disability Assistance</p>
                    
                </div>
                
                </div>
            </div>
            </div>
        </>
    )
}
export default Solutions;