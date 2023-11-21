import { Col, Form, Input, Row } from "antd";

const Login = () => {
    const [loginForm] = Form.useForm();


    return (
        <div className="login">
            <div className="wrap">
                <div className="log">
                    <Form form={loginForm} action="post" className="centerLogin" labelAlign="left"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 19 }} >
                        <div className="logindisplay">
                            <div className="centerTitleLogin">LOGIN</div>
                            <Row justify={'center'}>
                                <Col span={'24'}>
                                    <Form.Item name={'username'} label="Username">
                                        <Input placeholder="Username" />
                                    </Form.Item>
                                </Col>
                                <Col span={'24'}>
                                    <Form.Item name={"password"} label="Password">
                                        <Input placeholder="Password" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export { Login };