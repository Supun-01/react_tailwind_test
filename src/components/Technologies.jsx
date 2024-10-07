import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";


function Technologies() {
    return (
        <div className="border-b border-white pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>

            {/* --01 */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    animate={{ y: [0, -2, 0, 2, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>

                {/* --02 */}
                <motion.div
                    animate={{ y: [-2, 0, 2, 0, -2] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaJs className="text-6xl text-yellow-400" />
                </motion.div>

                {/* --03 */}
                <motion.div
                    animate={{ y: [0, 2, 0, -2, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">

                    <BiLogoMongodb className="text-6xl text-green-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -2, 0, 2, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <SiExpress className="text-6xl text-white" />
                </motion.div>

                <motion.div
                    animate={{ y: [-2, 0, 2, 0, -2] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaNodeJs className="text-6xl text-green-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 2, 0, -2, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <RiTailwindCssFill className="text-6xl text-blue-400" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -2, 0, 2, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaHtml5 className="text-6xl text-orange-600" />
                </motion.div>

                <motion.div
                    animate={{ y: [-2, 0, 2, 0, -2] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0
                    }}
                    className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaBootstrap className="text-6xl text-purple-500" />
                </motion.div>

            </div>
        </div>
    )
}

export default Technologies