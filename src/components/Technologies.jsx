import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


function Technologies() {
    return (
        <div className="border-b border-white pb-24">
            <h1 className="my-20 text-center text-4xl">Technologies</h1>

            <div className="flex flex-wrap items-center justify-center gap-4">

                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </div>

                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaJs className="text-6xl text-yellow-400" />
                </div>

                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <BiLogoMongodb className="text-6xl text-green-400" />
                </div>

                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <SiExpress className="text-6xl text-white" />
                </div>


                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <RiTailwindCssFill className="text-6xl text-blue-400" />
                </div>

                <div className="rounded-2xl border-purple-700 border-4 p-3">
                    <FaHtml5 className="text-6xl text-orange-600" />
                </div>

            </div>
        </div>
    )
}

export default Technologies