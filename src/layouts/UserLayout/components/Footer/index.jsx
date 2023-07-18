import { Col, Row } from "antd";
import * as S from "./style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <Row>
        <Col span={4}>
          <S.ConnectWrapper>
            <S.TitleWrapper>KẾT NỐI VỚI KHOA PHẠM</S.TitleWrapper>
            <S.TitleConnectWrapper>Follow : </S.TitleConnectWrapper>
            <S.MediaConnectWrapper>
              <Link>Facebook</Link> - <Link>Tiktok</Link>
            </S.MediaConnectWrapper>
          </S.ConnectWrapper>
        </Col>
        <Col span={10}>dá</Col>
        <Col span={10}>ưerwtyu</Col>
      </Row>
    </S.FooterWrapper>
  );
};
export default Footer;
