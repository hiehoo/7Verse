/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "@emotion/styled";

const BannerPageComponent = ({ imageUrl }) => {

  return (
    <BannerPageWrapper>
      <BannerPageContentWrap>
        <img src={imageUrl} />
      </BannerPageContentWrap>
    </BannerPageWrapper>
  );
};

export default BannerPageComponent;

const BannerPageWrapper = styled.div`
`;

const BannerPageContentWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-size: 20px;
    }
`;