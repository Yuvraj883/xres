import { Link } from "react-router-dom";

const Hero = ()=>{
    return(
        <>
            <div className="flex flex-row justify-center items-center my-8 px-[10%]">

            <div className="flex flex-col items-start justify-center">
                    <h1 className="text-[60px] mb-3 font-bold leading-tight">Unlocking Potential Through Inclusivity</h1>
                    <h3 className="text-xl font-bold">Learning Without Limits</h3>
                    <Link to="/get-started">
                    <button className=" bg-black font-semibold px-6 text-white py-2 rounded-full mt-8">Get Started</button>
                    </Link>
                </div>

                <img className="w-[473px] h-[586px] animate-custom-bounce"
                 src="https://s3-alpha-sig.figma.com/img/99f7/36ae/41ed4149983bc22e173adaf62684e74f?Expires=1692576000&Signature=eS8fHdhO9VH3PSAdFdAuL~MRXMsegB3Zbw98fovGTmq5jOYXdLXqDtEnB47MzyZuUXTXpViZslPCe0Q5jsCmNgwvdvgS8rt6ew4TcaJeB2G7~-4T~T89gOcpDtNTMAY7VcHdcSB2fhgHXyTKdq-XjGQ-PEqO0EJtJhrx9L3kxAuSiJ7N46ZRE10UJV2HAtoqb1wNXMVqgQr2tr-VUG-yGvoqd37P-PmFGrwPRtVcbzSZ~eoeNU4EbdHzJoE0giptC7Di~0hDcDDj~PNdKNz0mgFTEjsAcFpoJ~qdaIA-7uuSp4mvdAUUk6FDDFT8gntAXl5Uni12rqygexud8OiZIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hero"/>
               
            </div>
        </>
    )
}
export default Hero;