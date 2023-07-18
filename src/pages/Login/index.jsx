import * as S from "./style";
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import {ROUTES} from "../../constants/routers"
const Login = () => {
  return (
    <S.FormWrapper>
      <S.LoginFormWrapper>
        <S.TitleLoginWrapper>ĐĂNG NHẬP</S.TitleLoginWrapper>
        <Form layout="vertical" name="loginForm">
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
          <S.DetailWrapper>
            <S.RegisterAccountWrapper>
              Chưa có tài khoản ! &nbsp;
              <S.LinkWrapper to={ROUTES.REGISTER}>Đăng ký ngay</S.LinkWrapper>
            </S.RegisterAccountWrapper>
            <S.LinkWrapper>Quên mật khẩu</S.LinkWrapper>
          </S.DetailWrapper>
          <S.LoginWrapper>
            <S.BottomLoginWrapper>Đăng nhập</S.BottomLoginWrapper>
          </S.LoginWrapper>
        </Form>
      </S.LoginFormWrapper>
    </S.FormWrapper>
  );
};
export default Login;
