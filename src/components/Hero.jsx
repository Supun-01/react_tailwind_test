import { HERO_CONTENT } from "../constants"
import { HERO_POSITION } from "../constants"
import dp from "../assets/kevinRushProfile.jpg"
import { motion } from "framer-motion"

function Hero() {
    return (
        <div className="border-b border-white pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 animate={{ x: 100 }} className="pb-16 text-6xl font-thin tracking-widest lg:text-8xl lg:mt-16">Supun Tharaka</motion.h1>
                    </div>

                    {/* <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-widest lg:text-8xl lg:mt-16">Supun Tharaka</h1>
                    </div> */}

                    <span className="bg-gradient-to-r
                    from-purple-400 via-white to-cyan-300 bg-clip-text text-transparent text-4xl">
                        {HERO_POSITION}
                    </span>
                    <p className=" my-2 max-w-xl font-light text-justify tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
                <img className="rounded-2xl w-full lg:w-1/2 lg:px-20 md:rounded-2xl" src={dp} alt="profile Picture" />
            </div>
        </div>
    )
}

export default Hero