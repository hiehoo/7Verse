import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";

const OurPanther = ({}) => {
  return (
    <OurPantherWrap>
      <h4>OUR PARTNERS</h4>
      <OurPantherBg>
        <OurPantherImgWrap>
          <img src="/images/common/logo-partner-1.png" />
        </OurPantherImgWrap>
        <OurPantherImgWrap>
          <img src="/images/common/logo-partner-2.png" />
        </OurPantherImgWrap>
      </OurPantherBg>
    </OurPantherWrap>
  );
};

export default React.memo(OurPanther);

const OurPantherWrap = styled.div`
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
    margin-top: 40px;
    margin-top: 40px;
  }
`;

const OurPantherBg = styled.div`
  background: rgba(217, 217, 217, 0.06);
  border-radius: 13.6316px;
`;

const OurPantherImgWrap = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 90%;
    padding: 10px 0;
  }
`;
