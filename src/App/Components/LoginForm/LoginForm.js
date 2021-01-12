import React from "react"
// import { useForm } from "react-hook-form"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values)
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
      </Form.Item>
      <Link to="/register" className="auth__registr-link">
        Зарегистрироваться
      </Link>
    </Form>
  )
}

export default LoginForm
