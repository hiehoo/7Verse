import React, { useState } from "react";
import styled from "@emotion/styled";

import { SafeAny } from "../../core/models/common";
import Carousel from "antd/lib/carousel";
import ModalComponent from "@components/shared/Modal";
import { Button, Col, Row } from "antd";

const TopHomeCarousel = ({}) => {
  const [isShow, setIsShow] = useState(false);

  const onShowModalHandler = () => {
    console.log(1);
    setIsShow(true);
  };

  const onCloseModalHandler = () => {
    setIsShow(false);
  }

  return (
    <TopHomeCarouselWrap>
      <CarouselContent>
        {/* atoplay */}
        <Carousel dotPosition={`right`}>
          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/main-ronaldo.png" />
                <ImgWc>
                  <img src="/images/common/world-cup.png" />
                </ImgWc>
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>
                  Let's collect your first cards &amp; live the game with
                  passion
                </h2>
                <CarouselContentItemBtn
                  onClick={() => {
                    onShowModalHandler();
                  }}
                >
                  <img src="/images/common/explore-btn.svg" />
                </CarouselContentItemBtn>

                <CarouselContentItemData>
                  <DataItem>
                    <h4>700+</h4>
                    <p>Player's NFT</p>
                  </DataItem>

                  <DataItem>
                    <h4>160K+</h4>
                    <p>Auction</p>
                  </DataItem>

                  <DataItem>
                    <h4>12K+</h4>
                    <p>Licensed Players</p>
                  </DataItem>
                </CarouselContentItemData>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>

          <CarouselContentItem>
            <CarouselContentItemWrap>
              <CarouselContentItemImg>
                <img src="/images/common/footballteam.png" />
              </CarouselContentItemImg>
              <CarouselContentItemDes>
                <h2>
                Buy 7VR to earn more 7VR by building your Squad with NFT Cards and win the 7Verse Fantasy League.  
                </h2>
                <CarouselContentItemBtn
                  onClick={() => {
                    onShowModalHandler();
                  }}
                >
                  <Row>
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      <Button type="primary" shape="round"> Audited by Cyberscope.io</Button> 
                    </Col>              
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                      <Button type="primary" shape="round"> Purchase 7VR Token Presale Now!</Button> 
                    </Col>
                  </Row>
                </CarouselContentItemBtn>

                <CarouselContentItemData>
                  <DataItem>
                    <h4>700+</h4>
                    <p>Player's NFT</p>
                  </DataItem>

                  <DataItem>
                    <h4>160K+</h4>
                    <p>Auction</p>
                  </DataItem>

                  <DataItem>
                    <h4>12K+</h4>
                    <p>Licensed Players</p>
                  </DataItem>
                </CarouselContentItemData>
              </CarouselContentItemDes>
            </CarouselContentItemWrap>
          </CarouselContentItem>
        </Carousel>
      </CarouselContent>
      {isShow &&  <ModalComponent title="" modalShow={isShow} onCloseModalHandler={onCloseModalHandler}/> }
     
    </TopHomeCarouselWrap>
  );
};

export default TopHomeCarousel;

const TopHomeCarouselWrap = styled.div`
  .slick-dots-right {
    li {
      width: 10px !important;
      height: 10px !important;
      margin: 15px 2px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
      }
    }
    .slick-active {
      width: 10px !important;
      height: 10px !important;

      button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
        background: #f94a4a !important;
      }
    }
  }

    @media ${(props: any) => props.theme.device.smMax} {
    .slick-dots-right {
      li {
        margin: 5px 2px !important;
      }
    }

    .ant-carousel-vertical .slick-dots {
      top: 40%;
    }
  }
`;

const CarouselContent = styled.div``;

const CarouselContentItem = styled.div`
  height: 600px;
    @media ${(props: any) => props.theme.device.smMax} {
    height: 300px;
  }
`;

const CarouselContentItemWrap = styled.div`
  display: flex;
  height: 100%;
`;

const CarouselContentItemImg = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

const ImgWc = styled.div`
  position: absolute;
  bottom: 20px;
  img {
    width: 300px;
  }
`;

const CarouselContentItemDes = styled.div`
  width: 50%;
  padding: 100px 0 100px 20px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 65px;
    color: ${(props: SafeAny) => props.theme.colors.white};
  }

    @media ${(props: any) => props.theme.device.smMax} {
    padding: 30px 0 30px 20px;

    h2 {
      font-size: 17px;
      line-height: 27px;
    }
  }
`;

const CarouselContentItemBtn = styled.div`
  margin: 30px 0;
  cursor: pointer;

    @media ${(props: any) => props.theme.device.smMax} {
    margin: 15px 0;
  }
`;

const CarouselContentItemData = styled.div`
  display: flex;
`;

const DataItem = styled.div`
  margin-left: 30px;

  &:first-child {
    margin-left: none;
  }

  h4 {
    opacity: 0.7;
    font-size: 45px;
    // font-family: "Alegreya Sans";
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    background: linear-gradient(180deg, #be1313 57.6%, rgba(0, 0, 0, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
    color: ${(props: SafeAny) => props.theme.colors.white};
    opacity: 0.7;
  }

    @media ${(props: any) => props.theme.device.smMax} {
    margin-left: 10px;

    h4 {
      font-size: 16px;
      line-height: 20px;
    }

    p {
      font-size: 11px;
      line-height: 22px;
    }
  }
`;
