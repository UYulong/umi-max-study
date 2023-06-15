import { Table, Space, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { useRequest, history } from '@umijs/max';
import Img from '@/components/Img'

import { getBannerList } from '@/apis/banner';

interface DataType {
  key: string;
  name: string;
  age: number;
}

// 修改事件
const handleEdit = (record: any) => {
  history.push({
    pathname: '/banner/edit',
    search: `?objectId=${record.objectId}`
  })
}

const columns: ColumnsType<DataType> = [
  {
    title: '活动海报',
    dataIndex: 'imgUrl',
    key: 'imgUrl',
    width: 300,
    render: (text) => <Img src={text} />,
  },
  {
    title: '活动名称',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: '活动链接',
    dataIndex: 'link',
    key: 'link',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => {
      return (
        <Space size="middle">
          <Button type='primary' onClick={() => handleEdit(record)}>修改</Button>
        </Space>
      )
    }
  },
]

const BannerList: React.FC = () => {
  const { data, loading } = useRequest(() => getBannerList({}))

  return (
    <>
      <Table loading={loading} columns={columns} dataSource={data ? (data as any).results : []} rowKey='objectId' />
    </>
  );
};

export default BannerList;
