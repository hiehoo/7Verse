import React from "react";

import styled from "@emotion/styled";
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";
import { SafeAny } from "@core/models/common";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <MainLayoutWrapper>
      <MainLayoutHeader>
        <Header/>
      </MainLayoutHeader>

      <MainLayoutContent>
        <div>{children}</div>
      </MainLayoutContent>

      <MainLayoutFooter>
        <Footer />
      </MainLayoutFooter>
    </MainLayoutWrapper>
  );
};

export default React.memo(MainLayout);

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${(props: SafeAny) => props.theme.colors.darkBg};
`;

export const MainLayoutHeader = styled.div``;

export const MainLayoutContent = styled.div``;

export const MainLayoutFooter = styled.div`
  margin-top: auto;
`;
