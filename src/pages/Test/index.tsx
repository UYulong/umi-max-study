// import { useEffect } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getCloudList } from '@/apis/test';
import { useRequest } from '@umijs/max';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

// const data: DataType[] = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

const TestPage: React.FC = () => {
  // const [list, setList] = useState([])

  // useEffect(() => {
  //   const getList = async () => {
  //     const res = await getCloudList({})
  //     console.log(res);
  //   }
  //   getList()
  // }, [])

  const { data, loading } = useRequest(() => getCloudList({}))

  console.log(data);


  return (
    <>
      <Table loading={loading} columns={columns} dataSource={data ? (data as any).results : []} rowKey='objectId' />
    </>
  );
};

export default TestPage;
