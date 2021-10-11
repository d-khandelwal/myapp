
// styles
import "./styles.css"

import { Table } from 'antd';
import TableModal from "./tableModal";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    action: <TableModal />
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    action: <TableModal />
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    action: <TableModal />,
  },
];

function TableComponent() {

  return (
    <>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  )
}
export default TableComponent;