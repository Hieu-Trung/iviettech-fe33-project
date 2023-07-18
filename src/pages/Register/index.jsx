import * as S from "./style";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { ROUTES } from "../../constants/routers";

const Register = () => {
  return (
    <S.FormWrapper>
      <S.LoginFormWrapper>
        <S.TitleLoginWrapper>ĐĂNG KÝ</S.TitleLoginWrapper>
        <Form layout="vertical" name="loginForm">
          <Form.Item
            style={{ color: "#ffffff" }}
            label="Tên tài khoản"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên của bạn",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Nhập tên của bạn"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#ffffff" }}
            label="Số điện thoại"
            name="numberPhone"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Nhập số điện thoại"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <Form.Item
            style={{ color: "#ffffff" }}
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Nhập email của bạn"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Nhập mật khẩu"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu ",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Xác nhận mật khẩu không khớp")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Nhập mật khẩu"
              style={{
                background: "rgba(128, 128, 128, 0.5)",
                color: "#ffffff",
              }}
            />
          </Form.Item>
          <S.DetailWrapper>
            <S.RegisterAccountWrapper>
              Đã có tài khoản ! &nbsp;
              <S.LinkWrapper to={ROUTES.LOGIN}>Đăng Nhập</S.LinkWrapper>
            </S.RegisterAccountWrapper>
          </S.DetailWrapper>
          <S.LoginWrapper>
            <S.BottomLoginWrapper>Đăng Ký</S.BottomLoginWrapper>
          </S.LoginWrapper>
        </Form>
      </S.LoginFormWrapper>
    </S.FormWrapper>
  );
};
export default Register;
