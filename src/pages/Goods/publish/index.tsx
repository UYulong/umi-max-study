import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useRequest } from '@umijs/max'

import { addBanner } from '@/apis/banner';

import RichEditor from '@/components/RichEditor';

const GoodsPublish: React.FC = () => {
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
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="商品名称"
          name="goodsName"
          rules={[{ required: true, message: '请输入商品名称' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="商品详情"
          name="goodsDetail"
          rules={[{ required: true, message: '请输入商品详情' }]}
        >
          <RichEditor />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default GoodsPublish;
