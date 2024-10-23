
// Ant Components
import { FacebookOutlined } from "@ant-design/icons"
import { Button, Card, Col, Form, Input, Row } from "antd"

// Icons
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <>
            <div className="container mx-auto">
                <Row className="flex justify-center">
                    <Col className="w-full lg:w-[40%] xl:w-[30%] py-3 space-y-3">
                        <Card className="border border-[#c2c2c2] text-center rounded-none">
                            <div className="space-y-4 md:w-[80%] mx-auto py-5">
                                <h1 className="text-5xl" style={{
                                    fontFamily: "Lobster Two, sans-serif",
                                    fontWeight: 500,
                                    fontStyle: "normal"
                                }}>
                                    Instagram
                                </h1>
                            </div>
                            <div className="md:w-[80%] mx-auto pt-8">
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    style={{ maxWidth: 600 }}
                                    initialValues={{ remember: true }}
                                    // onFinish={onFinish}
                                    // onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    className="space-y-4"
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email or mobile number!' }]}
                                    >
                                        <Input size="large" className="bg-gray-100 rounded-none py-3" placeholder="Phone number, username or email" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password size="large" className="bg-gray-100 rounded-none py-3" placeholder="Password" />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="w-full py-5" size="large">
                                            Sign up
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div className="flex items-center my-4">
                                    <hr className="flex-grow border-t border-gray-300" />
                                    <span className="mx-2 text-gray-500 text-lg font-bold">OR</span>
                                    <hr className="flex-grow border-t border-gray-300" />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <span className="text-lg p-5 w-full cursor-pointer text-[#375085] font-semibold" ><FacebookOutlined className="text-lg bg-[#375085] text-white" /> Login in with Facebook</span>
                                    <Link to="" className="text-lg text-[#375085] ">Forgot password?</Link>
                                </div>
                            </div>
                        </Card>
                        <Card className="border border-[#c2c2c2] text-center rounded-none">
                            <p className="text-lg">Don't have an account? <Link className="text-[#0095F6] font-medium" to="/register">Sign up</Link> </p>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Login