
// Ant Components
import { Button, Card, Col, Form, Input, Row } from "antd"

// Icons
import { FacebookOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"



const Register = () => {
    return (
        <>
            <div className="container mx-auto">
                <Row className="flex justify-center">
                    <Col className="w-full lg:w-[40%] xl:w-[30%] py-3 space-y-3">
                        <Card className="border border-[#c2c2c2] text-center rounded-none">
                            <div className="space-y-4 md:w-[80%] mx-auto">
                                <h1 className="text-5xl" style={{
                                    fontFamily: "Lobster Two, sans-serif",
                                    fontWeight: 500,
                                    fontStyle: "normal"
                                }}>
                                    Instagram
                                </h1>
                                <p className="text-lg mt-4 font-semibold text-[#737373] w-[90%] mx-auto" >Sign up to see photos and videos from your friends.</p>
                                <Button className="text-md p-5 w-full" type="primary" icon={<FacebookOutlined className="text-lg" />} >Login in with Facebook</Button>
                                <div className="flex items-center my-4">
                                    <hr className="flex-grow border-t border-gray-300" />
                                    <span className="mx-2 text-gray-500 text-lg font-bold">OR</span>
                                    <hr className="flex-grow border-t border-gray-300" />
                                </div>
                            </div>
                            <div className="md:w-[80%] mx-auto pt-3">
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
                                        <Input size="large" className="bg-gray-100 rounded-none py-3" placeholder="Mobile Number or Email" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password size="large" className="bg-gray-100 rounded-none py-3" placeholder="Password" />
                                    </Form.Item>

                                    <Form.Item
                                        name="name"
                                        rules={[{ required: true, message: 'Please input your full Name!' }]}
                                    >
                                        <Input size="large" className="bg-gray-100 rounded-none py-3" placeholder="Full Name" />
                                    </Form.Item>

                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input size="large" className="bg-gray-100 rounded-none py-3" placeholder="Username" />
                                    </Form.Item>
                                    <p className="text-[#737373] text-md">
                                        People who use our service may have uploaded your contact information to Instagram.
                                        <Link className="text-[#01376A]" to="https://www.facebook.com/help/instagram/261704639352628">Learn More</Link>
                                    </p>
                                    <p className="text-[#737373] text-md">

                                        By signing up, you agree to our  <Link className="text-[#01376A]" to="https://help.instagram.com/581066165581870/?locale=en_US">Terms</Link>, <Link className="text-[#01376A]" to="https://www.facebook.com/privacy/policy">Privacy Policy</Link>  and  <Link className="text-[#01376A]" to="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy</Link> .

                                    </p>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="w-full py-5" size="large">
                                            Sign up
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Card>
                        <Card className="border border-[#c2c2c2] text-center rounded-none">
                            <p className="text-lg">Have an account? <Link className="text-[#0095F6] font-medium" to="/login">Log in</Link> </p>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Register