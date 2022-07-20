import React from "react";

import styled from "@emotion/styled";
import Image from "next/image";
import icoMeta from "public/images/social/icon-meta.svg";
import icoInst from "public/images/social/icon-inst.svg";
import icoLinked from "public/images/social/icon-linked.svg";
import icoTwiter from "public/images/social/icon-twiter.svg";

import { SafeAny } from "@core/models/common";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <LogoWrapper>
              <ImageLogo src="/images/common/main-logo.png" />
              <p>
                The worlds largest digital marketpalce <br /> for crypto
                collectibities and non-fungible <br /> tokens(NFTs) Buy, Sell
                and <br /> discover exclusive digital assets.
              </p>
              <SocialWrap>
                <div>
                  <Image src={icoMeta} />
                </div>
                <div>
                  <Image src={icoInst} />
                </div>{" "}
                <div>
                  <Image src={icoLinked} />
                </div>{" "}
                <div>
                  <Image src={icoTwiter} />
                </div>
              </SocialWrap>
            </LogoWrapper>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-4">
                <FooterMenuWrap>
                  <ul>
                    <li>Explore</li>
                    <li>
                      <a>NFT Marketplace</a>
                    </li>
                    <li>
                      <a>Bet N Earn</a>
                    </li>
                    <li>
                      <a>NFT Squad Builder</a>
                    </li>
                    <li>
                      <a> 7Verse Fantasy League</a>
                    </li>
                  </ul>
                </FooterMenuWrap>
              </div>
              <div className="col-md-4">
                <FooterMenuWrap>
                  <ul>
                    <li>Resources</li>
                    <li>
                      <a>Help centre</a>
                    </li>
                    <li>
                      <a>Partners</a>
                    </li>
                    <li>
                      <a>Suggestions</a>
                    </li>
                    <li>
                      <a>Newsletter</a>
                    </li>
                  </ul>
                </FooterMenuWrap>
              </div>
              <div className="col-md-4">
                <FooterMenuWrap>
                  <ul>
                    <li>Company</li>
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a>Careers</a>
                    </li>
                    <li>
                      <a>Rankings</a>
                    </li>
                    <li>
                      <a>Rankings</a>
                    </li>
                  </ul>
                </FooterMenuWrap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  background: ${(props: SafeAny) => props.theme.colors.darkBg};
`;

const LogoWrapper = styled.div`
  p {
    color: ${(props: SafeAny) => props.theme.colors.white};
    opacity: 0.7;
    margin: 20px 0;
    font-size: 16px;
  }
`;

const ImageLogo = styled.img`
  width: 200px;
  height: auto;
`;
const SocialWrap = styled.div`
  display: flex;
  div {
    padding-left: 15px !important;
    cursor: pointer;
    &:first-child {
      padding-left: 0 !important;
    }
  }
`;

const FooterMenuWrap = styled.div`
  ul {
    li {
      font-weight: 400;
      font-size: 16px;
      line-height: 35px;
      color: ${(props: SafeAny) => props.theme.colors.white};
      opacity: 0.7;

      &:first-child {
        color: ${(props: SafeAny) => props.theme.colors.redG};
      }

      &:hover {
        color: ${(props: SafeAny) => props.theme.colors.redG};
      }
    }
    
    @media ${(props) => props.theme.device.smMax} {
      padding-left: 0;
    }
  }
`;
