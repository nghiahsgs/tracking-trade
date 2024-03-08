import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText } from "@/components/modal-waiting-order";
import { ISettings } from "@/types/settings";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import useUpdateUserInfo from "@/hooks/useUpdateUserInfo";

const Settings: React.FC = () => {
  const userInfo = useGetUserInfo();
  const updateUserInfo = useUpdateUserInfo();
  const { control, handleSubmit, reset } = useForm<ISettings>();
  const onSubmit = (data: ISettings) => {
    updateUserInfo.mutate(data);
  };
  useEffect(() => {
    if (userInfo.data) reset(userInfo.data);
  }, [userInfo.data]);

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
            rules={{ required: "Please input your access key!" }}
            name="access_key"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input placeholder="ACCESS KEY" {...field} />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            rules={{ required: "Please input your secret key!" }}
            name="secret_key"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input placeholder="SECRET KEY" {...field} />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            rules={{ required: "Please input your group telegram id!" }}
            name="group_telegram_chat_id"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input placeholder="Group telegram id" {...field} />
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
