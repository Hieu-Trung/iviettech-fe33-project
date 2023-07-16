import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBotMess from "./components/ChatBotMess";

import * as S from "./style";
const UserLayout = () => {
  return (
    <S.UserLayoutWrapper>
      <Header />
      <S.MainWrapper>
        <Outlet />
        <S.MainButtonWrapper>
          <ChatBotMess/>
        </S.MainButtonWrapper>
      </S.MainWrapper>
      <Footer />
    </S.UserLayoutWrapper>
  );
};
export default UserLayout;
