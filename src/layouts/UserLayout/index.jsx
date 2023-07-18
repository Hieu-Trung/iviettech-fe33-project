import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBotMess from "./components/ChatBotMess";
import ButtonConstruction from "./components/ConstructionButton";

import * as S from "./style";
const UserLayout = () => {
  return (
    <S.UserLayoutWrapper>
      <Header />
      <S.MainWrapper>
        <Outlet />
        <S.MainButtonWrapper>
          <ChatBotMess />
          <ButtonConstruction />
        </S.MainButtonWrapper>
      </S.MainWrapper>
      <Footer />
    </S.UserLayoutWrapper>
  );
};
export default UserLayout;
