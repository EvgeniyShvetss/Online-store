import React from "react"
import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const RegisterForm = () => {
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
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
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
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Зарегистрироваться
        </Button>
        <Link to="/" className="auth__registr-link">
          Войти в акаунт
        </Link>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
