import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Col, Collapse, Row } from "antd";
import { ListStep1 } from "../../constants/constructions";
import { ListStep2 } from "../../constants/constructions";
import { ListStep3 } from "../../constants/constructions";

import * as S from "./style";
import { Fragment } from "react";
const Construction = () => {
  return (
    <Fragment>
      <ScrollAnimation animateIn="animate__fadeInDown">
        <S.TitleProcessWrapper>
          Quy trình thiết kế hoàn thiện nội thất
        </S.TitleProcessWrapper>
      </ScrollAnimation>
      <S.ProcessWrapper>
        <Row>
          <Col span={8}>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep1}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </ScrollAnimation>
          </Col>
          <Col span={16}>
            <ScrollAnimation animateIn="animate__fadeInRight">
              <S.ImageStep1Wrapper />
            </ScrollAnimation>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col span={16}>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <S.ImageStep2Wrapper />
            </ScrollAnimation>
          </Col>
          <Col span={8}>
            <ScrollAnimation animateIn="animate__fadeInRight">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep2}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </ScrollAnimation>
          </Col>
        </Row>
      </S.ProcessWrapper>
      <S.ProcessWrapper>
        <Row>
          <Col span={8}>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <S.StepProcessWrapper>
                <Collapse
                  style={{ backgroundColor: "#ececec" }}
                  items={ListStep3}
                  bordered={false}
                />
              </S.StepProcessWrapper>
            </ScrollAnimation>
          </Col>
          <Col span={16}>
            <ScrollAnimation animateIn="animate__fadeInRight">
              <S.ImageStep3Wrapper />
            </ScrollAnimation>
          </Col>
        </Row>
      </S.ProcessWrapper>
    </Fragment>
  );
};
export default Construction;
