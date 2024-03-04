import React from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    render: () => <>-</>,
  },
  {
    title: "CoinPair",
    dataIndex: "coinPair",
    render: () => <>-</>,
  },
  {
    title: "Condition",
    dataIndex: "condition",
    render: () => <>-</>,
  },
  {
    title: "Condition Status",
    key: "conditionStatus",
    render: () => <>-</>,
  },
  {
    title: "Type",
    key: "type",
    render: () => <>-</>,
  },
  {
    title: "Created At",
    key: "created_at",
    render: () => <>-</>,
  },
  {
    title: "Updated At",
    key: "updated_at",
    render: () => <>-</>,
  },
  {
    title: "Volume(USDT)",
    key: "volume",
    render: () => <>-</>,
  },
  {
    title: "",
    key: "",
    width: "5%",
    render: (_, record) => <Button type="primary">Edit</Button>,
  },
  {
    title: "",
    key: "",
    width: "5%",
    render: (_, record) => <Button danger>Delete</Button>,
  },
];

const data: DataType[] = [{}];

const WaitingOrder: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={false} />
);

export default WaitingOrder;
