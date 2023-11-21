import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderPage = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>()

    const navigate = useNavigate();

    return (
        <div className="nav-font">
            <div style={{ height: '100%', width: '100%' }}>
                <div>
                    <div style={{ height: '10vh', background: 'white' }} className="flex justify-between align-center">
                        <div className="ml-2 font-13 cursor font-fam letter-spacing-2" onClick={() => {
                            navigate("/");
                        }}>Dusan Ilic</div>
                        <div>
                            <span className="text-underline m-1 font-10 text-bold unselect cursor letter-spacing-2 underline-offset" onClick={() => {
                                navigate("/");
                            }}>
                                Welcome
                            </span>
                            <span className="text-underline m-1 font-10 text-bold unselect cursor letter-spacing-2 underline-offset" onClick={() => {
                                navigate("/profile");
                            }}>
                                Profile
                            </span>
                        </div>
                        <div className="h-10 m-1 flex align-center p-12 bg-black" onClick={() => {
                            setIsModalOpen((prev) => !prev);
                        }}>
                            <span className="contact-btn">
                                Contact me
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal title="Contact me" open={isModalOpen} onOk={() => {
                setIsModalOpen(true);
            }} onCancel={() => {
                setIsModalOpen(false);
            }}>
                <p className="mt-1">
                    Hi! 😜
                </p>
                <p className="mt-1">
                    My name is Dusan Ilic I am a software engeener that makes web applications.
                </p>
                <p className="mt-1">
                    I come from Belgrade a city from Serbia.
                </p>
                <p className="mt-1">
                    My email: <a href="https://mail.google.com/" target="_blank">dusan.ilic1999@gmail.com</a>
                </p>
            </Modal>
        </div>
    )
}

export { HeaderPage }