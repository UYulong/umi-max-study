import React from 'react';
import { useModel, history, useRequest } from '@umijs/max'
import { Button, Checkbox, Form, Input, Card, Row, Col } from 'antd';
import { login } from '@/apis/user'

const initData = {
  username: 'admin',
  password: '123456',
  remember: true
}

const Login: React.FC = () => {
  const { setInitialState } = useModel('@@initialState')

  const { run } = useRequest(login, {
    manual: true
  })

  const onFinish = async (values: any) => {
    if (!values) return

    const res = await run(values)

    if (res.sessionToken) {
      localStorage.setItem('userInfo', JSON.stringify(res))
      setInitialState({
        userInfo: {
          ...res
        }
      })

      setTimeout(() => {
        history.push('/')
      }, 1000)
    }
  };

  return (
    <Row align='middle' style={{ height: '100vh', background: 'F2F4F6' }}>
      <Col span={8} offset={8}>
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            initialValues={initData}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Login;