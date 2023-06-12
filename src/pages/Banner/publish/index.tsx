import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useRequest } from '@umijs/max'
import ImgUpload from '@/components/ImgUpload'

import { addBanner } from '@/apis/banner';

const BannerPublish: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage()
  const { run } = useRequest((v) => addBanner(v), { manual: true })

  const resetForm = () => {
    form.resetFields()
  }

  const onFinish = async (values: any) => {
    const { objectId } = await run(values)
    if (objectId) {
      messageApi.open({
        type: 'success',
        content: '保存成功！',
      });
      resetForm()
    }
  };



  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="活动名称"
          name="name"
          rules={[{ required: true, message: '请输入活动名称！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="活动链接"
          name="link"
          rules={[{ required: true, message: '请输入活动链接！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="封面图片"
          name="imgUrl"
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
