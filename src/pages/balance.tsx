import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

interface DataType {}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    render: () => <>-</>,
  },
  {
    title: "Coin Name",
    dataIndex: "coinName",
    render: () => <>-</>,
  },
  {
    title: "Balance",
    dataIndex: "balance",
    render: () => <>-</>,
  },
];

const data: DataType[] = [];

const Balance: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    locale={{ emptyText: "No data" }}
  />
);

export default Balance;
