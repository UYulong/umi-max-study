import React, { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useRequest } from '@umijs/max'
import ImgUpload from '@/components/ImgUpload'

import { getBanner, saveBanner } from '@/apis/banner';
import { useSearchParams } from '@umijs/max';

const BannerEdit: React.FC = () => {
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const [messageApi, contextHolder] = message.useMessage()

  const handleGetList = async () => {
    const objectId = searchParams.get('objectId')
    const res = await getBanner(objectId)
    form.setFieldsValue(res)
  }

  useEffect(() => {
    handleGetList()
  }, [])

  const { run } = useRequest((v) => saveBanner(v), { manual: true, })


  const resetForm = () => {
    form.resetFields()
  }

  const onFinish = async (values: any) => {
    console.log(values);
    const objectId = searchParams.get('objectId')
    const parmas = {
      objectId,
      ...values
    }
    const res: any = await run(parmas)
    if (res.updatedAt) {
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

export default BannerEdit;
