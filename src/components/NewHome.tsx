import { FiLayers } from "react-icons/fi";
import { GrVirtualMachine } from "react-icons/gr";
import { FiTool } from "react-icons/fi";

const NewHome = () => {

    return (
        <div className="w-100 h-100 generalWrap flex flex-column hedvig-font" id="scrollcomponenet" >
            <div className="bg-white w-100 h-100">
                <div className="title" id="yourDivId">Frontend Developer & Gradiuation student</div>
                <div className="subtitle">I develop simple and practical things as my proffesion and hobby</div>
                <div className="flex justify-center marginForIcon backgroundSpace">
                    <div className="circleIcon">
                    </div>
                </div>
                <div className="computerBg">
                </div>
                <div className="welcomeSec">
                    <div className="m-1">
                        <div className="descriptionTitle">
                            Hi, I'm Dusan. Nice to meet you.
                        </div>
                        <div className="descriptionDescription">
                            I began my journey as a developer about four years ago when I enrolled at the University of Singidunum. The foundation of my technical knowledge was laid during my academic years.
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="iconTranslate">
                            <div className="cardIcon">
                                <div className="iconCircle">
                                    <FiLayers />
                                </div>
                            </div>
                        </div>
                        <div className="cardTitle">
                            User Interface
                        </div>
                        <div className="cardDescription">
                            <div>
                                Throughout my academic years, I grew found of UI or User Interface.
                            </div>
                            <div className="pt-2">
                                <div className="text-purple">
                                    Things I enjoy building:
                                </div>
                                <div className="p-1">
                                    Web presentations and aplications
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="text-purple">
                                    Tools I used to design and build UI:
                                </div>
                                <div className="p-1">
                                    Vue.js, React.js, Angular.js
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card ">
                        <div className="iconTranslate">
                            <div className="cardIcon">
                                <div className="iconCircle">
                                    <GrVirtualMachine />
                                </div>
                            </div>
                        </div>
                        <div className="cardTitle">
                            Web Aplications
                        </div>
                        <div className="cardDescription">
                            <div>
                                Journey from web presentations to scalable aplications with a solid knowledge of backend side is what interested me the most
                            </div>
                            <div className="pt-2">
                                <div className="text-purple">
                                    Things I enjoy building:
                                </div>
                                <div className="p-1">
                                    Fullstack applications
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="text-purple">
                                    Tools I used to design and build UI:
                                </div>
                                <div className="p-1">
                                    Vue.js, React.js, Angular.js, Node.js, Spring.java, MongoDB, MySQL
                                </div>
                            </div>
                        </div>
                    </div><div className="card">
                        <div className="iconTranslate">
                            <div className="cardIcon">
                                <div className="iconCircle">
                                    <FiTool />
                                </div>
                            </div>
                        </div>
                        <div className="cardTitle">
                            Testing aplications
                        </div>
                        <div className="cardDescription">
                            <div>
                                Last but not least I have learned to test my application and with that testing helps a lot during development.
                            </div>
                            <div className="pt-2">
                                <div className="text-purple">
                                    Things I enjoy testing:
                                </div>
                                <div className="p-1">
                                    Smaller functions as parts of a feature, or whole features
                                </div>
                            </div>
                            <div className="pt-1">
                                <div className="text-purple">
                                    Tools I used to test my applications
                                </div>
                                <div className="p-1">
                                    Jest.js, React-Testing-Library.js
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { NewHome }