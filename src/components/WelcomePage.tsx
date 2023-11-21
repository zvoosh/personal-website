import { Layout } from "antd";
import { Link } from "react-router-dom";

const WelcomePage = () => {
    return (<>

        <div className="flex flex-column">
            <div className='nav-font'>
                <Layout style={{ height: "100%", width: '100%' }}>
                    <Layout>
                        <div style={{ height: '10vh', background: "white" }} className="flex justfiy-between align-center">
                            <div className="ml-2 font-13 font-fam letter-spacing-2">Dusan Ilic</div>
                            <div>
                                <span className="text-underline m-1 font-10 text-bold letter-spacing-2 underline-offset"><Link to="welcome">Welcome</Link></span>
                                <span className="text-underline m-1 font-10 text-bold letter-spacing-2 underline-offset">Profile</span>
                                <span className="text-underline m-1 font-10 text-bold letter-spacing-2 underline-offset">Current Work</span>
                                <span className="text-underline m-1 font-10 text-bold letter-spacing-2 underline-offset">Experiance</span>
                                <span className="text-underline m-1 font-10 text-bold letter-spacing-2 underline-offset">Free time</span>
                            </div>
                            <div className="h-10 m-1 flex align-center p-12 bg-black">
                                <span className="font-white letter-spacing-1 text-weight-600">
                                    Contact me
                                </span>
                            </div>
                        </div>
                    </Layout>
                </Layout>
            </div >

            <div style={{ width: '100%', height: '100%', background: 'white' }} >
                <div className="w-100 h-100" style={{ background: 'white' }}>
                    <div className="w-100 h-100">
                        <canvas width="100%" height='100%'>
                            an alternative text describing what your canvas displays.
                        </canvas>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export { WelcomePage }