import React from "react";
import { Avatar, List, Typography } from "antd";

const data = [
  {
    title: "API KEY",
    description: "API KEY",
  },
  {
    title: "API SECRET",
    description: "API SECRET",
  },
];

const Settings: React.FC = () => (
  <List
    itemLayout="horizontal"
    size="small"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          title={
            <Typography.Text strong style={{ display: "flex" }}>
              {item.title}
            </Typography.Text>
          }
          description={
            <Typography.Text style={{ display: "flex" }}>
              {item.description}
            </Typography.Text>
          }
        />
      </List.Item>
    )}
  />
);

export default Settings;
