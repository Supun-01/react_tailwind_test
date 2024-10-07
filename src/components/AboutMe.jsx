import AboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

import { useInView } from "react-intersection-observer";



function AboutMe() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.1,    // How much of the element is visible before triggering (0.1 means 10%)
    });


    return (
        <div className="border-b border-white pb-4">
            <h2 className="my-20 text-center text-4xl">About <span className="bg-gradient-to-r from-purple-400 via-white to-cyan-300 bg-clip-text text-transparent" >Me</span>
            </h2>

            <div className="flex flex-wrap">
                <motion.div
                    ref={ref}
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0 }}

                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={AboutImg} alt="About Image" />
                    </div>

                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-start" ><p className="my-2 max-w-xl text-justify">{ABOUT_TEXT}</p></div>
                </motion.div>

                <motion.div
                    ref={ref}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Your Animated Content</h1>
                </motion.div>

            </div>
        </div>
    )
}

export default AboutMe