import React, { useState } from "react";
import styled from "@emotion/styled";

import OurPanther from "./OurPanther";
import OurRoadmap from "./OurRoadmap";
import TopHomeCarousel from "./TopHomeCarousel";
import BotHomeCarousel from "./BotHomeCarousel";
import LiveAuctionSlider from "./LiveAuctionSlider";

import { SafeAny } from "@core/models/common";

const Home = ({ newsData }) => {
  return (
    <HomePageWrap>
      <div className="container">
        <TopHomeCarousel />
        <BotHomeCarousel/>
        <LiveAuctionSlider/>
        <OurRoadmap />
        <OurPanther />
      </div>
    </HomePageWrap>
  );
};

export default React.memo(Home);

const HomePageWrap = styled.div`
  background: ${(props: SafeAny) => props.theme.colors.darkBg};
`;
