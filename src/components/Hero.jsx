import { HERO_CONTENT } from "../constants"
import { HERO_POSITION } from "../constants"
import dp from "../assets/kevinRushProfile.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

function Hero() {
    return (
        <div className="border-b border-white pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1

                            variants={container(0)}
                            initial="hidden"
                            animate="visible"

                            className="pb-16 text-6xl font-thin tracking-widest lg:text-8xl lg:mt-16">Supun Tharaka</motion.h1>
                    </div>

                    {/* When using the span element, apply inline-block with Tailwind CSS. */}
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="inline-block bg-gradient-to-r
        from-purple-400 via-white to-cyan-300 bg-clip-text text-transparent text-4xl">
                        {HERO_POSITION}
                    </motion.span>


                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className=" my-2 max-w-xl font-light text-justify tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>

                </div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="rounded-2xl w-full lg:w-1/2 lg:px-20 md:rounded-2xl" src={dp} alt="profile Picture" />
            </div>
        </div>
    )
}

export default Hero