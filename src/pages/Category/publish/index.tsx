import React from 'react';
import { Button, Form, Input } from 'antd';
import { useRequest } from '@umijs/max'

import { addCakeCategory } from '@/apis/category'

const Publish: React.FC = () => {
  const { run } = useRequest((v) => addCakeCategory(v), { manual: true })

  const onFinish = async (values: any) => {
    const { status } = await run(values)
    console.log(status);
  };

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="分类名称"
          name="category"
          rules={[{ required: true, message: '请输入分类名称！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}



export default Publish;
