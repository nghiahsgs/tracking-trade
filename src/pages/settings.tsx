import React from "react";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@/components/modal-waiting-order";
import { ISettings } from "@/types/settings";

const Settings: React.FC = () => {
  const { control, handleSubmit } = useForm<ISettings>();
  const onSubmit = (data: ISettings) => {
    console.log({ data });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Form
        name="settings"
        initialValues={{ remember: true }}
        onFinish={handleSubmit(onSubmit)}
        style={{ width: 300 }}
      >
        <Form.Item>
          <Controller
            rules={{ required: "Please input your API KEY!" }}
            name="api_key"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input placeholder="API KEY" {...field} />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            rules={{ required: "Please input your API SECRET!" }}
            name="api_secret"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input placeholder="API SECRET" {...field} />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Setting
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
