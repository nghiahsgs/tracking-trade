import React from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";
import CreateWaitingOrder from "@/components/create-waiting-order";
import styled from "styled-components";

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
    render: (_, record) => <Button type="default">Edit</Button>,
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
  <Container>
    <CreateWaitingOrder />
    <Table columns={columns} dataSource={data} pagination={false} />
  </Container>
);

export default WaitingOrder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
