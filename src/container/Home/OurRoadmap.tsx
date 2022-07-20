import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";

const OurRoadmap = ({}) => {
  return (
    <OurRoadmapWrap>
      <h4>OUR PARTNERS</h4>
      <div className="row">
        <div className="col-md-3">
          <OurRoadmapTime>
            <h4>01 Q1/2022</h4>
            <ul>
              <li>Whitepaper</li>
              <li>IDO Landing page</li>
              <li>7Verse NFT Minting</li>
              <li>Smart contracts, Page UI design</li>
              <li>Launching NFT Staking </li>
            </ul>
          </OurRoadmapTime>
        </div>
        <div className="col-md-2">
          <OurRoadmapTime>
            <h4>02 Q2/2022</h4>
            <ul>
              <li>7 Verse NFT Marketplace</li>
              <li>NFT Squad Builder Platform</li>
              <li>NFT Staking Mechanic</li>
              <li>Community Building</li>
              <li>IDO whitelist contest</li>
              <li>Run Token Release</li>
              <li>Genesis NFT on Sale</li>
            </ul>
          </OurRoadmapTime>
        </div>
        <div className="col-md-3">
          <OurRoadmapTime>
            <h4>02 Q3/2022</h4>
            <ul>
              <li>Football Player Marketing program</li>
              <li>Betting system for NFT Holder</li>
              <li>FIFA Worlcup 2022 Marketing Program</li>
              <li>NFT holder reward program</li>
            </ul>
          </OurRoadmapTime>
        </div>
        <div className="col-md-4">
          <OurRoadmapTime>
            <h4>02 Q4/2022</h4>
            <ul>
              <li>Real time betting system with for guest user</li>
              <li>Worldcup 2022 Match Marketing</li>
              <li>Intergrated Crypto assets gate for bet user</li>
              <li>Smart contracts, Page UI design</li>
              <li>Bet and Earn program</li>
            </ul>
          </OurRoadmapTime>
        </div>
      </div>
    </OurRoadmapWrap>
  );
};

export default React.memo(OurRoadmap);

const OurRoadmapWrap = styled.div`
  background: ${(props: SafeAny) => props.theme.colors.darkBg};

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

const OurRoadmapTime = styled.div`
  h4 {
    background: ${(props: SafeAny) => props.theme.colors.grey};
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 16px;
    line-height: 18px;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

  ul {
    padding-left: 25px;
    li {
      list-style: disc;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      color: ${(props: SafeAny) => props.theme.colors.greyL};
    }
  }
`;
