import React from "react"
import { connect } from "react-redux"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Link, useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { authenticate } from "../../redux/actions/user"
import ROUTERS from "../../router"

const LoginForm = ({ authenticateAction }) => {
  const history = useHistory()
  const onHandleFinish = ({ email, password }) => {
    authenticateAction(email, password)
      .then((res) => {
        console.log(res)
      })
      .then(() => {
        history.push(ROUTERS.HOME)
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
          Войти
        </Button>
      </Form.Item>
      <Link to={ROUTERS.REGISTER} className="auth__registr-link">
        Зарегистрироваться
      </Link>
    </Form>
  )
}

LoginForm.propTypes = {
  authenticateAction: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  authenticateAction: authenticate,
}

export default connect(null, mapDispatchToProps)(LoginForm)
