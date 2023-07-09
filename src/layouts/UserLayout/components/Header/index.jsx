import * as S from "./style";
import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import Logo from "../../../../image/logo.png";
const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.StyleWrapper>
        <PhoneOutlined />
        <S.TitleWrapper>0903 545 910 - 0911 455 001</S.TitleWrapper>
      </S.StyleWrapper>
      <img src={Logo} alt="Logo" height={70} width={90} />
      <S.StyleWrapper>
        <EnvironmentOutlined />
        <S.TitleWrapper>Tổ 31 - Trường Sơn - Cẩm Lệ - Đà Nẵng</S.TitleWrapper>
      </S.StyleWrapper>
    </S.HeaderWrapper>
  );
};
export default Header;
