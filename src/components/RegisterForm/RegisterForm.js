import React from "react"
import { connect } from "react-redux"
import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { registration } from "../../redux/actions/user"

const RegisterForm = ({ registrationAction }) => {
  const history = useHistory()

  const onHandleFinish = ({ email, password, name }) => {
    registrationAction(email, password, name).then(() => {
      history.push("/login")
    })
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onHandleFinish}
    >
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Name!",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
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
        <Link to="/login" className="auth__registr-link">
          Войти в акаунт
        </Link>
      </Form.Item>
    </Form>
  )
}

RegisterForm.propTypes = {
  registrationAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  registrationAction: registration,
}

export default connect(null, mapDispatchToProps)(RegisterForm)
