import { Avatar, Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface DataType {
  id: number;
  text: string;
  title: string;
  place: string;
  key: React.Key;
  category: string;
  is_reclama: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Field",
    dataIndex: "field",
    render: () => {
      return <Avatar src="" />;
    },
  },
  {
    title: "Text",
    dataIndex: "text",
  },
  {
    title: "Reklama",
    dataIndex: "is_reclama",
  },
  {
    title: "Place",
    dataIndex: "place",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Edit",
    render: () => {
      return (
        <>
          <div className="icon">
            <EditOutlined className="edit-icon" />
          </div>
        </>
      );
    },
  },
  {
    title: "Delete",
    render: () => {
      return (
        <>
          <div className="icon">
            <DeleteOutlined className="delete-icon" />
          </div>
        </>
      );
    },
  },
];

const data: DataType[] = [
  {
    id: 1,
    key: "1",
    title: "John Brown",
    is_reclama: "true",
    text: "New York No. 1 Lake Park",
    place: "Place",
    category: "Category",
  },
  {
    id: 2,
    key: "2",
    title: "Jim Green",
    text: "London No. 1 Lake Park",
    is_reclama: "false",
    place: "Place",
    category: "Category",
  },
  {
    id: 3,
    key: "3",
    title: "Joe Black",
    is_reclama: "true",
    text: "Sydney No. 1 Lake Park",
    place: "Place",
    category: "Category",
  },
];
// /getAllNewsCreate

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="buttons">
        <Button
          type="primary"
          onClick={() =>
            navigate({
              pathname: "/getAllNewsCreate",
            })
          }
        >
          Create Post
        </Button>
      </div>
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default App;
