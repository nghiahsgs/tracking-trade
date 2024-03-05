import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import { ILogin } from "@/types/login";
import { FormHelperText } from "@/components/modal-waiting-order";

function Login() {
  const { control, handleSubmit } = useForm<ILogin>();

  const onSubmit = (data: ILogin) => {
    console.log(data);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "white",
      }}
    >
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit(onSubmit)}
        style={{ width: 300 }}
      >
        <Form.Item>
          <Controller
            rules={{ required: "Please input your username!" }}
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  {...field}
                />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Controller
            rules={{ required: "Please input your password!" }}
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  {...field}
                />
                <FormHelperText error={fieldState.error?.message}>
                  {fieldState.error?.message}
                </FormHelperText>
              </>
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

Login.getLayout = function getLayout() {
  return <Login />;
};
