import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <>
            <div className="flex flex-row  justify-center  items-center mt-[5%] px-[10%]">

                <div className="flex flex-col items-start justify-start mt-0 text-5xl font-bold w-[50%]">
                    <div className="mt-[-25%]">
                    <Typewriter
                        words={[" Empowering Education, Bridging Abilities", 'Unlocking Learning for All', 'Where Diversity Meets Learning', 'Education Elevated, Inclusivity Integrated', 'Learning Without Limits, Embracing Every Ability']}
                        loop={99999}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </div>
                    <Link to="/get-started">
                        <button className=" bg-black font-semibold px-6 text-xl absolute bottom-60 text-white py-2 rounded-full mt-8">Get Started</button>
                    </Link>
                </div>

                <img className="w-[473px] h-[586px] animate-custom-bounce "
                    src="https://s3-alpha-sig.figma.com/img/99f7/36ae/41ed4149983bc22e173adaf62684e74f?Expires=1692576000&Signature=eS8fHdhO9VH3PSAdFdAuL~MRXMsegB3Zbw98fovGTmq5jOYXdLXqDtEnB47MzyZuUXTXpViZslPCe0Q5jsCmNgwvdvgS8rt6ew4TcaJeB2G7~-4T~T89gOcpDtNTMAY7VcHdcSB2fhgHXyTKdq-XjGQ-PEqO0EJtJhrx9L3kxAuSiJ7N46ZRE10UJV2HAtoqb1wNXMVqgQr2tr-VUG-yGvoqd37P-PmFGrwPRtVcbzSZ~eoeNU4EbdHzJoE0giptC7Di~0hDcDDj~PNdKNz0mgFTEjsAcFpoJ~qdaIA-7uuSp4mvdAUUk6FDDFT8gntAXl5Uni12rqygexud8OiZIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="hero" />

            </div>
        </>
    )
}
export default Hero;