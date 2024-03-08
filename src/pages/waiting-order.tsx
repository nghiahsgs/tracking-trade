import React, { useState } from "react";
import { Button, Table, Tag, Typography } from "antd";
import type { TableProps } from "antd";
import CreateWaitingOrder from "@/components/create-waiting-order";
import styled from "styled-components";
import useGetWaitingOrder from "@/hooks/useGetListWaitingOrder";
import { IOrder } from "@/types/order";
import { numberToUSD } from "@/types/number";
import ModalWaitingOrder from "@/components/modal-waiting-order";

const WaitingOrder: React.FC = () => {
  const waitingOrders = useGetWaitingOrder();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderDetail, setOrderDetail] = useState<IOrder>();

  const columns: TableProps<IOrder>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      render: (value) => <Typography.Text strong>{value}</Typography.Text>,
    },
    {
      title: "Coin name",
      dataIndex: "coin_name",
      render: (value) => <Typography.Text>{`${value}/USDT`}</Typography.Text>,
    },
    {
      title: "Conditions",
      dataIndex: "conditions",
      render: (conditions: Array<string>) => {
        const listConditions = conditions.map((item) => item.split(" "));
        const colorTag = listConditions.map((item) =>
          item[1] === "Waiting" ? "" : "green"
        );
        return (
          <Typography.Text>
            {listConditions.map((item, index, array) => (
              <>
                {item[0]}&nbsp; <Tag color={colorTag[index]}>{item[1]}</Tag>
                {index !== array.length - 1 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </>
            ))}
          </Typography.Text>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "order_type",
      render: (type) => (
        <Tag color={type === "Buy" ? "green" : "red"}>{type}</Tag>
      ),
    },
    {
      title: "Note",
      dataIndex: "note",
      render: (note) => <Typography.Text>{note}</Typography.Text>,
    },
    {
      title: "Volume(USDT)",
      dataIndex: "volume",
      render: (volume) => (
        <Typography.Text strong>{`${numberToUSD(volume)}$`}</Typography.Text>
      ),
    },
    {
      title: "",
      key: "",
      width: "5%",
      render: (_, record) => {
        const { conditions } = record;
        const listConditions = (conditions as Array<string>).map((item) =>
          item.split(" ")
        );
        const isDisable = listConditions.find(
          (item) => item[1] === "Triggered"
        );
        return (
          <Button
            type="default"
            disabled={isDisable ? true : false}
            onClick={() => {
              showModal();
              const newRecord = {
                ...record,
                coin_name: `${record.coin_name}/USDT`,
              };
              setOrderDetail(newRecord);
            }}
          >
            Edit
          </Button>
        );
      },
    },
    {
      title: "",
      key: "",
      width: "5%",
      render: (_, record) => <Button danger>Delete</Button>,
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setOrderDetail(undefined);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setOrderDetail(undefined);
  };

  return (
    <Container>
      <CreateWaitingOrder />
      <Table
        loading={waitingOrders.isLoading}
        columns={columns}
        dataSource={waitingOrders.data}
        pagination={false}
      />
      {orderDetail && (
        <ModalWaitingOrder
          title="Update order"
          open={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
          onCancel={handleCancel}
          data={orderDetail}
        />
      )}
    </Container>
  );
};

export default WaitingOrder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
