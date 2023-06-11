import React from 'react';
import { Button, Form, Input } from 'antd';
import { useRequest } from '@umijs/max'
import ImgUpload from '@/components/ImgUpload'

import { addCakeCategory } from '@/apis/category'

const BannerPublish: React.FC = () => {
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
          label="活动名称"
          name="category"
          rules={[{ required: true, message: '请输入活动名称！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="活动链接"
          name="category"
          rules={[{ required: true, message: '请输入活动链接！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="封面图片"
          name="category"
          rules={[{ required: true, message: '请上传封面图片！' }]}
        >
          <ImgUpload />
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

export default BannerPublish;
